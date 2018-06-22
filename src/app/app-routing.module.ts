import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {componentFactoryName} from '@angular/compiler';

const routes: Routes = [
  {
    path: '' ,
    component: HomeComponent
  },
{
  path: 'about',
  component: AboutComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
