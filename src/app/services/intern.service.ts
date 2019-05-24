import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Intern} from '../intern.model';

@Injectable()
export class InternService {

  constructor(private http: HttpClient) { }


  getInterns(): Observable<Intern[]> {
    return this.http.get<Intern[]>('/api/Interns');
  }

  countInterns(): Observable<number> {
    return this.http.get<number>('/api/Interns/count');
  }

  addIntern(intern: Intern): Observable<Intern> {
    return this.http.post<Intern>('/api/Intern', intern);
  }

  getIntern(intern: Intern): Observable<Intern> {
    return this.http.get<Intern>(`/api/Intern/${intern._id}`);
  }

  editIntern(intern: Intern): Observable<any> {
    return this.http.put(`/api/Intern/${intern._id}`, intern, { responseType: 'text' });
  }

  deleteIntern(intern: Intern): Observable<any> {
    return this.http.delete(`/api/Intern/${intern._id}`, { responseType: 'text' });
  }

}