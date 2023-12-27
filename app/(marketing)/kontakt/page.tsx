import { Suspense } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function IndexPage() {
  return (
    <>
      <section className="pb-6 pt-16 lg:pb-8 lg:pt-28">
        <div className="container flex  flex-col items-center gap-5 text-center">
          <h1 className="font-urban text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>Kontakt</Balancer>
          </h1>

          <div className="">
            <p className="text-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              <Balancer>
                Kundeservice sine åpningstider er mandag til fredag, kl. 09.00 –
                kl. 15.00.
              </Balancer>
            </p>

            <p className="mt-2 text-xl font-semibold">
              <Balancer>
                Kundeservice:{" "}
                <span className="text-xl" style={{ color: "#852E1C" }}>
                  48 100 748
                </span>
              </Balancer>
            </p>
          </div>
          <div className="">
            <p className="text-xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              <Balancer>
                Vakttelefon er åpen utenom ordinære åpningstider og brukes ved
                nødstilfelle. Som nødstilfelle regnes vannlekkasjer, lås- og
                nøkkelproblemer. Ved utrykninger som følge av situasjoner der
                leietaker selv er ansvarlig, vil det påløpe en kostnad.
              </Balancer>
            </p>
            <p className="mt-2 text-xl font-semibold">
              <Balancer>
                Vakttelefon:{" "}
                <span className="text-xl" style={{ color: "#852E1C" }}>
                  48 100 748
                </span>
              </Balancer>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
