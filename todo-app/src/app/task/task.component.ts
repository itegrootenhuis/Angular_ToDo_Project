import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks = this.taskService.getTasks();

  ngOnInit(): void {}

  onEditName(task: Task): void {
    //NEED TO FINISH
    console.log(task);
  }

  onToggleTask(task: Task): void {
    task.isCompleted === true
      ? (task.isCompleted = false)
      : (task.isCompleted = true);
  }
}
