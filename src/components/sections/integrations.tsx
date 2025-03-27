import { HeaderSection } from "../shared/header-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { integrations } from "@/config/integration";
import { Plus, PlusCircle } from "lucide-react";
import { Label } from "../ui/label";
import Link from "next/link";

export default function Integrations() {
  return (
    <section className="bg-muted py-20 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderSection
          label="Integrations"
          title="Seamlessly Connect with Your Tools"
          subtitle="Sync with GitHub, Slack, Teams, and more to bring AI-powered code reviews directly into your workflow."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 xl:gap-4">
          {integrations.map((integration) => (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <integration.icon className="size-8" />
                    <CardTitle>{integration.name}</CardTitle>
                  </div>
                  <Badge variant={integration.valid ? "green" : "yellow"}>
                    {integration.valid ? "Ready" : "In progress"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{integration.description}</CardDescription>
              </CardContent>
            </Card>
          ))}


          <Link href={"https://insigh.to/b/repovox"} target="_blank">
            <div className="flex basis-1/4 flex-col items-center justify-center space-y-4 rounded-md border border-dashed border-green-600 bg-green-100 p-12 align-middle hover:bg-green-200 dark:bg-green-900">
              <PlusCircle />
              <p>Request integration</p>
            </div>
          </Link>
        </div>

        {/* <div className="mt-12 text-center">
          <a href="#" title="" className="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"> Check all 1,593 applications </a>
        </div> */}
      </div>
    </section>


  );
}
