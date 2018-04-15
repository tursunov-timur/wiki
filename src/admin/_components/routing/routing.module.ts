import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../../_components/admin-panel/admin-panel.component';
import { AdminLayoutComponent } from '../../_components/admin-layout/admin-layout.component';
import { AddThemeComponent } from '../../_components/add-theme/add-theme.component';


const ADMIN_PANEL_ROUTES: Routes = [
  { path: '', component: AdminPanelComponent },
];

const routes: Routes = [   
  { path: 'admin', component: AdminPanelComponent, data: { title: 'Admin Panel' }, children: [
      { path: '',  component: AdminPanelComponent },
      { path: 'theme/add-new-theme', component: AddThemeComponent, outlet: 'add-new-theme' }
  ]}  
];



@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRouterAdmin { 
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['404']); // or redirect to default route
    }
  }
}
