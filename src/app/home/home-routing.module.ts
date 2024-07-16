import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./homepage/home.component";
import { ChildOneComponent } from "./child-one/child-one.component";
import { ChildTwoComponent } from "./child-two/child-two.component";

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'homeChild1',
          component: ChildOneComponent
        },
        {
          path: 'homeChild2',
          component:ChildTwoComponent
        },
        
            ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule {
  }