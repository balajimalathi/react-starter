import { useApiClient } from "@/hooks/use-api-client";

export const useBrandApi = () => {
  const api = useApiClient();

  return {
    getBrands: function (page: number, pageSize: number, search: string) {

      /**
       * Supported filters: code, name
       */

      const filterString = `code ~ '${search}' or name ~ '${search}' `;
      search = encodeURIComponent(filterString);

      return api.get(`/v1/brand?pageNo=${page}&pageSize=${pageSize}${search ? `&query=${search}` : ''}`)
        .then((response) => ({
          content: response.data.content,
          totalPages: response.data.totalPages,
          totalElements: response.data.totalElements
        }));
    },
    getBrandById: (id: string) => api.get(`/v1/brand/${id}`),
    postBrand: (ami: any) => api.post(`/v1/brand`, ami, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }),
    putBrand: (id: string, ami: any) => api.put(`/v1/brand/${id}`, ami, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }),
  };
};