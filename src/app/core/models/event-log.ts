export class EventLog {
    constructor (
        public eventDate: string,
        public eventType: string,
        public millage: number,
        public _id?: string
    ) { }
}