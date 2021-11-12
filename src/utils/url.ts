import { IFilter } from './../store/slices/filter';

interface ICreatePath {
  searchQuery: string;
  filters: IFilter;
  minPrice: number;
  maxPrice: number;
}

export const createPath = ({ searchQuery, filters, minPrice, maxPrice }: ICreatePath): string => {
  const filtersPath = Object.entries(filters).reduce(
    (acc, [key, values]) => `${acc}${values.map((value) => `&${key}.name_like=${value}`).join('')}`,
    '',
  );

  const pricePath = `&price_gte=${minPrice}&price_lte=${maxPrice}`;
  let finalPath = `/products?name_like=${searchQuery}${filtersPath}${pricePath}`;
  return finalPath;
};
