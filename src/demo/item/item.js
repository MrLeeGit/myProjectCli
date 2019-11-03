import $ from 'jquery';
import StateMachine from 'javascript-state-machine';
import { log } from '../util/log'
import getCart from '../shopping/getcart'

class Item {
    constructor(list, data){
        this.list = list;
        this.data = data;
        this.$el = $('<div>');
        this.cart = getCart();
    }

    initContent(){
        const $el = this.$el;
        const data = this.data;

        $el.append($(`<p>名称：${data.name}</p>`))
        $el.append($(`<p>价格：${data.price}</p>`))
    }

    initBtn(){
        const $el = this.$el;
        const $btn = $('<button>');
        const _this = this;

        // 状态管理
        const fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart',
                    from: '加入购物车',
                    to: '从购物车删除'
                },
                {
                    name: 'deleteFormCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                onAddToCart: () => {
                    _this.addToCartHanle();
                    updateText();
                },
                onDeleteFormCart: () => {
                    _this.deleteFromCartHanle();
                    updateText();
                }
            }
        })

        function updateText(){
            $btn.text(fsm.state);
        }

        $btn.click(() => {
            if(fsm.is('加入购物车')){
                fsm.addToCart();
            } else {
                fsm.deleteFormCart();
            }
        })

        updateText();
        $el.append($btn);
    }

    // 加入购物车
    @log('add')
    addToCartHanle(){
        this.cart.add(this.data);
    }

    // 从购物车中删除
    @log('del')
    deleteFromCartHanle(){
        this.cart.del(this.data.id);
    }
    
    // 渲染
    render(){
        this.list.$el.append(this.$el);
    }

    init(){
        this.initContent();
        this.initBtn();
        this.render();
    }
}

export default Item;