import { Moon, Sun, Laptop } from "lucide-react"

import { useTheme } from "@/components/ThemeProvider"
import type { Theme } from "@/components/ThemeProvider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const themes: { value: Theme; icon: React.ElementType; label: string }[] = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Laptop, label: "System" },
]

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (        <ToggleGroup
            type="single"
            variant="outline"
            value={theme}
            onValueChange={val => val && setTheme(val as Theme)}
            className="gap-0 bg-glassmorphism/40 backdrop-blur-sm border border-glassmorphism-border rounded-full p-1"
        >
            {themes.map(({ value, icon: Icon, label }) => (
                <Tooltip key={value}>
                    <TooltipTrigger asChild>
                        <ToggleGroupItem
                            value={value}
                            aria-label={label}                            className={cn(
                                "min-w-12 h-10 rounded-full transition-all duration-200",
                                "hover:bg-glassmorphism/60 hover:scale-105",
                                "text-muted-foreground border-0 shadow-none",
                                "data-[state=on]:bg-gradient-to-r data-[state=on]:from-teal-500 data-[state=on]:to-cyan-500",
                                "data-[state=on]:text-white data-[state=on]:shadow-lg data-[state=on]:shadow-teal-500/25",
                                "data-[state=on]:hover:from-teal-600 data-[state=on]:hover:to-cyan-600",
                                "data-[state=on]:scale-110 data-[state=on]:z-10"
                            )}
                        >
                            <Icon className="h-4 w-4" />
                        </ToggleGroupItem>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={12} className="py-2 leading-normal">
                        {label}
                    </TooltipContent>
                </Tooltip>
            ))}
        </ToggleGroup>
    )
}