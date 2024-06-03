import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form!: FormGroup;
  emailid: any;
  formdata: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      emailid: ['', Validators.required,],
      passwd: ['', Validators.required],
    });
  }
  onClickSubmit(data: { emailid: any }) {
    this.emailid = data.emailid;
  }

  // ngOnInit() {
  //   this.formdata = new FormGroup({
  //     emailid: new FormControl(
  //       '',
  //       Validators.compose([
  //         Validators.required,
  //         Validators.pattern('[^ @]*@[^ @]*'),
  //       ])
  //     ),
  //     passwd: new FormControl(''),
  //   });
  // }
  // onClickSubmit(data: { emailid: any }) {
  //   this.emailid = data.emailid;
  // }
}
