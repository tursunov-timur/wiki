import { Component, Input, Output } from '@angular/core';

import { Theme } from './_models/ThemeModel';
import { Category } from './_models/CategoryModel';
import { CategoryService } from './_services/category/category.service';
import { ThemeService } from './_services/theme/theme.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from '@firebase/util/dist/esm/src/subscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})

export class AppComponent {
  @Input() selectedTheme: Theme;
  @Output() currentTheme: Theme;

  selectTheme() {
    this.currentTheme = this.selectedTheme;
  }

  title = 'app';
}
