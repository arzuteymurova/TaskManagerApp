import { Component } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',

})
export class AddTaskComponent {
  
  constructor(private taskService:TaskService,private formBuilder:FormBuilder){
    
  }

  taskForm=this.formBuilder.group({
    name:[""],
    dueDate:[""]
  })

    
  onSubmit(){
    this.taskService.addTask({
      name:this.taskForm.value.name,
      dueDate:this.taskForm.value.dueDate,
      isCompleted:false
    });

    this.taskForm.reset();
  }


  // taskForm = new FormGroup({
  //   name: new FormControl(''),
  //   dueDate: new FormControl(''),
  // });

  // onSubmit(form: NgForm) {
  //   console.log(form);

  //   this.taskService.addTask({
  //     name: form.controls['name'].value,
  //     dueDate:form.controls['dueDate'].value,
  //     isCompleted: false
  //   })

  //   form.reset();
  // }


}
