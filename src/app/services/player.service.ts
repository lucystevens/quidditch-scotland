import { Injectable } from '@angular/core';
import { Player } from '../domain/data-definitions';
import { PLAYERS } from '../domain/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
    return PLAYERS;
  }
}
