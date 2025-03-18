
import React from 'react';
import { cn } from "@/lib/utils";
import { Button as ShadcnButton } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'primary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  to?: string;
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", size = "default", to, className, ...props }, ref) => {
    
    const buttonClasses = cn(
      "relative overflow-hidden group transition-all duration-300",
      variant === "primary" && "bg-accent text-accent-foreground hover:bg-accent/90",
      className
    );

    if (to) {
      return (
        <ShadcnButton
          asChild
          variant={variant === "primary" ? "default" : variant}
          size={size}
          className={buttonClasses}
          {...props}
        >
          <Link to={to}>
            {children}
            <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        </ShadcnButton>
      );
    }

    return (
      <ShadcnButton
        ref={ref}
        variant={variant === "primary" ? "default" : variant}
        size={size}
        className={buttonClasses}
        {...props}
      >
        {children}
        <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
