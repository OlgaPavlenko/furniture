import { ICategory } from './interfaces/product';
import { IFilter } from './../store/slices/filter';

interface ICreatePath {
  searchQuery?: string;
  filters?: ICategory[];
  categories?: IFilter[];
  minPrice: number;
  maxPrice: number;
}

export const createPath = ({
  searchQuery,
  categories,
  filters,
  minPrice,
  maxPrice,
}: ICreatePath): string => {
  return '';
  // const filtersPath = filters.reduce(
  //   (acc: string, filter: string) =>
  //     `${acc}&${getCategory(categories, filter)}.name_like=${filter}`,
  //   '',
  // );
  // const filtersPath = filters?.reduce((acc, filter) => {
  //   const names = filter.filterOptions.map((category) => category.name);
  //   return `${acc}&${filter.name}=${names.join()}`;
  // }, '');
  // const pricePath = `&price_gte=${minPrice}&price_lte=${maxPrice}`;
  // let finalPath = `/products?name_like=${searchQuery}${filtersPath}${pricePath}`;
  // console.log(filtersPath);
  // return finalPath;
};

// const getCategory = (categories: ICategories, filter: string) => {
//   for (const [key, values] of Object.entries(categories)) {
//     if (Object.entries(values.includes(filter))) {
//       return key;
//     }
//   }
// };
