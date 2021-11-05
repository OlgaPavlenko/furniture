import { ICompany, ICountry, IMaterial } from "./product";

export interface ICategories {
  countries: ICountry[];
  companies: ICompany[];
  materials: IMaterial[];
}
