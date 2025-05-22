import { IBrand } from "@/schema/brand";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import DateTimeCell from "@/components/ui/cell/date-time-cell";
import BoolCell from "@/components/ui/cell/bool-cell";
import EnumCell from "@/components/ui/cell/enum-cell";
import { Image } from "@/components/ui/image";

export const columns: ColumnDef<IBrand>[] = [
  {
    accessorKey: 'image_url',
    header: '',
    cell: ({ row }) => {
      const image = row.original.image;

      if (!image) {
        return <img
          src="/placeholder.svg"
          alt="Image"
          className="h-16 w-16 object-cover rounded-lg"
        />
      }

      const fileUrl = row.original.image.fileUrl;
      const name = row.original.image.originalFileName;
      return (
        <div className='relative h-16 w-16'>
          <Image
            src={fileUrl}
            alt={name}
            className='h-full w-full object-cover rounded-lg'
          />
        </div>
      );
    }
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ row }) => <BoolCell status={row.getValue("featured")} />
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <EnumCell status={row.getValue("status")} />
  },
  // TODO: Live link to the brand page -> target=_blank
  // {
  //   accessorKey: "link",
  //   header: "Link",
  // },
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
