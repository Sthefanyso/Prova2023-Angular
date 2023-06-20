import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url = "http://localhost:3000/empresa"

  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);
  }

  save(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }  

}
