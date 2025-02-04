import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h2>
    );
  }
);

H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h4>
    );
  }
);

H4.displayName = "H4";

export const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);

P.displayName = "P";

export const Blockquote = React.forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        ref={ref}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);

Blockquote.displayName = "Blockquote";
