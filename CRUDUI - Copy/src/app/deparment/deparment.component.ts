import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-deparment',
  templateUrl: './deparment.component.html',
  styleUrls: ['./deparment.component.css']
})
export class DeparmentComponent implements OnInit {

  departments: Department[]
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments()
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments
      console.log(departments)
    })  
    console.log("Departments:" + this.departments)
  }
  

  deleteDepartment(id): void {
    this.departments = this.departments.filter(dept => dept.id !== id);
    this.departmentService.deleteDepartment(id).subscribe()
  }

  AddDept(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentService.addDepartment({ name } as Department)
      .subscribe(department => {
        this.departments.push(department);
      });
  }
  
}
