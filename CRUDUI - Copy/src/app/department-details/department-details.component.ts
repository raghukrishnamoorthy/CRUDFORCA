import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService }  from '../department.service';
import { Department } from '../department';
import { Intern } from '../intern';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  private department: Department
  private interns: Intern[]
  constructor( private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private location: Location) { }

  ngOnInit() {
    this.getDepartmentDetails()
    
  }

  getDepartmentDetails() {
    console.log("Getting department details")
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.departmentService.getDepartmentById(id).subscribe(department => {
      this.department = department
      console.log(this.department)
    }) 
    this.getInterns()
  }

  getInterns() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentService.getInterns(+id).subscribe(interns => {
      this.interns = interns
      console.log(this.interns)
    })  
  }

  deleteIntern(id): void {
    const deptId = +this.route.snapshot.paramMap.get('id');
    this.interns = this.interns.filter(intern => intern.id !== id);
    this.departmentService.deleteIntern(id,deptId).subscribe()
  }

  AddIntern(name: string, age:number): void {
    name = name.trim();
    let departmentId = +this.route.snapshot.paramMap.get('id');
    if (!name) { return; }
    this.departmentService.addIntern({ name, age, departmentId  } as Intern)
      .subscribe(intern => {
        this.interns.push(intern);
      });
  }

  SaveChanges(): void {
    console.log("Calling save changes");
    this.departmentService.updateDepartment(this.department)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}
