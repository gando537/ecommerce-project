export class Product {

    constructor(public id: number,
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public active: boolean,
                public imageUrl: string,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdate: Date
        ) {
    }
}
