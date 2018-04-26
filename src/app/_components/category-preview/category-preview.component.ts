import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../_services/category/category.service';
import { ThemeService } from '../../_services/theme/theme.service';
import { Category } from '../../_models/CategoryModel';
import { Theme } from '../../_models/ThemeModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css']
})
export class CategoryPreviewComponent implements OnInit {

  currentCategory: Category;
  currentCategoryUrl: string;
  currentCategoryKey: string;
  themes: Theme[];

  constructor(
    private categoryService: CategoryService,

    private themeService: ThemeService,
    private route: ActivatedRoute
  ) {    }

  loadCategory() {

    /*this.categoryService.getCategory(this.currentCategoryUrl)
      .filter(x => x[0].CategoryUrl === this.currentCategoryUrl)
      .subscribe( data => this.currentCategory[0] = data);*/

    this.categoryService.getCategory(this.currentCategoryKey)
      .subscribe(data => this.currentCategory = data);

      console.log(this.currentCategory.CategoryName);

    this.themeService.getThemes()
    .map(themes => themes.filter(thm => thm.CategoryId === this.currentCategory.$key))
    .subscribe(
      data => this.themes = data
    );

  }

  ngOnInit() {
    // this.route.params.subscribe(params => console.log(params.category.CategoryUrl));
    // this.currentCategoryUrl = route.snapshot.params['category.CategoryUrl'];
    this.route.params.subscribe(params => {
        this.currentCategoryUrl = params['category.CategoryUrl'];
      // url => redirect 404
      this.loadCategory();
    });
    // console.log("cat preview");

   // console.log(this.currentCategory.CategoryName);
  }
}
