import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  readonly dbContextUrl = 'http://localhost:3000/locations';

  constructor() { }

  //get all the houses
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.dbContextUrl);
    return await data.json() ?? [];
  }
  
  //get house by id
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.dbContextUrl}/${id}`);
    return await data.json() ?? {};
  }

  //home application reservation
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
