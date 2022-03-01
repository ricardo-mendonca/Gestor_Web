import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  public busy = false;
  public form!: FormGroup;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      ds_email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.busy = true;
    this
      .service
      .resetPassword(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Senha Restaurada!');
          this.router.navigate(['/login']);

        },
        (err) => {
          this.toastr.error(err.error.message, 'OPS!!!');
          this.busy = false;
        }
      )
  }

}
