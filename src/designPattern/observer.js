/**
 * 
 * 观察者模式
 * 应用场景: 
 * jQuery callbacks
 * nodejs 自定义事件 处理http请求；多进程通讯
 * nodejs stream
 * vue 和 React 组件生命周期触发
 * vue watch
 * 
 * */

//  示例一
// class Subject {
//     constructor(){
//         this.state = 0;
//         this.observers = [];
//     }
//     getState() {
//         return this.state;
//     }
//     setState(state){
//         this.state = state;
//         this.notifyAllObservers();
//     }
//     notifyAllObservers(){
//         this.observers.forEach((observer) => {
//             observer.update();
//         })
//     }
//     attach(observer) {
//         this.observers.push(observer)
//     }
// }

//  class Observer{
//      constructor(name, subject) {
//          this.name = name;
//          this.subject = subject;
//          this.subject.attach(this);
//      }
//     update() {
//         console.log(`${this.name} updata, state:${this.subject.getState()}`);
//     }
//  }

//  let s = new Subject();
//  let ol = new Observer('ol', s);

//  s.setState(1)


// 示例二
// const EventEmitter = require('events').EventEmitter;

// class Dog extends EventEmitter {
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }

// let simon = new Dog('simon');
// simon.on('bark', function() {
//     console.log(this.name, ' barked');
// })

// simon.on('bark', function() {
//     console.log(this.name, ' barked');
// })

// simon.emit('bark');


// 示例三
// const fs = require('fs');
// const readStream = fs.createReadStream('./index.js');

// let length = 0;
// readStream.on('data', function(chunk){
//     let len = chunk.toString().length;

//     console.log('len', len);
//     length += len;
// })

// readStream.on('end', function() {
//     console.log('length', length);
// })

// 示例四
const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
    input: fs.createReadStream('./index.js')
})

let lineStr = '';
rl.on('line', function(line){
    lineStr = line.toString();
    console.log(lineStr)
})

rl.on('close', function(){
    // console.log('lineNum', lineNum);
})