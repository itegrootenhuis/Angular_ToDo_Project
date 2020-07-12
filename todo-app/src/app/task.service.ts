import { Injectable } from '@angular/core';
import { Task } from './task';
import { Tasks } from './default-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks = Tasks;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push({ name: task, isCompleted: false });
  }
}
