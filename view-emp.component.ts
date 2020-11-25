import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  emp:Employee={
    id:3,
    name:"John",
    salary:1000,
    permanent:"yes",
    department:{dept_id:1,dept_name:"Payroll"},
    skill:[
      {skill_id:100,skill_name:"HTML"},
      {skill_id:101,skill_name:"CSS"},
      {skill_id:102,skill_name:"JavaScript"}
    ],
    dob:new Date('12/31/2020')
  };

}
