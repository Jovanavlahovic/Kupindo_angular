export class Auction {
    _id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    dateStart: string;
    dateEnd: string;
    price: string;

    constructor(obj?:any){
        this._id = obj && obj._id || '';
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.image = obj && obj.image || '';
        this.category = obj && obj.category || '';
        this.dateStart = obj && obj.dateStart || '';
        this.dateEnd = obj && obj.dateEnd || '';
        this.price = obj && obj.price || '';
    }
}