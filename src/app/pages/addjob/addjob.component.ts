import { JobsComponent } from './../jobs/jobs.component';
import { Router, RouterModule } from '@angular/router';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormsModule, FormControl, FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addjob',
  standalone: true,
  imports: [
    CardComponent,
    MatFormFieldModule,
    MatLabel,
    MatButton,
    MatInputModule,
    MatInput,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    JobsComponent,
    HttpClientModule,
    MatStepperModule,
    MatButtonModule,

  ],
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.css',
  providers:[JobService],
})
export class AddjobComponent implements OnInit {

  private _http: any;

  ngOnInit(): void {

  }
  firstFormGroup = this._formbuilder.group({
      jobtitle: new FormControl(null,[Validators.required]),
      institute: new FormControl(null,[Validators.required]),


  });
  secondFormGroup = this._formbuilder.group({
    location: new FormControl(null,[]),
    description: new FormControl(null,[]),
      attachment: new FormControl(null,[])
  });
  isLinear = false;


  jobForm!: FormGroup;
  constructor(private JobService: JobService,private router: Router,private _formbuilder: FormBuilder, private _snackBar: MatSnackBar){ }
  test(){
    console.log("tetstst");
  }
  // onSave() {
  //   // Combine values from both form groups
  //  const combinedValues = {
  //    ...this.firstFormGroup.value,
  //    ...this.secondFormGroup.value,
  //    // Add any additional properties from the secondFormGroup (if needed)
  //  };

  //  this.JobService.add(combinedValues).subscribe(
  //    (response: any) => {
  //      console.log("add job response =>", response);
  //      this.router.navigateByUrl('/jobs');
  //    },
  //    (error: HttpErrorResponse) => {
  //      console.log(error);
  //    }
  //  );
  //  }
  onSave() {
    // Combine values from both form groups
    const combinedValues = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      // Add any additional properties from the secondFormGroup (if needed)
    };

    this.JobService.add(combinedValues).subscribe(
      (response: any) => {
        console.log("add job response =>", response);

        // Show success alert centered on the screen
        Swal.fire({
          position: 'center', // Center the alert
          icon: 'success',
          title: 'Job has been saved successfully',
          showConfirmButton: false,
          timer: 2500 // Increased alert time by 1 second
        });

        // Navigate to jobs page after the alert
        setTimeout(() => {
          this.router.navigateByUrl('/jobs');
        }, 2500); // Adjusted timeout to match the alert duration
      },
      (error: HttpErrorResponse) => {
        console.log(error);

        // Show error alert centered on the screen
        Swal.fire({
          position: 'center', // Center the alert
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error.message
        });
      }
    );
  }


    }
