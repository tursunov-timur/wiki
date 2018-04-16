import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable  } from 'angularfire2/database-deprecated';
import { Theme } from '../../_models/ThemeModel';
import { Category } from '../../_models/CategoryModel';

@Injectable()
export class ThemeService {

  private selectedTheme = new Subject<Theme>();
  currentTheme = this.selectedTheme.asObservable();

  themesData: Observable<Theme[]>; 

  constructor(private http: HttpClientModule,
              private firebase: AngularFireDatabase) { }

  //getThemes(currentCategory: Category){
  getThemes(){
      //this.themesData = this.firebase.list('/CategoriesRelations');
        
      this.themesData = this.firebase.list<Theme>('/themes').valueChanges();    
      return this.themesData
  }

  getSelectedTheme():Observable<Theme> {
      return this.selectedTheme;
  }

  setSelectedTheme(theme: Theme){
      this.selectedTheme.next(theme);
      //console.log(this.selectedTheme.);
  }

  addTheme(theme: Theme) {
    this.firebase.list<Theme>('/themes').push(theme);
  }
  

  //sendTheme(selectedTheme: Theme){
  //  
  //}

}
