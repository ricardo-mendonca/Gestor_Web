import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';

import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { DespesaPageComponent } from './pages/Despesa/despesa-page/despesa-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CategoriaPageComponent } from './pages/Despesa/categoria-page/categoria-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './Components/shared/loading/loading.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    DespesaPageComponent,
    FramePageComponent,
    CategoriaPageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
