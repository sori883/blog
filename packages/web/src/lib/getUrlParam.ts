// URLから指定したパラメータの値を返す
const getUrlParam = (param: string): string|null => {
  if (!process.browser) {
    return  null;
  }
  const parser = new URL(window.location.href);
  return parser.searchParams.get(param);
};

export default getUrlParam;