export const sortData = (data: T[], field: string, reverse: boolean) => {
  const multiplier = reverse ? -1 : 1;
  return data.sort((a: T, b: T) => {
    const aValue = a[field];
    const bValue = b[field];
    if (aValue > bValue) return multiplier;
    if (aValue < bValue) return -multiplier;
    return 0;
  });
};
