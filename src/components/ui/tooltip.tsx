import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // Enhanced Glassmorphism background using theme colors
          "bg-[var(--glassmorphism)] backdrop-blur-xl backdrop-saturate-150",
          // Border using theme ring color
          "border border-[var(--ring)]/30",
          "ring-1 ring-[var(--glassmorphism-border)]",
          // Text styling using theme foreground
          "text-[var(--foreground)] font-medium",
          // Enhanced shadow for depth
          "shadow-2xl shadow-black/20 dark:shadow-black/50",
          // Animation
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          // Layout and positioning
          "z-50 w-fit origin-(--radix-tooltip-content-transform-origin)",
          "rounded-lg px-3 py-2 text-sm text-balance max-w-xs",
          // Enhanced transition for smooth theme changes
          "transition-all duration-300 ease-in-out",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-[var(--glassmorphism)] w-2 h-2 stroke-[var(--ring)] stroke-1" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
