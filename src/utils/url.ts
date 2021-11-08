import { ICategories } from './interfaces/filter';

interface ICreatePath {
  searchQuery?: string;
  filters?: string[];
  categories?: ICategories;
  minPrice: number;
  maxPrice: number;
}

export const createPath = ({
  searchQuery = '',
  categories = {
    countries: [],
    companies: [],
    materials: [],
  },
  filters = [],
  minPrice,
  maxPrice,
}: ICreatePath): string => {
  const filtersPath = filters.reduce(
    (acc: string, filter: string) =>
      `${acc}&${getCategory(categories, filter)}.name_like=${filter}`,
    '',
  );

  const pricePath = `&price_gte=${minPrice}&price_lte=${maxPrice}`;
  let finalPath = `/products?name_like=${searchQuery}${filtersPath}${pricePath}`;
  console.log(finalPath);
  return finalPath;
};

const getCategory = (categories: ICategories, filter: string) => {
  for (const [key, values] of Object.entries(categories)) {
    if (Object.entries(values.includes(filter))) {
      return key;
    }
  }
};
