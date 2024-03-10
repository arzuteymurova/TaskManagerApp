import { Component } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { FormControl, FormGroup, NgForm} from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',

})
export class AddTaskComponent {
  
  constructor(private taskService:TaskService){
    
  }

  taskForm = new FormGroup({
    name: new FormControl(''),
    dueDate: new FormControl(''),
  });

  task:Task;
  


  onSubmit(form: NgForm) {
    console.log(form);

    this.taskService.addTask({
      name: form.controls['name'].value,
      dueDate:form.controls['dueDate'].value,
      isCompleted: false
    })

    form.reset();
  }


}
