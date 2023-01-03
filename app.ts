class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public adress: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions = new HomeDelivery(new Date(), "Odessa");

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (this.products.length === 0) {
      throw new Error("There is no product in cart");
    } else if (!this.delivery) {
      throw new Error("There is no delivery");
    } else {
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
