import { CommonModule } from "@angular/common";
import { HomeComponent } from "./homepage/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";
import { ChildOneComponent } from "./child-one/child-one.component";
import { ChildTwoComponent } from "./child-two/child-two.component";

@NgModule({
    declarations: [
      HomeComponent,
      ChildOneComponent,
      ChildTwoComponent
      
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
    ],
    providers:[]
  })
  export class HomeModule {
  }