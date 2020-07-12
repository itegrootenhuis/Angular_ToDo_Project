import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onAddTask(task: string): void {
    this.taskService.addTask(task);
  }
}
