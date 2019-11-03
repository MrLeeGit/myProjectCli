import $ from 'jquery';
import ShoppingCart from './shopping/shoppingCart.js'
import List from './list/list.js'

class App {
    constructor(id) {
        this.$el = $(`#${id}`)
    }

    // 初始化购物车
    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }

    // 初始化商品列表
    initList() {
        let list = new List(this)
        list.init()
    }

    init() {
        this.initShoppingCart()
        this.initList()
    }
}

export default App;