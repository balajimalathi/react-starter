import { columns } from "./_components/columns";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useBrandApi } from "./brand.service";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { usePaginatedSearch } from "@/hooks/use-paginated-search";
import { useNavigate } from "react-router-dom";

export function Component() {

  const brandApi = useBrandApi();
  const navigate = useNavigate();

  const {
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
  } = usePaginatedSearch({
    apiFn: brandApi.getBrands
  });

  return <div className="flex-col">
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <Heading title={`Brands (${totalElements})`} description="Manage your brands" />
        <Button onClick={() => navigate(`/admin/product/brand/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={data}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalPages={totalPages}
        isLoading={isLoading}
      />

    </div>
  </div >
}
