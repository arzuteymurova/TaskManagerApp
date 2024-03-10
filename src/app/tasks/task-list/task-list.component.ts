import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../../shared/task.service';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {

  formBuilder: any;

  constructor(private taskService: TaskService) {
  }

  tasks: Task[];
  task:Task;

  ngOnInit(): void {

     this.tasks=this.taskService.getTasks();
  }


  onDelete(index: number) {
    this.taskService.deleteTask(index);
  }

  onCheck(index: number) {
    this.task=this.tasks[index];
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    if (index !== -1) {
      this.tasks.splice(index, 1); // Remove the task from its current position
      this.tasks.push(this.task); // Push it to the end
    }
  }



}
