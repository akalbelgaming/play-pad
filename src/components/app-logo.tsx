
import { cn } from "@/lib/utils";
import Image from 'next/image';

/**
 * A reusable component for the app logo.
 * It uses the Next.js Image component with explicit width and height for reliability.
 * The logo image file should be placed in the `public` folder.
 */
export function AppLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
        <Image
            src="/logo.png?v=2"
            alt="AlphaJoy Kids App Logo"
            width={120}
            height={120}
            className="object-contain h-full w-full rounded-full"
        />
    </div>
  );
}
