import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { GetStartedButton } from "@/components/buttons/GetStartedButton";
import { BusinessLine } from "@/components/dashboard/businessline";
import CallToActionComponent from "@/components/dashboard/calltoaction";
import FeatureSection1 from "@/components/dashboard/featuresection1";
import Featuressection from "@/components/dashboard/feautressection";
import { Icons } from "@/components/shared/icons";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <h1
            className="animate-fade-up font-urban text-4xl font-extrabold tracking-tight text-green-700 opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Vi skaper trygge hjem{" "}
              <span className="">for deg som vil leie bolig</span>
            </Balancer>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Kvalitet og standard behøver ikke være dårligere for den som leier
              bolig enn for den som eier. Opplev forskjellen med Bonor.
            </Balancer>
          </p>

          <Link href="/kontakt" passHref>
            <div
              className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <Button className="rounded-full bg-[#a68b6d] " size="lg">
                Leie bolig
              </Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Image section */}
      <div className="my-4 flex justify-center">
        <Image
          src="/images/iparken-2.png" // Replace with your image path
          width={1418} // Replace with the actual image width
          height={768} // Replace with the actual image height
          alt="Descriptive Text"
          className="rounded-lg" // This will apply rounded corners
        />
      </div>

      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <Link href="/faq">
            <h1
              className="animate-fade-up cursor-pointer font-urban text-4xl font-extrabold tracking-tight text-green-700 opacity-0 transition-colors duration-300 hover:text-[#D69647] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <Balancer>Eget fordelsprogram for våre kunder</Balancer>
            </h1>
          </Link>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Med Bonor Fordel får du som kunde hos oss rabatter og fordeler hos
              flere aktøre
            </Balancer>
          </p>
        </div>
      </section>

      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 items-center gap-8 rounded-lg bg-[#f4ede8] p-8 shadow-lg">
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-center font-urban text-4xl font-bold">
                <Balancer>Fem gode grunner til å leie bolig hos oss</Balancer>
              </h2>
              <p className="text-center text-lg leading-normal text-muted-foreground">
                <Balancer>
                  Det er mange fordeler med å leie bolig. Et leieforhold gir
                  fleksibilitet og du som leietaker har mindre ansvar og
                  uforutsette utgifter. Vi i Bonor Bolig spesialiserer oss på
                  gode leieforhold. Her er fem grunner til å velge oss.
                </Balancer>
              </p>
            </div>
            <Suspense fallback="...">
              <div className="flex justify-center">
                <Image
                  src="/images/happy2.png"
                  width={1365} // Replace with the actual image width
                  height={768} // Replace with the actual image height
                  alt="Happy couple" // Replace with your alt text
                  className="rounded-lg object-cover"
                  layout="responsive"
                />
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* <BusinessLine />
      <section>
        <Featuressection />
      </section>
      <section>
        <CallToActionComponent />
      </section> */}
      {/* <section>
        <FeatureSection1 />
      </section> */}
    </>
  );
}
