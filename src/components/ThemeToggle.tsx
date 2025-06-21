import { Moon, Sun, Laptop } from "lucide-react"

import { useTheme } from "@/components/ThemeProvider"
import type { Theme } from "@/components/ThemeProvider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

const themes: { value: Theme; icon: React.ElementType; label: string }[] = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Laptop, label: "System" },
]

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <ToggleGroup
            type="single"
            variant="outline"
            value={theme}
            onValueChange={val => val && setTheme(val as Theme)}
            className="gap-0"
        >
            {themes.map(({ value, icon: Icon, label }, idx) => (
                <Tooltip key={value}>
                    <TooltipTrigger asChild>
                        <ToggleGroupItem
                            value={value}
                            aria-label={label}
                            className={`min-w-14
                                ${idx === 0 ? '!rounded-s-full' : ''}
                                ${idx === themes.length - 1 ? '!rounded-e-full' : ''}
                                ${theme === value ? 'bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground' : ''}`}
                        >
                            <Icon className="h-[1.2rem] w-[1.2rem]" />
                        </ToggleGroupItem>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={8} className="py-2 leading-normal">
                        {label}
                    </TooltipContent>
                </Tooltip>
            ))}
        </ToggleGroup>
    )
}