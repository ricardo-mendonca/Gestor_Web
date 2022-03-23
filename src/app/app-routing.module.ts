import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { UserPageComponent } from './pages/account/user-page/user-page.component';
import { CategoriaPageComponent } from './pages/Categoria/categoria-page/categoria-page.component';
import { AlterarDespesaComponent } from './pages/Despesa/alterar-despesa/alterar-despesa.component';
import { DespesaPageComponent } from './pages/Despesa/despesa-page/despesa-page.component';
import { NovaDespesaPageComponent } from './pages/Despesa/nova-despesa-page/nova-despesa-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path:'', component: FramePageComponent ,
    canActivate: [AuthService]},
  {
    path: 'despesa',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
        { path:'consulta', component: DespesaPageComponent }, 
        { path:'novadespesa', component: NovaDespesaPageComponent },
        { path:'alterardespesa/:id', component: AlterarDespesaComponent },
    ]
  },
  {
    path: 'categoria',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
        { path:'consulta', component: CategoriaPageComponent },      
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
        { path:'', component: UserPageComponent },      
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
