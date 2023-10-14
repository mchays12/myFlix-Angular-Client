import { Component, OnInit, Input } from '@angular/core';

//Use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

//This import brings in the API calls created in Task 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

//Import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() loginData = { Username: '', Password: '', };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar) { }
  ngOnInit(): void {

  }

  //This function is responsible for sending the form inputs to the backend
  loggedinUser(): void {
    this.fetchApiData.userRegistration(this.loginData).subscribe((result) => {
      //Logic for a successful user login goes here
      this.dialogRef.close(); //This will close the modal on success.
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }

}