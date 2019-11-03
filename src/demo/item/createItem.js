import Item from './item';

const createDiscount = (item) => {
    return new Proxy(item, {
        get: (target, key, receiver) => {
            if(key === 'name'){
                return `${target[key]}【折扣】`
            }
            if(key === 'price'){
                return target[key] * 0.8;
            }

            return target[key];
        }
    })
} 

// 工厂魔爱胡思

export default function(list, itemData) {
    if(itemData.discount) {
        itemData = createDiscount(itemData);
    }

    return new Item(list, itemData);
};