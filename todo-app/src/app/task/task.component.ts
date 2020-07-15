import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  faTimes = faTimes;

  tasks = this.taskService.getTasks();

  ngOnInit(): void {}

  onEditName(task: Task): void {
    //NEED TO FINISH
    console.log(task);
  }

  deleteTask(task: Task): void {
    this.tasks = this.taskService.deleteTask(task);
  }

  onToggleTask(task: Task): void {
    task.isCompleted === true
      ? (task.isCompleted = false)
      : (task.isCompleted = true);
  }

  toggleDeleteTask(task: Task): void {
    task.showDeleteBtn === false
      ? (task.showDeleteBtn = true)
      : (task.showDeleteBtn = false);
  }
}
