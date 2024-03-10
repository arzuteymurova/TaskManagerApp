import { Injectable } from '@angular/core';
import { Task } from '../tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    new Task('task', new Date().toDateString())
  ];
  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    debugger
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
