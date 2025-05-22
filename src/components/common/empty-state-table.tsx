import { Button } from "@/components/ui/button"
import { PackageOpen } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    action: string | null;
    onClick: () => void;
}

export const EmptyTable: React.FC<HeadingProps> = ({
    title,
    description,
    action,
    onClick
}) => {

    return (
        <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">

                <PackageOpen className="text-muted-foreground size-10" />

                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                    {description}
                </p>
                {action && <Button size="sm" className="relative" onClick={onClick}>
                    {action}
                </Button>}

            </div>
        </div>
    )
}