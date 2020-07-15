import { Injectable } from '@angular/core';
import { Task } from './task';
import { Tasks } from './default-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  tasks = Tasks;

  addTask(task: string): void {
    this.tasks.push({ name: task, isCompleted: false, showDeleteBtn: false });
  }

  deleteTask(task: Task): Task[] {
    this.tasks = this.tasks.filter((x) => x.name !== task.name);
    return this.tasks;
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
