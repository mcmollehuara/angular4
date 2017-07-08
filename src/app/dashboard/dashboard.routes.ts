import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [{
  path: 'crossover/pipeline',
  component: LayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]
}];


export const appRoutingProviders: any[] = [];

export const DashboardRoutes: ModuleWithProviders = RouterModule.forChild(routes);
