export class Category{
    _id: number;
    name: string;
    subcategories: string[];

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.subcategories = obj && obj.subcategories || [];
    }
}