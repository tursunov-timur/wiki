export class Theme {

    /*constructor(newTheme: Theme){
        this.ThemeId = newTheme.ThemeId;
        this.ThemeName = newTheme.ThemeName,
        this.ThemeDescription = newTheme.ThemeDescription,
        this.ThemePreview = newTheme.ThemePreview,
        this.IsActive = newTheme.IsActive,
        this.ThemeUrl = newTheme.ThemeUrl,
        this.CategoryId = newTheme.CategoryId;
    }*/
   
    constructor(
        public $key: string,
        public ThemeId: number,
        public ThemeName: string,
        public ThemeDescription: string,
        public ThemeBody: string, 
        public ThemeUrl: string,
        public CategoryId: number
    ){}
   
}