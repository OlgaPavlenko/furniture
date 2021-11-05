interface ICreatePath {
  searchQuery?: string;
  filters?: string[];
}

export const createPath = ({ searchQuery = '', filters = [] }: ICreatePath): string => {
  const filtersPath = filters.reduce((acc: string) => `${acc}&${filters.join()}`, '');

  let finalPath = `${searchQuery}&${filtersPath}`;
  console.log(finalPath);
  return finalPath;
};
