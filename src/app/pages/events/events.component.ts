import { EventService } from './../../services/event.service';
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
import { Event } from '../../models/event.model';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-events',
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
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  providers:[EventService],
})
export class EventsComponent implements OnInit, AfterViewInit{

  loading:boolean = false;
eventlist: Event[] = [];

onAddEvent(){
  this.router.navigate(['/addevent']);
   }


title="EVENTS";
subtitle="LIST OF EVENTS";

 // datatable config
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 @ViewChild(MatTable) table!: MatTable<Event>;
 dataSource!: MatTableDataSource<Event>;

 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['id','festTitle','description','date','attachment'];
constructor(private router: Router,private EventService : EventService){ }

ngOnInit(): void {

  // this.dataSource.sort = this.sort;
  // this.dataSource.paginator = this.paginator;
  this.fetchAllEvents();
  this.dataSource = new MatTableDataSource();

}
view_fests(data:any) {
  console.log("the attachment is viewed");
}
fetchAllEvents(){
  this.loading=true;
  this.EventService.getAll().subscribe((response: Event[]) => { // Cast response as Job[]
    this.eventlist = response;
    this.dataSource.data = response;
    console.log("Fetched events:", this.eventlist);
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
