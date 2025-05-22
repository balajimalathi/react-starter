import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";
import React from "react";
import { DataTableSkeleton } from "./data-table-skeleton";
import { DataTableViewOptions } from "./data-table-view-options";
import { Cross2Icon } from "@radix-ui/react-icons";

type DataTableProps<TData> = {
  columns: any[];
  data: TData[];
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalPages: number;
  isLoading: boolean;
  enableSearch?: boolean;
  showPagination?: boolean;
};

export function DataTable<TData>({
  columns,
  data,
  currentPage,
  onPageChange,
  pageSize,
  onPageSizeChange,
  searchTerm,
  onSearchChange,
  totalPages,
  isLoading,
  enableSearch = true,
  showPagination = true
}: DataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    pageCount: totalPages,
    state: {
      pagination: {
        pageIndex: currentPage,
        pageSize: pageSize
      }
    },
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
    onPageChange(0); // Reset page on search
  };

  return (
    <div>
      <div className="flex flex-1 items-center space-x-2">
        {enableSearch && (
          <div className="flex items-center py-4">
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-8 w-[150px] lg:w-[250px]"
            />
          </div>
        )}

        
        {searchTerm && (
          <Button
            variant="outline"
            onClick={() => onSearchChange('')}
            className="h-8 px-2 lg:px-3">
            Reset
            <Cross2Icon className="ml-2 size-4" />
          </Button>
        )}
        <DataTableViewOptions table={table} />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <DataTableSkeleton columns={columns.length} />
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {showPagination && (
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              defaultValue={`${pageSize}`}
              onValueChange={(value) => {
                onPageSizeChange(Number(value));
                onPageChange(0); // Reset to first page
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={`${pageSize}`} />
              </SelectTrigger>
              <SelectContent side="top">
                {[25, 50, 75, 100].map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}
              disabled={currentPage >= totalPages - 1}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
