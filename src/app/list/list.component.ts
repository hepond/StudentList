import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DATA } from '../mockdata';
import { Student } from '../student';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'gender', "Edit", "Delete"];
  dataSource = new MatTableDataSource(DATA);
  xid:string = "";
  xfname:string = "";
  xlname:string = "";
  xgender:string = "";

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


 addStudent() {
   DATA.push({
    id:this.xid,
    firstname:this.xfname,
    lastname:this.xlname,
    gender:this.xgender})
   alert('Student added');
   console.log('student added');
 };
 deleteStudent(id:number) {

 };


}
