import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable  } from 'angularfire2/database-deprecated';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';

@Injectable()
export class CategoryService {

  categoriesData: Observable<Category[]>; 

  constructor(private http: HttpClientModule,
              private firebase: AngularFireDatabase) { }

  getCategories(){
      this.categoriesData = this.firebase.list<Category>('/categories').valueChanges();         
      return this.categoriesData
  }

  /*addCategory(category: Category){
    this.categoriesData.push({
      name: category.CategoryName,
      url: category.CaregoryUrl,
      parentId: category.CategoryParentId,
      isActive: category.IsActive,
      sort: category.Sort
    })
  }*/
}
