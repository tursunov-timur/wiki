import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from './_services/category/category.service';
import { ThemeService } from './_services/theme/theme.service';
import { SearchService } from './_services/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from '../admin/admin.module';
// import { AppRouterAdmin } from '../admin/_components/routing/admin-routing.module';
import { AppRouter } from './routing/routing.module';
// import { SpinnerModule } from 'angular-spinners';
import { provideRoutes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './_components/menu/menu.component';
import { ThemePreviewComponent } from './_components/theme-preview/theme-preview.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainPanelComponent } from './_components/main-panel/main-panel.component';
import { MenuThemeElementComponent } from './_components/menu-theme-element/menu-theme-element.component';
import { CategoryPreviewComponent } from './_components/category-preview/category-preview.component';
import { NgbdTypeaheadFormat } from './_components/search/search.component';
import { AuthGuard } from './_services/auth-guard/auth-guard.service';
import { AuthService } from './_services/auth/auth.service';
import { Error404PageComponent } from './_components/error-404-page/error-404-page.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ThemePreviewComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    MainPanelComponent,
    MenuThemeElementComponent,
    CategoryPreviewComponent,
    NgbdTypeaheadFormat,
    Error404PageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    // AppRouterAdmin,
//    SpinnerModule,
    AppRouter,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  exports: [

  ],
  providers: [
    CategoryService,
    ThemeService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
