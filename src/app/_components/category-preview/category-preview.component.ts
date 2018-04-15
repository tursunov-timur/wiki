import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_services/category/category.service';
import { ThemeService } from '../../_services/theme/theme.service';
import { Category } from '../../_models/CategoryModel';
import { Theme } from '../../_models/ThemeModel';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css']
})
export class CategoryPreviewComponent implements OnInit {

  currentCategory: Category;
  themes: Theme[];

  constructor(
    private categoryService: CategoryService,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.categoryService.getCurrentCategory()
      .subscribe( data => this.currentCategory = data);
    this.themeService.getThemes()
    .map(themes => themes.filter(thm => thm.CategoryId === this.currentCategory.CategoryId))    
    .subscribe(
      data => this.themes = data
    );   
  }
}
