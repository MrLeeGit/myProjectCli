/**
 * 
 * 工厂模式
 * 应用场景: 
 * jQuery $("div")
 * react React.createElement -----> new Vnode
 * vue Vue.component
 * 
 *  */ 
class Factory{
    constructor (name){
        this.name = name;
    }
    getName() {
        alert(this.name);
    }
    fun1 (){
        alert('fn1');
    }
}

class Creator {
    creat (name){
        return new Factory(name)
    }
}

let ceator = new Creator()
let person = ceator.creat('Lee')
person.getName();
person.fun1();


