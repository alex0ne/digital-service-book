export class EventLog {
    constructor (
        public eventDate: string,
        public eventType: string,
        public mileage: number,
        public price: number,
        public _id?: string
    ) { }
}