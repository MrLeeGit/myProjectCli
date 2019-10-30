/**
 * 
 * 适配器模式(转换插头))
 * 应用场景: 
 * jQuery $.ajax() 替换为ajax()
 * react redux
 * vue computed
 * 
 *  */ 
class Adptee {
    specificRequest() {
        return '德国标准插头';
    }
}

class Target {
    constructor () {
        this.adptee = new Adptee();
    }
    request() {
        let info = this.adptee.specificRequest();

        return `${info} - 转换器 - 中国标准插头`
    }
}

let target = new Target();
let res = target.request();

console.log(res);

// jquery 例子
// var $ = {
//     adptee: (options) => {
//         return ajax(options)
//     }
// }


// vue例子
{/* <div>
    <p>顺序：{{message}}</p>
    <p>逆序：{{reversedMessage}}</p>
</div>

let vm = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    },
    computed: {
        reversedMessage: () => {
            return this.message.split('').reverse().join('')
        }
    }
}) */}