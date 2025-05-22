import { columns } from "./_components/columns";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { EmptyTable } from "@/components/common/empty-state-table";
import { useBrandApi } from "./brand.service";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePaginatedSearch } from "@/hooks/use-paginated-search";

export function Component() {

  const [isOpen, setOpen] = useState(false);
  // const { user } = useAuth();
  const brandApi = useBrandApi();

  // const [isLoading, setLoading] = useState(true);
  // const [total, setTotal] = useState(0);
  // const [pages, setPages] = useState(0); // Default page size  

  // const fetchData = async (page: number, pageSize: number, searchString: string) => {

  //   const response = await brandApi.getBrands(page, pageSize).then((res: any) => res.data)

  //   setPages(response.totalPages)
  //   setTotal(response.totalElements)
  //   return response.content;
  // };


  // useEffect(() => {
  //   const init = async () => {
  //     fetchData(0, 25, '');
  //   };

  //   init();
  // }, [])

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
        <Button onClick={() => {
          setOpen(true);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Add
        </Button>
      </div>
      {/* <DepartmentForm
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          fetchData(0, 2);
        }}
        initialData={null}
      /> */}
      {/* <Separator /> */}
      {

        // <DataTable searchKey={["name"]} columns={columns} fetchData={fetchData} totalPages={pages} totalElements={total} isLoading={isLoading} />

        // <EmptyTable
        //   title={"No brands added"}
        //   description={"You have not added any brands. Add one below."}
        //   action={"Add Brands"}
        //   onClick={() => setOpen(true)}
        // />  

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
      }
    </div>
  </div>
}
