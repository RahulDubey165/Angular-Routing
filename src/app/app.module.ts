import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    NotfoundComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
