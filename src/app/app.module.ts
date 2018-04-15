import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CategoryService } from './_services/category/category.service';
import { ThemeService } from './_services/theme/theme.service';
import { SearchService } from './_services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from '../admin/admin.module';
//import { SpinnerModule } from 'angular-spinners';

import { AppComponent } from './app.component';
import { AppRouter } from './routing/routing.module';
import { MenuComponent } from './_components/menu/menu.component';
import { ThemePreviewComponent } from './_components/theme-preview/theme-preview.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPanelComponent } from './_components/main-panel/main-panel.component';
import { MenuThemeElementComponent } from './_components/menu-theme-element/menu-theme-element.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ThemePreviewComponent,
    HeaderComponent,
    FooterComponent, 
    MainLayoutComponent,
    MainPanelComponent,
    MenuThemeElementComponent
      ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AdminModule,
//    SpinnerModule,
    AppRouter,  
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  exports: [
    
  ],
  providers: [
    CategoryService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
