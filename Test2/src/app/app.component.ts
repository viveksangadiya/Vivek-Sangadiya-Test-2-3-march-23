import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatSelectChange } from '@angular/material/select';
import { VirtualProject } from './model/project';
import { VirtualProgram } from './model/program';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test2';
  
  programList: VirtualProgram[] = [];
  projectList: VirtualProject[] = [];

  selectPrograms:string[]=[]
  selectProject:VirtualProject[]=[]

  resultData:VirtualProject[]=[]
  constructor(private authService:AuthService){}

  onSelectionChange(event: MatSelectChange) {
    this.selectPrograms = event.value;
    console.log("selected program",this.selectPrograms);
     
    this.projectList.forEach( (data) =>{
      
        this.selectPrograms.forEach((res) =>{
           
          if(data.programID == res && this.resultData.findIndex(result => result.projectName == data.projectName) ==-1 ){    
            this.resultData.push(data); 
          }
        })
    })

  }
 
  getData() {
    this.authService.getVirtualProject().subscribe(
      (res)=>{
       this.projectList=res
        console.log("project list")
        console.log(res)
      },
      err=>console.log(err)
    )

    this.authService.getAllActiveVirtualPrograms().subscribe(
      (res)=>
      {
        console.log("program list")
        this.programList=res
        console.log(res)
      },
      err=>console.log(err)
    )
  }

   
}

