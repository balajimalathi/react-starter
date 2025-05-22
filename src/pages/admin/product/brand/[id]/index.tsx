import { useParams } from "react-router-dom"
import BrandForm from "../_components/brand-form"
import { useBrandApi } from "../brand.service";
import { IBrand } from "@/schema/brand";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import FormCardSkeleton from "@/components/ui/form-card-skeleton";
import { useAuth } from "react-oidc-context";


async function getBlob(url: string, fileName: string, mimeType: string, token: string): Promise<File> {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error('Image fetch failed')
  }

  const blob = await res.blob()
  const file = new File([blob], fileName, { type: mimeType })
  const preview = URL.createObjectURL(file)
  return Object.assign(file, { preview })
}


export function Component() {
  const { id } = useParams()
  const brandApi = useBrandApi()

  const auth = useAuth()

  const [data, setData] = useState<IBrand | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id || id === 'new') {
      setLoading(false)
      return
    }

    brandApi.getBrandById(id)
      .then(async (res) => {
        const brand = res.data

        // Preload image file if available
        if (brand.image?.fileUrl && brand.image.originalFileName) {
          try {
            const file = await getBlob(
              `${import.meta.env.VITE_API_URL}/v1/static${brand.image.fileUrl}`,
              brand.image.originalFileName,
              'image/png', // Adjust if needed
              auth.user?.access_token ?? ''
            )
            setData({ ...brand, image: [file] }) // convert to array for zod schema
          } catch (e) {
            console.warn('Image preload failed:', e)
            setData({ ...brand, image: [] })
          }
        } else {
          setData({ ...brand, image: [] })
        }
      })
      .catch(() => toast.error("Brand not found, please create instead"))
      .finally(() => setLoading(false))

  }, [id])

  if (loading) return <FormCardSkeleton />

  return <BrandForm initialData={data} />
}
