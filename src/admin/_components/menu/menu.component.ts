import { Component, OnInit, Input, Output   } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

import { Theme } from '../../../app/_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../../app/_services/category/category.service';
import { ThemeService } from '../../../app/_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  selectedTheme: Theme;
  categories: Category[];
  themes: Theme[]; 

  constructor( 
    private categoryService: CategoryService,
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    //this.router.navigate(["theme", this.selectedTheme.ThemeUrl]);
  }

  ngOnInit() {
      this.themeService.getThemes().subscribe(
        data => this.themes = data
      );
      this.categoryService.getCategories()
      //.filter(res => res)     
      .subscribe(
        data => this.categories = data
      );
      
  }

  loadTheme(currentCategory: Category){
    this.themeService.getThemes()
    .map(themes => themes.filter(thm => thm.CategoryId === currentCategory.$key))    
    .subscribe(
      data => this.themes = data
    );   
  }

}
