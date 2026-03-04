"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

/**
 * A wrapper around Next.js Image that shows a styled fallback
 * placeholder instead of a broken-image icon when the source fails to load.
 */
export default function SafeImage({
  alt,
  fallbackText,
  className,
  ...props
}: ImageProps & { fallbackText?: string }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-secondary ${className ?? ""}`}
        style={{
          width: typeof props.width === "number" ? props.width : "100%",
          height: typeof props.height === "number" ? props.height : "100%",
          aspectRatio:
            props.fill
              ? undefined
              : typeof props.width === "number" && typeof props.height === "number"
                ? `${props.width}/${props.height}`
                : "16/9",
          ...(props.fill ? { position: "absolute", inset: 0 } : {}),
        }}
        role="img"
        aria-label={alt as string}
      >
        <span className="px-4 text-center text-sm font-medium text-muted-foreground">
          {fallbackText ?? alt}
        </span>
      </div>
    )
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}
