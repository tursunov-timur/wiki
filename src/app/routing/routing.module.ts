import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../_components/menu/menu.component';
import { ThemePreviewComponent } from '../_components/theme-preview/theme-preview.component';
import { HeaderComponent } from '../_components/header/header.component';
import { FooterComponent } from '../_components/footer/footer.component';
import { AdminPanelComponent } from '../../admin/_components/admin-panel/admin-panel.component';
import { MainPanelComponent } from '../_components/main-panel/main-panel.component';
import { MenuThemeElementComponent } from '../_components/menu-theme-element/menu-theme-element.component';

const ADMIN_PANEL_ROUTES: Routes = [
  { path: '', component: AdminPanelComponent },
];

const routes: Routes = [
  { path: '', component: MainPanelComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'theme/:ThemeUrl', component: ThemePreviewComponent, outlet: 'theme-preview' },
  { path: 'category/:CategoryUrl', component: ThemePreviewComponent, outlet: 'theme-preview' },
  { path: 'admin', component: AdminPanelComponent, data: { title: 'Admin Panel' }, },
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
