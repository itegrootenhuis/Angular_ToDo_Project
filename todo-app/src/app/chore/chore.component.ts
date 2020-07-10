import { Component, OnInit } from '@angular/core';
import { Chore } from '../Chore';
import { Chores } from '../default-chores';

@Component({
  selector: 'app-chore',
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.scss'],
})
export class ChoreComponent implements OnInit {
  chores = Chores;

  constructor() {}

  ngOnInit(): void {}

  onEditName(chore: Chore): void {
    //NEED TO FINISH
    console.log(chore);
  }

  onToggleChore(chore: Chore): void {
    chore.isCompleted === true
      ? (chore.isCompleted = false)
      : (chore.isCompleted = true);
  }
}
