export class RsvpModel {
    public name: string;
    public count: number;
    public accept: boolean;
    public notes: string;
    public created: Date;

    constructor(name: string, count: number, accept: boolean, notes: string, created: Date) {
        this.created = created;
        this.notes = notes;
        this.accept = accept;
        this.name = name;
        this.count = count;
    }
}