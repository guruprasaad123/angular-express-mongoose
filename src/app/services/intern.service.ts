import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Intern} from '../intern.model';

@Injectable()
export class InternService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Intern[]> {
    return this.http.get<Intern[]>('/api/interns');
  }

  count(): Observable<number> {
    return this.http.get<number>('/api/interns/count');
  }

  add(intern: Intern): Observable<Intern> {
    return this.http.post<Intern>('/api/intern', intern);
  }

  get(id:string): Observable<Intern> {
    return this.http.get<Intern>(`/api/intern/${id}`);
  }

  edit(intern: Intern): Observable<any> {
    const _id=intern._id;
    delete intern._id;
    return this.http.put(`/api/intern/${_id}`, intern, { responseType: 'text' });
  }

  delete(intern: Intern): Observable<any> {
    return this.http.delete(`/api/intern/${intern._id}`, { responseType: 'text' });
  }

}