import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdviceResolver } from './home.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      advises: AdviceResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
