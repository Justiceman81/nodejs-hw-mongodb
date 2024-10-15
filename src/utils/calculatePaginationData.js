export const calculatePaginationData = (count, page, perPage) => {
  const totalPages = Math.ceil(perPage / page);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    hasNextPage,
    hasPreviousPage,
    totalPages,
  };
};
