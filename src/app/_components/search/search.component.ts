import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../_services/category/category.service';
import { ThemeService } from '../../_services/theme/theme.service';



@Component({
  selector: 'ngbd-typeahead-format',
  templateUrl: './search.component.html',
  styles: [`.form-control { width: 300px; }`]
})
export class NgbdTypeaheadFormat {
  public model: any;
  categories: Category[];
  themes: Theme[];

  constructor( 
    private categoryService: CategoryService,
    private themeService: ThemeService
  )  { }

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

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : this.themes
        .map(function(e) { return e.ThemeName; })
        .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
}