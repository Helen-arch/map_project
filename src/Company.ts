import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.address.latitude({ max: 52.3, min: 52.1 }),
            lng: faker.address.longitude({ max: 21.05, min: 20.95 }),
        };
    }

    markerContent(): string {
        return (
            `<div>
                <h1>Company name is ${this.companyName}</h1>
                <h3>Catchphrase: ${this.catchPhrase}</h3>
             </div>`
        );
    }
}