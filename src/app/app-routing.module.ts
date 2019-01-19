import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { UsersComponent }   from './users/users.component'
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
   { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: HomeComponent },
  { path: 'users/add', component: UsersComponent },
  // { path: 'heroes', component: HeroesComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
