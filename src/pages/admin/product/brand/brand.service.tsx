import { useApiClient } from "@/hooks/use-api-client"; 

export const useBrandApi = () => {
  const api = useApiClient();

  return {
    getBrands: (page: number, pageSize: number, search: string) =>
      api.get(`/v1/brand?pageNo=${page}&pageSize=${pageSize}${search ? `&search=${search}` : ''}`)
        .then((response) => ({
          content: response.data.content,
          totalPages: response.data.totalPages,
          totalElements: response.data.totalElements
        })),
    getBrandById: (id: string) => api.get(`/v1/brand/${id}`),
    postBrand: (ami: any) => api.post(`/v1/brand`, ami),
    putBrand: (id: string, ami: any) => api.put(`/v1/brand/${id}`, ami),
  };
};