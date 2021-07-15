const getIdFromUrl = (url: string): number => {
  const splitUrl = url.split('/');
  const strId = splitUrl[splitUrl.length - 2];
  const id = parseInt(strId, 10);
  return id;
};

export default getIdFromUrl;
