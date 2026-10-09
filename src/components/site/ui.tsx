import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "press inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-transform duration-150 ease-out motion-reduce:transition-none motion-reduce:active:scale-100 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce disabled:opacity-50",
  {
    variants: {
      tone: {
        spruce: "bg-spruce text-paper hover:bg-spruce-deep",
        copper: "bg-copper text-paper hover:bg-copper-deep",
        ghost: "border border-line bg-transparent text-ink hover:bg-card",
        paper: "bg-paper text-ink hover:bg-card",
      },
    },
    defaultVariants: { tone: "spruce" },
  },
);

type Tone = VariantProps<typeof buttonStyles>["tone"];

export function Button({
  tone,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & { tone?: Tone }) {
  return <button type={type} className={cn(buttonStyles({ tone }), className)} {...props} />;
}

export function ButtonLink({
  tone,
  className,
  ...props
}: ComponentProps<typeof Link> & { tone?: Tone }) {
  return <Link className={cn(buttonStyles({ tone }), className)} {...props} />;
}
