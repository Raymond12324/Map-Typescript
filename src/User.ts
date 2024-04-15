import { faker } from '@faker-js/faker';
import { Location } from './Location';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `The user name is: ${this.name}`;
  }
}
