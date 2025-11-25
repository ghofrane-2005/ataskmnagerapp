import { Component } from '@angular/core';
import { Task } from '../task/task';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-home',
  imports: [Task,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  taskForm: any;

  constructor(private Taskservice: TaskService,private fb: FormBuilder) {
    this.taskForm = this.fb.group({
        title: [''],
        description: ['']
      });
  }


 onSubmit() {
      console.log(this.taskForm.value);
       this.Taskservice.addTask(this.taskForm.value.title)  
     
    }

}
