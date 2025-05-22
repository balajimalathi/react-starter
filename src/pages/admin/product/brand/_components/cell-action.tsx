"use client";

import { useState } from "react";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { IBrand } from "@/schema/brand";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
  data: IBrand;
}

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {
  const navigate = useNavigate();
  // const router = useRouter(); 
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  // const { set } = useUpdateStore();

  // const onConfirm = async () => {
  //   try {
  //     setLoading(true);
  //     // await apiClient.delete(`/department/${data.id}`);
  //     // set(data?.id ?? '');
  //     toast.success('Department deleted.');
  //     // router.refresh();
  //   } catch (error) {
  //     toast.error('Make sure you re-assign all employees using this department first.');
  //     throw error;
  //   } finally {
  //     setOpen(false);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      {/* <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />

      <DepartmentForm
        isOpen={openForm}
        onClose={() => {
          setOpenForm(false);
          set(data?.id ?? '');
        }}
        initialData={data}
      /> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => navigate(`/admin/product/brand/${data.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setOpen(true)}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
