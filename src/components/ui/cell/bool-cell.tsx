import { toTitleCase } from "@/lib/string-utils";


const BoolCell = ({ status }: { status: boolean }) => {

  let ripple = <></>;
  let cell = 'yes';

  switch (status) {
    case true: 
      ripple = <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      break;
    case false:
      cell = 'no';
      ripple = <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
      </span>
      break;
  }

  return <>
    <div className="flex flex-row items-center gap-2">
      {ripple} 
      {toTitleCase(cell)}
    </div>

  </>;
};

export default BoolCell;