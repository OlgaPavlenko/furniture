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
  id: string;
  color: string;
  baseUrl: string;
  url: string;
  price: number;
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
  product?: any;
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

export interface ICartProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface IProductWithQuantity {
  product: ICartProduct;
  quantity: number;
  isInCart: boolean;
}
