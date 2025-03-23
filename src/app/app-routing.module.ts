import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: { title: 'Home Page' } },
  {
    path: 'feature',
    loadChildren: async () => {
      const m = await import('featureModule/FeatureModule');
      console.log('Loaded Module:', m);
      return m.FeatureModule;
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
