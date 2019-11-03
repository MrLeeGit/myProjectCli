
/**
 * 
 * 代理模式
 * 应用场景: 
 * 网页的事件代理
 * Jquery $.proxy
 * ES6 Proxy
 * 
 *  */ 

//  示例一
// class ReadImg {
//     constructor(fileName) {
//         this.fileName = fileName;
//         this.loadFromDisk();
//     }
//     display(){
//         console.log('diplay...' + this.fileName);
//     }
//     loadFromDisk() {
//         console.log('load...' + this.fileName);
//     }
// }

// class ProxyImg {
//     constructor(fileName){
//         this.readImg = new ReadImg(fileName);
//     }
//     display(){
//         this.readImg.display();
//     }
// }

// let proxy = new ProxyImg('1.png');
// proxy.display();

// 示例二
// $('div').click(function(){
//     setTimeout($.proxy(function(){
//         $(this).addClass('red');
//     }, this), 1000)
// })
    
// 示例三
let star = {
    name: 'Lee',
    age: 30,
    phone: '13800138000'
}

let agent = new Proxy(star, {
    get: (target, key) => {
        if(key === 'phone') {
            // 经纪人自己的联系方式
            return '10086';
        }
        if(key === 'price') {
            // 明星不报价，经纪人报价
            return 12000;
        }
        return target[key];
    },
    set: (targe, key, val) => {
        console.log(targe)
        if(key === 'customPrice') {
            if(val < 100000) {
                // 最低10万
                throw new Error('价格太低');
            }else {
                targe[key] = val;

                return true;
            }
        }
    }
})

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);


agent.customPrice = 129000;
console.log('customPrice', agent.customPrice)

