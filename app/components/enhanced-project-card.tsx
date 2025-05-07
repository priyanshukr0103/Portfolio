"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import OptimizedImage from "./optimized-image";
import Link from "next/link";

// Simplified props for easier editing
interface EnhancedProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; // URL for the project image
  link: string;
  tags: string[];
}

export default function EnhancedProjectCard({
  title,
  description,
  imageUrl,
  link,
  tags
}: EnhancedProjectCardProps) {
  return (
    <div className="transition-all duration-300 hover:-translate-y-2 h-full">
      <Card className="overflow-hidden h-full flex flex-col border border-primary/10 dark:border-primary/5 shadow-lg">
        <div className="relative aspect-video">
          {/* Image with fallback */}
          <OptimizedImage
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
            fallbackSrc="/images/project-placeholder.svg"
            priority
          />
        </div>
        <CardContent className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl text-center">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 text-center">{description}</p>
          </div>
          <div className="mt-auto pt-2">
            <div className="flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ring-gray-500/10 hover:bg-muted/80 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-center border-t border-primary/5 mt-auto">
          <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
