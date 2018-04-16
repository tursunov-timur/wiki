import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../_components/menu/menu.component';
import { ThemePreviewComponent } from '../_components/theme-preview/theme-preview.component';
import { CategoryPreviewComponent } from '../_components/category-preview/category-preview.component';
import { HeaderComponent } from '../_components/header/header.component';
import { FooterComponent } from '../_components/footer/footer.component';
import { AdminPanelComponent } from '../../admin/_components/admin-panel/admin-panel.component';
import { MainPanelComponent } from '../_components/main-panel/main-panel.component';
import { MenuThemeElementComponent } from '../_components/menu-theme-element/menu-theme-element.component';
//import { AppRouterAdmin } from '../../admin/_components/routing/admin-routing.module';
import { AddThemeComponent } from '../../admin/_components/add-theme/add-theme.component';
import { AuthGuard }  from '../_services/auth-guard/auth-guard.service';



/*const ADMIN_PANEL_ROUTES: Routes = [
  { path: '', component: AdminPanelComponent },
];*/

const routes: Routes = [
  { path: '', component: MainPanelComponent, children:[
      { path: 'theme/:theme.ThemeUrl', component: ThemePreviewComponent },    
      { path: 'category/:category.CategoryUrl', component: CategoryPreviewComponent }
  ]},
  { path: 'admin', component: AdminPanelComponent }//, canActivate: [AuthGuard] }//, children: [
     
  
   // { path: 'theme/add-new-theme', component: AddThemeComponent }
    //{ path: '', loadChildren: ()=> AppRouterAdmin}
//]}
 // { path: 'admin', component: AdminPanelComponent, data: { title: 'Admin Panel' }, },
];



@NgModule({
  exports: [ 
    RouterModule 
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouter { }
