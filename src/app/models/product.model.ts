export class Product {
    public id: string;
    public name: string;
    public quantity: number;
    public price: number;
    public image: string;

    constructor(id: string, name: string, quantity: number, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.image = image;
    }
}