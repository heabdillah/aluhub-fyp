import { AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClientModule, HttpRequest, HttpHandler } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {Alumni} from '../../models/alumni.model'
import { AlumniService } from '../../services/alumni.service';


@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    CardComponent,
    MatButton,
    HttpClientModule,
    HttpClientJsonpModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css',
  providers: [AlumniService],
})
export class MyprofileComponent {

  loading:boolean = false;
  alumnilist: Alumni[] = [];

  title="MY PROFILE";
subtitle="YOUR PROFILE DETAILS";

// datatable config
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
@ViewChild(MatTable) table!: MatTable<Alumni>;
dataSource!: MatTableDataSource<Alumni>;

/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
displayedColumns = ['id','firstname','lastname','currentposition','currentinstitution','regno','email','phoneno'];

constructor(private router: Router,private AlumniService : AlumniService){ }

ngOnInit(): void {

  // this.dataSource.sort = this.sort;
  // this.dataSource.paginator = this.paginator;
  this.fetchAllAlumni();
  this.dataSource = new MatTableDataSource();

 }

 fetchAllAlumni(){
  this.loading=true;
  this.AlumniService.getAll().subscribe((response: Alumni[]) => { // Cast response as Alumni[]
    this.alumnilist = response;
    this.dataSource.data = response;
    console.log("Fetched alumni:", this.alumnilist);
    this.loading = false;
  },(error)=>{
    this.loading = false;
  })
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
