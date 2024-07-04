import { JobService } from './../../services/job.service';
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
import { Job } from '../../models/job.model';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-jobs',
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
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  providers:[JobService],
})
export class JobsComponent implements OnInit,AfterViewInit{

  loading:boolean = false;
  jobList: Job[] = [];

  onAddJob(){
    this.router.navigate(['/addjob']);
     }
     
  title="JOBS";
  subtitle="LIST OF JOBS";

  // datatable config
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Job>;
  dataSource!: MatTableDataSource<Job>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['jobid','jobtitle','institute','description','location','attachment'];
constructor(private router: Router,private JobService: JobService){ }

  ngOnInit(): void {

    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    this.fetchAllJobs();
    this.dataSource = new MatTableDataSource();

  }
  view_jobs(data:any) {
    console.log("the attachment is viewed");
  }
  fetchAllJobs(){
    this.loading=true;
    this.JobService.getAll().subscribe((response: Job[]) => { // Cast response as Job[]
      this.jobList = response;
      this.dataSource.data = response;
      console.log("Fetched jobs:", this.jobList);
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

