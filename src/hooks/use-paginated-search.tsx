import { useEffect, useState, useCallback } from "react";
import { useDebounce } from "use-debounce";

type UsePaginatedSearchParams<T> = {
  apiFn: (page: number, pageSize: number, search: string) => Promise<{
    content: T[];
    totalPages: number;
    totalElements: number;
  }>;
  defaultPageSize?: number;
};

export function usePaginatedSearch<T>({
  apiFn,
  defaultPageSize = 25,
}: UsePaginatedSearchParams<T>) {
  const [data, setData] = useState<T[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 400);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Memoize the API function to prevent it from causing infinite loops
  const memoizedApiFn = useCallback(apiFn, []);

  const fetchData = useCallback(
    async (page: number, size: number, search: string) => {
      setIsLoading(true);
      try {
        const res = await memoizedApiFn(page, size, search);
        setData(res.content);
        setTotalPages(res.totalPages);
        setTotalElements(res.totalElements);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [memoizedApiFn]
  );

  useEffect(() => {
    fetchData(currentPage, pageSize, debouncedSearchTerm);
  }, [currentPage, pageSize, debouncedSearchTerm, fetchData]);

  return {
    data,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    searchTerm,
    setSearchTerm,
    totalPages,
    totalElements,
    isLoading,
    refetch: () => fetchData(currentPage, pageSize, debouncedSearchTerm),
  };
}
