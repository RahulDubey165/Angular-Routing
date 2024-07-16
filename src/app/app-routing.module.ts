import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'login',title:'Login', component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'contact', title:'Contact', component:ContactComponent},
  {path:'register', title:'Register', component:RegisterComponent},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {path:'**', title:'404', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
