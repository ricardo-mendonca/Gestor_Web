import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { DespesaPageComponent } from './pages/Despesa/despesa-page/despesa-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    DespesaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
