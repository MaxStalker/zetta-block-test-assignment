export const sortData = (reverse: boolean, data: T[], field: string) => {
  const mul = reverse ? 1 : -1;
  return data.sort((a: T, b: T) => {
    if (a[field] > b[field]) return mul;
    if (a[field] < b[field]) return -mul;
    return 0;
  });
};
