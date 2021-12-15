import { IFilter } from 'store/slices/filter';

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

  const pricePath = `&images.0.price_gte=${minPrice}&images.0.price_lte=${maxPrice}`;
  const finalPath = `/products?name_like=${searchQuery}${filtersPath}${pricePath}`;
  return finalPath;
};
