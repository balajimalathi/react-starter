import { toast } from "sonner"

interface CopyToClipboardOptions {
  text: string
  info?: string
}
export function setClipboardText({ text, info }: CopyToClipboardOptions) {
  if (!navigator.clipboard) {
    toast("Clipboard API not available")
    throw new Error("Clipboard API not available")
  }
  if (!text) {
    toast("Text is empty")
    throw new Error("Text is empty")
  }
  navigator.clipboard.writeText(text)
  toast(`${info ?? ""} copied to clipboard`)
}
