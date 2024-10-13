import React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

// Define button variants using cva
const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				primary: "bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-400 hover:to-blue-600",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-9 px-3 rounded-md",
				lg: "h-11 px-8 rounded-md",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	}
)

// Base props for all button variants
type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string
}

// Props for button as a <button> element
type ButtonAsButtonProps = ButtonBaseProps & 
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

// Props for button as an <a> element with `href`
type ButtonAsLinkProps = ButtonBaseProps & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

// Union type for button props
type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, href, ...props }, ref) => {
  const Comp = href ? Link : "button";

  return href ? (
    <Link
      href={href}
      className={buttonVariants({ variant, size, className })}
      ref={ref as React.Ref<HTMLAnchorElement>}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    />
  ) : (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});

Button.displayName = "Button";
