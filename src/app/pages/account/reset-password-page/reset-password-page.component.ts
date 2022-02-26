import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  public busy = false;
  public form!: FormGroup;

  constructor(
    
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      ds_email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])],
      ds_senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ])]
    })
  }

  ngOnInit(): void {
  }

  

}
