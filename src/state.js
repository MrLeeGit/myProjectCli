/**
 * 
 * 状态模式
 * 应用场景: 
 * 
 * */

//  示例一
// class State {
//     constructor(color){
//         this.color = color;
//     }
//     handle(context){
//         console.log(`trun to ${this.color} light`);
//         context.setState(this);
//     }
// }

// class Context{
//     constructor(){
//         this.state = null;
//     }
//     getState(){
//         return this.state;
//     }
//     setState(state){
//         this.state = state;
//     }
// }

// const context = new Context();

// const red = new State('red');
// const yellow = new State('yellow');
// const green = new State('green');

// green.handle(context);
// console.log(context.getState())

// yellow.handle(context);
// console.log(context.getState())

// red.handle(context);
// console.log(context.getState())


//示例二
// import StateMachine from 'javascript-state-machine';
// import $ from 'jquery';

// const fsm = new StateMachine({
//     init: '收藏',
//     transitions: [
//         {
//             name: 'doStore',
//             form: '收藏',
//             to: '取消收藏'
//         },
//         {
//             name: 'deleteStore',
//             form: '取消收藏',
//             to: '收藏'
//         },
//     ],
//     methods: {
//         onDoStore: function(){
//             alert('收藏成功');
//             updateText();
//         },
//         onDeleteStore: function(){
//             alert('已取消收藏');
//             updateText();
//         }
//     }
// });

// const $btn = $('#btn'); 

// $btn.click(function(){
//     if(fsm.is('收藏')){
//         fsm.doStore();
//     } else {
//         fsm.deleteStore();
//     }
// })

// const updateText = function() {
//     $btn.text(fsm.state)
// }

// updateText();


//示例三
import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
    init: 'pending',
    transitions:[
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled',
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected',
        }
    ],
    methods: {
        // 监听resolve
        onResolve: function(state, data){
            // state - 当前状态机实例   data - fsm.resolve(xxx)传递的参数
            data.successList.forEach(fn => fn());
        },
        // 监听reject
        onReject: function(state, data){
            // state - 当前状态机实例   data - fsm.reject(xxx)传递的参数
            data.failList.forEach(fn => fn());
        },
    }
});

class MyPromise{
    constructor(fn){
        this.successList = [];
        this.failList = [];
        fn(() => {
            // resolve函数
            fsm.resolve(this);
        },() => {
            // reject函数
            fsm.reject(this);
        });
    }
    then(successFn, failFn){
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}


// 测试代码
function loadImg(src) {
    const promist = new MyPromise(function(resolve, reject){
        const img = document.createElement('img');
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject(img)
        }
        img.src = src;
    })

    return promist;
}

const imgSrc = 'https://d1.sinaimg.cn/201911/01/1562493_11.2-22222-710x340.jpg';
const result = loadImg(imgSrc);

result.then(function(){
    console.log('图片加载成功1')
},function(){
    console.log('图片加载失败1')
})

result.then(function(){
    console.log('图片加载成功2')
},function(){
    console.log('图片加载失败2')
})






