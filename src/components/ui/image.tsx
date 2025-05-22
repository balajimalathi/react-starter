import { useEffect, useState } from "react";
import { useAuth } from "react-oidc-context";

type ImageProps = {
  src: string; // e.g. "/brand/img.png"
  alt?: string;
  className?: string; 
};

export function Image({ src, alt = "", className }: ImageProps) {
  const auth = useAuth(); // must expose token from your auth context
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!auth.user?.access_token || !src) return;

      const fullUrl = `${import.meta.env.VITE_API_URL}/v1/static${src}`;
      try {
        const res = await fetch(fullUrl, {
          headers: {
            Authorization: `Bearer ${auth.user?.access_token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch image");

        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        setImageSrc(blobUrl);
      } catch (err) {
        console.error("AuthImage load failed:", err);
        setImageSrc("/placeholder.svg")
      }
    };

    fetchImage();

    // Cleanup blob URL when component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [auth.user?.access_token, src]);

  if (!imageSrc) {
    return <div className={className}>Loading image...</div>; // or a spinner
  }

  return <img src={imageSrc} alt={alt} className={className} />;
}
