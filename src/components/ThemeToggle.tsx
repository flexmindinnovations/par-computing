import { Moon, Sun, Laptop } from "lucide-react"

import { useTheme } from "@/components/ThemeProvider"
import type { Theme } from "@/components/ThemeProvider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
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
            className="gap-0 bg-[var(--glassmorphism)]/80 backdrop-blur-md border border-[var(--glassmorphism-border)] rounded-full p-1 shadow-lg"
        >            {themes.map(({ value, icon: Icon, label }) => (
                <ToggleGroupItem
                    key={value}
                    value={value}
                    aria-label={label}
                    title={label}
                    className={cn(
                        "min-w-12 h-10 rounded-full transition-all duration-200",
                        "hover:bg-[var(--glassmorphism)]/80 hover:scale-105",
                        "border-0 shadow-none !rounded-full !border-none",
                        // Default state
                        theme !== value && "text-[var(--foreground)]/70 hover:text-[var(--foreground)]",
                        // Active state
                        theme === value && [
                            "bg-gradient-to-r from-teal-500 to-cyan-500",
                            "text-white shadow-lg shadow-teal-500/25",
                            "scale-110 z-10",
                            "hover:from-teal-600 hover:to-cyan-600"
                        ],
                        // Data attribute fallbacks
                        "data-[state=on]:bg-gradient-to-r data-[state=on]:from-teal-500 data-[state=on]:to-cyan-500",
                        "data-[state=on]:text-white data-[state=on]:shadow-lg data-[state=on]:shadow-teal-500/25",
                        "data-[state=on]:hover:from-teal-600 data-[state=on]:hover:to-cyan-600",
                        "data-[state=on]:scale-110 data-[state=on]:z-10"
                    )}
                >
                    <Icon className="h-4 w-4" />
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}