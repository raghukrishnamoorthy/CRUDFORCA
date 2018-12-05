import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Intern } from './intern';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = "http://localhost:65106/api/departments"
  private internUrl = "http://localhost:65106/api/interns"

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl)
  }

  deleteDepartment(id): Observable<Department[]> {
    const url = `${this.apiUrl}/${+id}`;
    this.http.delete(url).subscribe();
    return this.getDepartments()
  }

  getDepartmentById(id): Observable<Department> {
    const url = `${this.apiUrl}/${+id}`;
    return this.http.get<Department>(url)
  }

  

  addDepartment (department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department).pipe(
      tap((department: Department) => console.log(`added department w/ id=${department.id}`))
    );
  }
  
  getInterns(id): Observable<Intern[]> {
    const url = `${this.internUrl}/${+id}`;
    console.log(url);
    console.log("Department id for interns is" + id)
    return this.http.get<Intern[]>(url)
  }

  deleteIntern(id, deptId): Observable<Intern[]> {
    const url = `${this.internUrl}/${+id}`;
    this.http.delete(url).subscribe();
    return this.getInterns(deptId)
  }
  
  addIntern (intern: Intern): Observable<Intern> {
    return this.http.post<Intern>(this.internUrl, intern).pipe(
      tap((intern: Intern) => console.log(`added Intern w/ id=${intern.id}`))
    );
  }

  updateDepartment (department: Department): Observable<any> {
    const url = `${this.apiUrl}/${+department.id}`;
    console.log(url);
    return this.http.put(url, department).pipe(
      tap(_ => console.log(`updated department id=${department.id}`))
    );
  }
}
