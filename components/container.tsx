
import { twMerge } from "tailwind-merge"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({
  children,
  className
}: ContainerProps) => {
  return (
    <div className={twMerge("max-w-8xl mx-auto px-8", className)}>
      {children}
    </div>
  )
}

export default Container;