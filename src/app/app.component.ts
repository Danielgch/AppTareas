import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Angular Crud";
  employees = [{name: 'Daniel', position: 'manager', email: 'danielgiraldoch@gmail.com'},
  {name: 'Juan', position: 'Designer' , email: 'camilogrialdo@gmail.com'},
  {name: 'Carlos', position: 'Development', email: 'dasdasdasd@gmail.com'}]
  model:any ={}; 

  addEmployee():void{
    this.employees.push(this.model);
  }
  deleteEmployee():void{

  }
  editEmployee():void{

  }
}
