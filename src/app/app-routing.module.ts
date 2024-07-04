import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModelDrivenApprochComponent } from './model-driven-approch/model-driven-approch.component';
import { TemplateDrivenApprochComponent } from './template-driven-approch/template-driven-approch.component';
/*
const routes: Routes = [
  {path: 'product/:id', component: ProductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path: 'products', component: ProductsComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', redirectTo: 'home'} // you can also display an error component
];
*/
const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'model-driven-approch', component: ModelDrivenApprochComponent},
  {path: 'template-driven-approch', component: TemplateDrivenApprochComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
