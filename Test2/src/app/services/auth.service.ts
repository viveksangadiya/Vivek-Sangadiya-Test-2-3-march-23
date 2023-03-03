import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VirtualProject } from '../model/project';
import { VirtualProgram } from '../model/program';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getVirtualProject() {
    return this.http.get<{ virtualProgramDetails: VirtualProject[] }>("http://cmi-ofm.azurewebsites.net/api/Program/GetVirtualProjects").pipe(map((res) => res.virtualProgramDetails));
  }

  getAllActiveVirtualPrograms() {
    return this.http.get<{ virtualProgramList: VirtualProgram[] }>("http://cmi-ofm.azurewebsites.net/api/Program/GetAllActiveVirtualPrograms").pipe(map((res) => res.virtualProgramList));
  }
}
