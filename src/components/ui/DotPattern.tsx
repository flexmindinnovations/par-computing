import React from "react";
import { cn } from "@/lib/utils";

const DotPattern = React.memo(function DotPattern({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute -z-10 h-full w-full [mask-image:radial-gradient(white,transparent_75%)]",
        className
      )}
      {...props}
    >
      <svg className="absolute h-full w-full">
        <defs>
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1" className="fill-muted-foreground/30"></circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)"></rect>
      </svg>
    </div>
  );
});

export default DotPattern; 