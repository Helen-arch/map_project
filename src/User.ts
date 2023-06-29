import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: faker.address.latitude({ max: 52.3, min: 52.1 }),
            lng: faker.address.longitude({ max: 21.05, min: 20.95 }),
        };
    }

    markerContent(): string {
        return `User name is ${this.name}`;
    }
}