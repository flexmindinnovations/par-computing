import { useEffect } from 'react';

interface PageMetadataProps {
  title: string;
  faviconHref: string;
}

export default function PageMetadata({ title, faviconHref }: PageMetadataProps) {
  useEffect(() => {
    document.title = title;

    const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (link) {
      link.href = faviconHref;
    }
  }, [title, faviconHref]);

  return null;
} 