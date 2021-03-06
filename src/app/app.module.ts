import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { DespesaPageComponent } from './pages/Despesa/despesa-page/despesa-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CategoriaPageComponent } from './pages/Categoria/categoria-page/categoria-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './Components/shared/loading/loading.component';
import { NgxMaskModule } from 'ngx-mask';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { UserPageComponent } from './pages/account/user-page/user-page.component';
import { NovaDespesaPageComponent } from './pages/Despesa/nova-despesa-page/nova-despesa-page.component';
import { AlterarDespesaComponent } from './pages/Despesa/alterar-despesa/alterar-despesa.component';

registerLocaleData(localePt);

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
    LoadingComponent,
    UserPageComponent,
    NovaDespesaPageComponent, 
    AlterarDespesaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    FormsModule,
    
    
  ],
  providers: [
    DataService, 
    AuthService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
