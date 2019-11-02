/**
 * 
 * 迭代器模式
 * 应用场景: 
 * jQuery each
 * ES6 Iterator
 * 
 * */

//  示例一
// class Iterator {
//     constructor(container){
//         this.list = container.list;
//         this.index = 0;
//     }
//     next(){
//         if(this.hasNext()){
//             return this.list[this.index ++]
//         }
//         return null;
//     }
//     hasNext(){
//         if (this.index >= this.list.length) {
//             return false;
//         }
//         return true;
//     }
    
// }

// class Container{
//     constructor(list) {
//         this.list = list;
//     }
//     getIterator(){
//         return new Iterator(this)
//     }
// }

// const arr = [1,2,3,4,5,6,7];
// const container = new Container(arr);
// const iterator = container.getIterator();

// while(iterator.hasNext()){
//     console.log(iterator.next());
// }


// 示例二
// function each(data){
//     let iterator = data[Symbol.iterator]();
//     let item = {done: false}

//     while(!item.done){
//         item = iterator.next();
//         if(!item.done) {
//             console.log(item.value);
//         }
//     }
// }

// const arr = [1,2,3,4,5,6,7];
// const nodeList = document.getElementsByTagName('p');
// let m = new Map();
// m.set('a', 100);
// m.set('b', 200);

// each(arr);
// each(nodeList);
// each(m);


// 示例三
function each(data){
    for(const item of data){
        console.log(item);
    }
}

const arr = [1,2,3,4,5,6,7];
const nodeList = document.getElementsByTagName('p');
let m = new Map();
m.set('a', 100);
m.set('b', 200);


each(arr);
each(nodeList);
each(m);