export class Vehicle {
    constructor (
        public make: string,
        public model: string,
        public productionYear: string,
        public mileage: number,
        public imageUrl: string,
        public _id?: string,
    ) { }
}