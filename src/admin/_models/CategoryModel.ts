import { Theme } from '../_models/ThemeModel';

export class Category {
    $key:string;
    CategoryId: number;
    CategoryName: string;
    CategoryUrl: string;
    CategoryParentId: number;
    IsActive: boolean;
    Sort: number;   
}