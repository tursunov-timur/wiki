import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable  } from 'angularfire2/database-deprecated';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class CategoryService {

  categoriesData: Observable<Category[]>;   
  private categoryObserver: Observer<Category>; 
  private selectedCategory = new Subject<Category>();
  //currentCategory = this.categoryObserver.asObservable();
  currentCategory = this.selectedCategory.asObservable();
  

  constructor(private http: HttpClientModule,
              private firebase: AngularFireDatabase) { }

  getCategories(){
      this.categoriesData = this.firebase.list<Category>('/categories').valueChanges();         
      return this.categoriesData
  }

  setCurrentCategory(category: Category) {
    this.selectedCategory.next(category);
    this.getCurrentCategory();
    console.log(category.CategoryName);
   // this.categoryObserver.next(category);;
  }

  getCurrentCategory():Observable<Category> {
    console.log("get");
    return this.currentCategory;    
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
