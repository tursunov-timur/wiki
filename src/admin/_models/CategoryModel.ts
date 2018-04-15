import { Theme } from '../_models/ThemeModel';

export class Category {
    CategoryId: number;
    CategoryName: string;
    CategoryUrl: string;
    CategoryParentId: number;
    IsActive: boolean;
    Sort: number;
    Themes: Theme[];
}