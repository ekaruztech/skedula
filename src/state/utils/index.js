export const filterAndDelete = (obj, key) =>
  Object.keys(obj)
    .filter(value => value !== key)
    .map(value => ({ [value]: obj[value] }))
    .reduce((prev, cur) => ({ ...prev, ...cur }), {});
