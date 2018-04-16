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
        public ThemeId: number,
        public ThemeName: string,
        public ThemeDescription: string,
        public ThemeBody: string,     
        public IsActive: boolean,
        public ThemeUrl: string,
        public CategoryId: number
    ){}

    /*ThemeId: number;
    ThemeName: string;
    ThemeUrl: string;
    ThemeDescription: string;
    ThemePreview: string;
    ThemeBody: string;
    CreationDate: Date;
    IsActive: boolean;
    CategoryId: number;*/
}