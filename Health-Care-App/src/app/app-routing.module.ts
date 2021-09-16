import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { JeansComponent } from './jeans/jeans.component';
import { KidsComponent } from './kids/kids.component';
import { NikiComponent } from './niki/niki.component';
import { PantsComponent } from './pants/pants.component';
import { PoloComponent } from './polo/polo.component';
import { ShirtsComponent } from './shirts/shirts.component';

const routes: Routes = [

{
  path:"shirts", component:ShirtsComponent,children:[{path:"niki",component:NikiComponent}], canActivate:[AuthService]
},
{
  path:"pants",component:PantsComponent, children:[{path:"polo", component:PoloComponent}],canDeactivate:[AuthService]
},
{
  path:"kids",component:KidsComponent, children:[{path:"jeans", component:JeansComponent}],canActivateChild:[AuthService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
