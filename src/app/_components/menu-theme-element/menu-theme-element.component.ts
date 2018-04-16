import { Component, OnInit, Input, Output   } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../_services/category/category.service';
import { ThemeService } from '../../_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-menu-theme-element',
  templateUrl: './menu-theme-element.component.html',
  styleUrls: ['./menu-theme-element.component.css']
})
export class MenuThemeElementComponent implements OnInit {

  @Input() currentCategory: Category;

  selectedTheme: Theme;
  selectedThemeUrl: string;
  categories: Category[];
  themes: Theme[]; 

  constructor( 
      private categoryService: CategoryService,
      private themeService: ThemeService,
      private route: ActivatedRoute,
      private router: Router
    ) {  
      //this.route.params.subscribe(params => this.selectedThemeUrl=params['theme.ThemeUrl']);
  }

  ngOnInit() {  
    //console.log(this.currentCategory.CategoryName);  
    this.themeService.getThemes()
    .map(themes => themes.filter(thm => thm.CategoryId === this.currentCategory.$key))    
    .subscribe(
      data => this.themes = data
    );
  }


  openTheme(theme: Theme){  
     //console.log(theme.ThemeName);
       this.selectedTheme = theme;
       this.themeService.setSelectedTheme(theme);
   }
 

}
