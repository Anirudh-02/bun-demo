export const getParamFromRequestByName = (
  request: Request,
  paramName: string,
) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const result = params.get(paramName) ?? "";
  const decodedResult = decodeURIComponent(result.replace(/%22/g, ""));
  return decodedResult;
};
