import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import BlurImage from "../shared/blur-image";
import { getBlurDataURL } from "@/lib/utils";

export default async function MDXPage() {
  const mdxPath = path.join(process.cwd(), "public/content/story.mdx");
  const mdxText = await fs.readFile(mdxPath, "utf8");

  return (
    <> 
      <div className="dark:bg-white/4 mx-auto flex justify-center bg-white px-4 py-20">
        <div className="md:items-top xs:items-center flex flex-col items-start gap-6 md:max-w-3xl md:flex-row">
          <BlurImage
            src="/_static/avatars/balaji.png"
            alt="Balaji"
            width={100}
            height={100}
            priority
            placeholder="blur"
            blurDataURL={await getBlurDataURL("/_static/avatars/balaji.png")}
            className="size-32 rounded-md transition-all group-hover:brightness-90"
          />
          {/* MDX Content Section */}
          <div className="flex-1">
            <div className="prose max-w-none">
              <MDXRemote source={mdxText} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
