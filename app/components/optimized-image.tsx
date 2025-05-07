"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/project-placeholder.svg",
  className = "",
  ...props
}: OptimizedImageProps) {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

  // Only add basePath if we're on GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';

  // Add basePath to src and fallbackSrc if they are relative paths and we're on GitHub Pages
  const processedSrc = typeof src === 'string'
    ? (src.startsWith('/') && isGitHubPages
      ? `${basePath}${src}`
      : (!src.startsWith('http') && !src.startsWith('data:') && isGitHubPages
        ? `${basePath}/${src}`
        : src))
    : src;

  const processedFallbackSrc = fallbackSrc.startsWith('/') && isGitHubPages
    ? `${basePath}${fallbackSrc}`
    : (!fallbackSrc.startsWith('http') && !fallbackSrc.startsWith('data:') && isGitHubPages
      ? `${basePath}/${fallbackSrc}`
      : fallbackSrc);

  const [imgSrc, setImgSrc] = useState(processedSrc);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={`${className} ${hasError ? "placeholder-image" : ""}`}
      onError={() => {
        setImgSrc(processedFallbackSrc);
        setHasError(true);
      }}
      priority
      loading="eager"
    />
  );
}
