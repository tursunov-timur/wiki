import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../../app/_services/category/category.service';
import { ThemeService } from '../../../app/_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {

  public newTheme;
  public addedTheme;
  ThemeId: number;
  ThemeName: string;
  ThemeUrl: string;
  ThemeDescription: string;
  ThemeBody: string;
  CreationDate: Date;
  IsActive: boolean;
  CategoryId: number;

  addThemeForm : FormGroup = new FormGroup({
             
    "themeName": new FormControl("", Validators.required),
    "themeUrl": new FormControl("", Validators.required),
    "themeDescription": new FormControl("", Validators.required),
    "themeBody": new FormControl("", Validators.required),
    "creationDate": new FormControl("", Validators.required),
    "isActive": new FormControl("", Validators.required),
    "categoryId": new FormControl("", Validators.required)
});

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

  themeName = new FormControl();

  addThemeData() {  
     
      this.addedTheme = new Theme(
        3,
        this.addThemeForm.get["themeName"],
        this.ThemeDescription,
        this.ThemeBody,        
        true,
        this.themeUrl,
        this.CategoryId   
      );

      this.themeService.addTheme(this.addedTheme);
  }

}
