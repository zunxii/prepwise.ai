// components/ui/ButtonWithLoader.tsx
"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ButtonWithLoaderProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonWithLoader = ({ href, children, className }: ButtonWithLoaderProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    startTransition(() => {
      window.location.href = href;
    });
  };

  return (
    <Button
      asChild
      disabled={isPending}
      className={className || "btn-primary max-sm:w-full flex items-center gap-2"}
    >
      <Link href={href} onClick={handleClick}>
        {isPending ? "Loading..." : children}
      </Link>
    </Button>
  );
};

export default ButtonWithLoader;
