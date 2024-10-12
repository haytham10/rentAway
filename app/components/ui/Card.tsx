import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  "rounded-lg shadow-md overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white",
        colored: "bg-amber-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = ({ className, variant, ...props }: CardProps) => {
  return (
    <div
      className={cardVariants({ variant, className })}
      {...props}
    />
  )
}