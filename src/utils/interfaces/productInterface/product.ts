export interface ICategory {
  id: string;
  name: string;
}

export interface ICompany {
  id: string;
  name: string;
  countryId: string;
}

export interface ICountry {
  id: string;
  name: string;
}

export interface IProductImage {
  color: string;
  baseUrl: string;
  url: string;
}

export interface IMaterial {
  id: string;
  name: string;
}

export interface IProductSize {
  width: string;
  height: string;
  length: string;
}

export interface IProduct {
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
