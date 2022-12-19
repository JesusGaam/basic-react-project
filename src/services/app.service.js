const getAuthInfo = () => {
  return {
    //"Access-Token": ""
  };
};

const getHeaders = async () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...getAuthInfo(),
    },
  };
};

const appService = async (config = {}) => {
  const { path: path = "", method: method = "GET" } = config;
  return fetch(path, {
    method,
    ...(await getHeaders()),
    ...config,
  });
};

export default appService;
