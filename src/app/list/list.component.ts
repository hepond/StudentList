import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../student';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {NgForm} from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements AfterViewInit {
  DATA = [
    {id:"1" ,firstname: "Carrot" ,lastname: "abc" ,gender: "male"},
    {id:"2" ,firstname: "Broccoli" ,lastname: "abc" ,gender: "male"},
    {id:"3" ,firstname: "Corn" ,lastname: "abc" ,gender: "male"},
    {id:"4" ,firstname: "Eggplant" ,lastname: "abc" ,gender: "female"},
    {id:"5" ,firstname: "Mushrooms" ,lastname: "abc" ,gender: "male"},
    {id:"6" ,firstname: "Potato" ,lastname: "abc" ,gender: "male"},
    {id:"7" ,firstname: "Pumpkin",lastname: "abc" ,gender: "female"},
    {id:"8" ,firstname: "Garlic" ,lastname: "abc" ,gender: "male"},
    {id:"9" ,firstname: "Peas" ,lastname: "abc" ,gender: "female"},
    {id:"10" ,firstname: "Spinach" ,lastname: "abc" ,gender: "female"},
    {id:"11",firstname: "Lady Finger" ,lastname: "abc" ,gender: "male"},
    {id:"12" ,firstname: "Onion" ,lastname: "abc" ,gender: "male"}
  ];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'gender', "Edit", "Delete"];
  dataSource = new MatTableDataSource(this.DATA);
  xid:string | any
  xfname:string | any
  xlname:string | any
  xgender:string | any
  formAction:string | any

  constructor(public dialog: MatDialog) {}
  dialogAction (formAction:string) {
    this.formAction = formAction
    console.log('Action working')
  }
  editStudent(i:number){
    this.xid = this.DATA[i].id
    this.xfname = this.DATA[i].firstname
    this.xlname =  this.DATA[i].lastname
    this.xgender = this.DATA[i].gender

    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      data: {firstname: this.xfname, lastname: this.xlname, gender: this.xgender ,formAction: this.formAction}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      alert("Student "+ this.xfname+" "+this.xlname+" has been " +this.formAction+"ed" )
    });
  }



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


 addStudent() {
   this.DATA.push({
    id:this.xid,
    firstname:this.xfname,
    lastname:this.xlname,
    gender:this.xgender})
   alert('Student added');
   console.log('student added');
 };
 deleteStudent(id:number) {
  this.DATA.splice(id,1);
  this.dataSource = new MatTableDataSource(this.DATA);

  alert(id +"deleted");

 };


}
