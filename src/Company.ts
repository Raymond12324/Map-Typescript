import { faker } from '@faker-js/faker';
import { Location } from './Location';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: Location;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `Company name is: ${this.companyName}
            CatchPrase: ${this.catchPhrase}
    `;
  }
}
