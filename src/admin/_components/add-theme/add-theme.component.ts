import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../../app/_services/category/category.service';
import { ThemeService } from '../../../app/_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';
import { CastExpr } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {

  public newTheme;
  public addedTheme;
  public categories: Category[];
  ThemeId: number;
  ThemeName: string;
  ThemeUrl: string;
  ThemeDescription: string;
  ThemeBody: string;
  CreationDate: Date;
  IsActive: boolean;
  CategoryId: number;

  themeName = new FormControl();

  addThemeForm: FormGroup = new FormGroup({

    'themeName': new FormControl('', Validators.required),
    'themeUrl': new FormControl('', Validators.required),
    'themeDescription': new FormControl('', Validators.required),
    'themeBody': new FormControl('', Validators.required),
    'creationDate': new FormControl('', Validators.required),
    'isActive': new FormControl('', Validators.required),
    'categoryId': new FormControl('', Validators.required)
});

  constructor(
    public themeService: ThemeService,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(
      data => this.categories = data
    );
  }



  addThemeData() {

      this.addedTheme = new Theme(
        null,
        this.addThemeForm.get('themeName').value,
        this.addThemeForm.get('themeDescription').value,
        this.addThemeForm.get('themeBody').value,
        this.addThemeForm.get('themeUrl').value,
        '2'// this.addThemeForm.get('categoryId').value
      );

      this.themeService.addTheme(this.addedTheme);
  }

}
