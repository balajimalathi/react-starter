import { IBrand } from "@/schema/brand";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import DateTimeCell from "@/components/ui/cell/date-time-cell";

export const columns: ColumnDef<IBrand>[] = [
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  }, 
  { 
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <DateTimeCell dateStr={row.getValue("createdAt")} isTime={2} /> 
  },
  {
    id: "actions",
     header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
