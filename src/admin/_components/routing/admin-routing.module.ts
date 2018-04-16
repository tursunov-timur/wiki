import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../../_components/admin-panel/admin-panel.component';
import { AdminLayoutComponent } from '../../_components/admin-layout/admin-layout.component';
import { AddThemeComponent } from '../../_components/add-theme/add-theme.component';
import { AuthGuard }  from '../../../app/_services/auth-guard/auth-guard.service';
import { LoginComponent } from '../../_components/login/login.component';



const ADMIN_PANEL_ROUTES: Routes = [ 
    //{ path: '',  component: AdminPanelComponent },
    { path: 'admin', component: AdminPanelComponent, children: [ //, canActivate: [AuthGuard], children: [
   //   { path: 'login', component: LoginComponent},
      { path: 'theme/add-new-theme', component: AddThemeComponent }
    ]}
];



@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forChild(ADMIN_PANEL_ROUTES)
  ]
})

export class AppRouterAdmin { 
 
}
