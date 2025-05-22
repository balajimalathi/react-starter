import { toTitleCase } from "@/lib/string-utils";


const EnumCell = ({ status }: { status: string }) => {

  let ripple = <></>;

  switch (status) {
    // case "PUBLIC":
    //   ripple = <span className="relative flex h-3 w-3">
    //     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75"></span>
    //     <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
    //   </span>
    //   break;
    case "PUBLIC":
      ripple = <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
      </span>
      break;
    // case "INTERVIEW":
    //   ripple = <span className="relative flex h-3 w-3">
    //     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
    //     <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
    //   </span>
    //   break;
    case "PRIVATE":
      ripple = <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-400"></span>
      </span>
      break;
    // case "HIRED":
    //   ripple = <span className="relative flex h-3 w-3">
    //     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
    //     <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
    //   </span>
      break;
  }

  return <>
    <div className="flex flex-row items-center gap-2">
      {ripple}
      {toTitleCase(status)}
    </div>

  </>;
};

export default EnumCell;