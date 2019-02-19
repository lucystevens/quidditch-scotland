import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/domain/data-definitions';
import { FixtureService } from 'src/app/services/fixture.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  height = 75;

  pastFixtures: Fixture[];
  upcomingFixtures: Fixture[];

  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.pastFixtures = this.fixtureService.getPastFixtures();
    this.upcomingFixtures = this.fixtureService.getUpcomingFixtures();
  }

  getTeamImage(fixture: Fixture) : string {
    return "assets/images/" + fixture.opposition.replace(" ", "-").toLocaleLowerCase() + ".png";
  }

}
