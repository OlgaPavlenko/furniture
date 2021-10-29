import { ICategory } from './category.interface';
import { ICompany } from './company.interface';
import { ICountry } from './country.interface';
import { IProductImage } from './image.interface';
import { IMaterial } from './material.interface';
import { IProductSize } from './size.interface';

export interface IProduct {
  product: any;
  id: string;
  name: string;
  category: ICategory;
  company: ICompany;
  size: IProductSize;
  country: ICountry;
  material: IMaterial[];
  description: string;
  images: IProductImage[];
  price: number;
}
