import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit{

  masterSrc = inject(MasterService)
  deptList: any[] = []
  ngOnInit(): void {
    this.getDept();
  }

  getDept() {
    this.masterSrc.getAllDepartment().subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }

}
