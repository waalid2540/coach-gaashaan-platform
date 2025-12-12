import { HTMLAttributes, forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "", name = "", size = "md", ...props }, ref) => {
    const sizes = {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-16 w-16 text-xl",
    };

    const imageSizes = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 64,
    };

    // Get initials from name
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    // Generate consistent color from name
    const colors = [
      "bg-primary-500",
      "bg-accent-500",
      "bg-success-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
    ];
    const colorIndex = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const bgColor = colors[colorIndex % colors.length];

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full overflow-hidden",
          sizes[size],
          !src && bgColor,
          className
        )}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || name}
            width={imageSizes[size]}
            height={imageSizes[size]}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="font-medium text-white">{initials || "?"}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
