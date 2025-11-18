import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TaskService } from './task-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,PercentPipe,DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
today = new Date();

price = 1234.56;
percentage = 0.259;



  protected readonly title = signal('todolist');
tasks: any[] = [];
constructor(private taskService: TaskService) {}

ngOnInit() {
  this.tasks = this.taskService.getTasks();
}
addNewTask(){

  
  this.tasks.push({id:4,title: 'new task', done: false})
}
deltTask(ind:number){


this.tasks.splice(ind,1)
}
}

