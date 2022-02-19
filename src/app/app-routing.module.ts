import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { CategoriaPageComponent } from './pages/Despesa/categoria-page/categoria-page.component';
import { DespesaPageComponent } from './pages/Despesa/despesa-page/despesa-page.component';
import { FramePageComponent } from './pages/master/frame.page';

const routes: Routes = [
  { path:'', component: FramePageComponent },
  {
    path: 'despesa',
    component: FramePageComponent,
    children: [
        { path:'consulta', component: DespesaPageComponent },      
    ]
  },
  {
    path: 'categoria',
    component: FramePageComponent,
    children: [
        { path:'consulta', component: CategoriaPageComponent },      
    ]
  },
  { path:'login', component: LoginPageComponent },
  { path:'signup', component: SignupPageComponent },
  { path:'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
