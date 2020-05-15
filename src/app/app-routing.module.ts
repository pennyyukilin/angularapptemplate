import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HelpComponent } from './shared/help/help.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'sample', loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'help', component: HelpComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
