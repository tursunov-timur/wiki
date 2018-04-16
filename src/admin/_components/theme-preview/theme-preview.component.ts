import { Component, OnInit, Input } from '@angular/core';

import { Theme } from '../../../app/_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { CategoryService } from '../../../app/_services/category/category.service';
import { ThemeService } from '../../../app/_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.component.html',
  styleUrls: ['./theme-preview.component.css']
})
export class ThemePreviewComponent implements OnInit {

  currentTheme: Theme; 

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
      this.themeService.currentTheme.subscribe(
        theme => {this.currentTheme = theme
        });
      
  }

  ngOnChanges(){
    console.log(this.currentTheme.ThemeName);
  }
}
