import { Injectable } from '@angular/core';
import { Fixture } from '../domain/data-definitions';
import { FIXTURES } from '../domain/fixtures';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor() { }

  /**
   * Gets all fixtures from the past
   */
  getPastFixtures(): Fixture[] {
    return FIXTURES.filter(fixture => fixture.date <= new Date());
  }

  /**
   * Gets all fixtures in the future
   */
  getUpcomingFixtures(): Fixture[] {
    return FIXTURES.filter(fixture => fixture.date > new Date());
  }
}
