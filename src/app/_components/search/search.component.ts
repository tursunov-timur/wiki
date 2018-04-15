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

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

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