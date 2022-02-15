
import http from "./httpService.js";

export const getAllProductList = async () => {
    const apiEndPoint = `https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`;
    return await http.get(`${apiEndPoint}`);
  };