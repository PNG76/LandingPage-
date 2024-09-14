To run this landing page in Visual Studio Code, you'll need to set up a Next.js project with the necessary dependencies. Here's a step-by-step guide:

1. First, make sure you have Node.js installed on your computer. You can download it from [https://nodejs.org/](https://nodejs.org/)
2. Open your terminal or command prompt and create a new Next.js project:


```shellscript
npx create-next-app@latest yeemail-agency
```

3. When prompted, choose the following options:

1. Would you like to use TypeScript? Yes
2. Would you like to use ESLint? Yes
3. Would you like to use Tailwind CSS? Yes
4. Would you like to use `src/` directory? Yes
5. Would you like to use App Router? Yes
6. Would you like to customize the default import alias? No



4. Once the project is created, navigate to the project folder:


```shellscript
cd yeemail-agency
```

5. Install additional required dependencies:


```shellscript
npm install @radix-ui/react-accordion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

6. Open the project in Visual Studio Code:


```shellscript
code .
```

7. In VS Code, create a new file in the `src/components/ui` folder named `button.tsx` and add the following code:


```typescriptreact
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

8. Create a new file in the `src/lib` folder named `utils.ts` and add the following code:


```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

9. Replace the content of `src/app/page.tsx` with the landing page code provided earlier.
10. Update your `src/app/globals.css` file to include the following Tailwind directives at the top:


```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

11. Run the development server:


```shellscript
npm run dev
```

12. Open your browser and navigate to `http://localhost:3000` to see your landing page.


Remember to replace placeholder images and adjust content as needed for your specific use case. Also, make sure to handle form submissions and integrate with your backend services as required for a fully functional website.
