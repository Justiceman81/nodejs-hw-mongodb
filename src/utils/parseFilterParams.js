const parseType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isKnownType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);
  if (isKnownType(contactType)) return contactType;
};

const parseFavorite = (isFavourite) => {
  const isBoolean = typeof isFavourite === 'boolean';
  if (!isBoolean) return;
  return isFavourite;
};

export const parseFilterParams = (query = {}) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseType(contactType);
  const parsedIsFavourite = parseFavorite(isFavourite);

  const filter = {};
  if (parsedContactType) filter.contactType = parsedContactType;
  if (parsedIsFavourite !== undefined) filter.isFavourite = parsedIsFavourite;

  return filter;
};
