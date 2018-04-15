import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRoutes} from '@angular/router';


import { AppRouterAdmin } from './_components/routing/admin-routing.module';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AdminPanelComponent } from './_components/admin-panel/admin-panel.component';
import { AdminLayoutComponent } from './_components/admin-layout/admin-layout.component';
import { AddThemeComponent } from './_components/add-theme/add-theme.component';
import { MenuComponent } from './_components/menu/menu.component';
import { ThemePreviewComponent } from './_components/theme-preview/theme-preview.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';


@NgModule({
  imports: [   
    CommonModule,    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AppRouterAdmin,  
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  declarations: [
    AdminPanelComponent,
    AdminLayoutComponent,
    AddThemeComponent,
    MenuComponent,
    ThemePreviewComponent,
    HeaderComponent,
    FooterComponent  
  ]  
})
export class AdminModule { }
