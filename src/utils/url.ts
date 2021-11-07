interface ICreatePath {
  searchQuery?: string;
  filters?: string[];
  minPrice: number;
  maxPrice: number;
}

export const createPath = ({
  searchQuery = '',
  filters = [],
  minPrice,
  maxPrice,
}: ICreatePath): string => {
  const getCategory = (filter: string) => {
    const categities = {
      country: ['Italy', 'Germany', 'Canada'],
      company: ['Felliny', 'Ikea', 'Otto'],
      material: ['wood', 'metal'],
    };

    for (const [key, values] of Object.entries(categities)) {
      if (values.includes(filter)) {
        return key;
      }
    }
  };

  const filtersPath = filters.reduce(
    (acc: string, filter: string) => `${acc}&${getCategory(filter)}.name_like=${filter}`,
    '',
  );

  const pricePath = `&price_gte=${minPrice}&price_lte=${maxPrice}`;

  let finalPath = `/products?name_like=${searchQuery}${filtersPath}${pricePath}`;
  return finalPath;
};
