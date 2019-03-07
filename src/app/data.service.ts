import { Injectable } from "@angular/core";

@Injectable()

export class DataService {
    private goodPeople = [
        { name: 'Roger Federer', yearborn: '1981' },
        { name: 'Steve Jobs', yearborn: '1955' }
    ];

    getAllGoodPeople() {
        return this.goodPeople;
    }
}