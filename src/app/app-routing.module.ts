import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'image/:id/:page',component:DashboardComponent},
  {path:'view/:id/:page',component:ViewComponent},
  {path:'',redirectTo:'image/1/1',pathMatch:'full'},
  {path:'*',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
