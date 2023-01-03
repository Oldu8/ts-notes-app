"use strict";
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, adress) {
        super(date);
        this.adress = adress;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Cart {
    constructor() {
        this.products = [];
        this.delivery = new HomeDelivery(new Date(), "Odessa");
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error("There is no product in cart");
        }
        else if (!this.delivery) {
            throw new Error("There is no delivery");
        }
        else {
            return { success: true };
        }
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, "TS course", 200));
cart.addProduct(new Product(2, "computer", 1000));
cart.addProduct(new Product(3, "airpods", 400));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), "syuda davay"));
console.log(cart.getSum());
console.log(cart.checkout());
