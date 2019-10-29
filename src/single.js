/**
 * 
 * 单例模式(登录框)
 * 应用场景: 
 * 登录框、购物车、
 * jQuery $
 * react redux
 * vue vuex
 * 
 *  */ 
class Login{
    constructor (name){
        this.state = 'hide';
    }
    show() {
        if(this.state === 'show'){
            alert('已经显示');
            return ;
        }
        this.state = 'show';
        console.log('登录框显示')
    }
    hide() {
        if(this.state === 'hide'){
            alert('已经隐藏');
            return ;
        }
        this.state = 'hide';
        console.log('登录框隐藏')
    }
}

Login.getInstance = (() =>{
    let instance = null;
    
    return () => {
        if(instance === null) {
            instance = new Login();
        }
        return instance;
    }
})()

let login1 = Login.getInstance();
console.log(login1);
login1.show();

let login2 = Login.getInstance();
login2.hide();


console.log(login1 === login2);