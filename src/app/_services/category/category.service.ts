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
import { map } from 'rxjs/operator/map';

@Injectable()
export class CategoryService {

  categoriesData: Observable<Category[]>;
  private categoryObserver: Observer<Category>;
  private selectedCategory = new Subject<Category>();
  // currentCategory = this.categoryObserver.asObservable();
  // currentCategory = this.selectedCategory.asObservable();
  currentCategory: Observable<Category>;
  currentCategory1: Observable<Category[]>;
  customers: any;


  constructor(private http: HttpClientModule,
              private firebase: AngularFireDatabase) { }

  getCategories() {
      this.categoriesData = this.firebase.list<Category>('/categories').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.val() as Category;
          const $key = a.payload.key;
          return { $key, ...data };
        });
      });
      return this.categoriesData;

      /*this.firebase.list('/categories').snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val()}));
      }).subscribe(fileUploads => {
        this.customers = fileUploads;
      });

      return this.categoriesData;*/
  }

 /* getCategory(categoryUrl: string): Observable<Category[]>{
    this.currentCategory = this.firebase.list('/categories').valueChanges()
      .map( items => {
        const itemsFiltered = items.filter( item => item.CaregoryUrl === categoryUrl)
      });*/

  getCategory(CategoryKey: string): Observable<Category> {
    this.currentCategory = this.firebase.object<Category>('categories').valueChanges()
    .filter(cat => cat.$key === CategoryKey);



    return this.currentCategory;
  }

    /*this.currentCategory1 = this.firebase.list<Category>('/categories',
      ref => ref.orderByChild('CategoryUrl')
      .equalTo(categoryUrl)).valueChanges();
    console.log(this.currentCategory1[0].CaregoryUrl);
}*/


  /*setCurrentCategory(category: Category) {
    this.selectedCategory.next(category);
    this.getCategory();
    //console.log(category.CategoryName);
   // this.categoryObserver.next(category);;
  }*/

  /*getCurrentCategory():Observable<Category[]> {
    //console.log("get");
    return this.currentCategory;
  }*/

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
