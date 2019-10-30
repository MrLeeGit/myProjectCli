import { log } from "util";

/**
 * 
 * 装饰器模式
 * 应用场景: 
 * ES7装饰类 @function && mixin
 * 
 *  */ 

//  示例一
// class Circle {
//     draw() {
//         console.log('画一个圆形');
//     }
// }

// class Decorator {
//     constructor (circle) {
//         this.circle = circle;
//     }
//     draw() {
//         this.circle.draw();
//         this.setRedBorder(circle);
//     }
//     setRedBorder() {
//         console.log('设置一个红色边框')
//     }
// }

// let circle = new Circle();
// let draw = circle.draw();

// let dec = new Decorator(circle);
// let decdraw = dec.draw();

// 示例二
// @testDec
// class Demo {

// }

// function testDec(target) {
//     target.isDec = true;
// }

// alert(Demo.isDec);

// 示例三
// function mixins(...list){
//     return function(target){
//         Object.assign(target.prototype, ...list)
//     }
// }

// const Foo = {
//     foo() {
//         alert('foo');
//     }
// }

// @mixins(Foo)
// class MyClass {

// }
// let obj = new MyClass();

// obj.foo();


// 示例四

// function readonly (target, name, descriptor){
//     descriptor.writable = false;

//     return descriptor;
// }

// class Person {
//     constructor(){
//         this.first = "A";
//         this.last = "B";
//     }
//     @readonly
//     name(){
//         return `${this.first} ${this.last}`;
//     }
// }

// let p = new Person();
// console.log(p.name());
// p.name = function(){
//     alert(100)
// }

// 示例五
// function clog(target, name, descriptor) {
//     let oldValue = descriptor.value;
//     descriptor.value = function (){
//         console.log(`calling ${name} width`, arguments);
        
//         return oldValue.apply(this, arguments);
//     }
//     return descriptor;
// }

// class Math {
//     @clog
//     add(a, b){
//         return a + b;
//     }
// }

// let math = new Math();
// const result = math.add(2, 4);
// console.log('result', result);

// 示例六
import {readonly} from 'core-decorators';

// class Person {
//     @readonly
//     name(){
//         return 'Lee';
//     }
// }

// let p = new Person();
// alert(p.name())

// p.name = function(){
//     return "Dan";
// }

// 示例七
import {deprecate} from 'core-decorators';
class Person {
    @deprecate('即将废弃',{url: 'http://www.baidu.com'})
    name(){
        return 'Lee';
    }
}

let p = new Person();
p.name();

    

