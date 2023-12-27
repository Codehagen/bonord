import { Suspense } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-6 pt-16 lg:pb-8 lg:pt-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <h1 className="font-urban text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              Ditt trygge sted <span>i våre leieboliger</span>
            </Balancer>
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Hos Bonor er kjernen i vår service å tilby trygge utleieboliger
              som gir en følelse av stabilitet og forutsigbarhet. Vår filosofi
              omhandler å skape et bosted som leietakere kan stole på, uavhengig
              av livets oppturer og nedturer.
            </Balancer>
          </p>

          {/* <div className="flex justify-center space-x-2 md:space-x-4">
            <Button className="rounded-full bg-[#a68b6d]" size="lg">
              Leie bolig
            </Button>
          </div> */}
        </div>
      </section>

      <section className="space-y-6 pb-12 pt-6 lg:py-28 lg:pt-8">
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
                <img
                  alt="Happy couple"
                  className="h-auto w-full rounded-lg object-cover"
                  src="https://media.istockphoto.com/id/1368004438/photo/shot-of-a-couple-enjoying-a-day-at-the-beach.jpg?s=612x612&w=0&k=20&c=hMi6N-u6baFHC-P8C-8X_5iFshdPPicx7BCrBGM8ARc="
                  style={{ aspectRatio: "400/250" }}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto  px-4 text-left">
          <div className="flex flex-col items-center gap-5">
            <div className="md:w-2/3">
              <p className="mb-4 text-lg leading-normal text-muted-foreground">
                <Balancer>
                  {" "}
                  Vi er en profesjonell aktør innenfor boligutleie som ble
                  etablert i 2018. Til nå har vi ervervet 119 boliger til leie.
                  Når vi kjøper boliger er det med en intensjon; Boligene skal
                  aldri selges! Kombinert med tidsubestemte leiekontrakter
                  sikrer dette stor forutsigbarhet for våre leietakere som leier
                  bolig av oss. Alle våre prosjekter er i Tromsø og er
                  lokalisert nært sentrum eller på beliggenheter med gode
                  kollektivforbindelser.{" "}
                </Balancer>
              </p>
              <h2 className="mb-4 text-xl font-semibold">Kort om oss:</h2>

              <ul className="mb-8 list-disc pl-5 text-lg leading-normal text-muted-foreground">
                <li>Våre boliger skal kun leies ut, ikke selges.</li>
                <li>Dedikerte ansatte som følger opp våre kunder.</li>
                <li>
                  Kjøper kun hele blokker/oppganger og ikke enkeltleiligheter.
                </li>
                <li>Forvalter våre bygg selv.</li>
              </ul>
              <p className="mb-4 text-lg leading-normal text-muted-foreground">
                Våre ansatte jobber med å forvalte utleieboliger på en
                forsvarlig og god måte. Dette innebærer blant annet å drifte og
                vedlikeholde byggene, bistå kunder med problemer inne i
                leiligheten og være tilstede for kunden om noe uforutsett skulle
                skje. Mye av vår forvaltning gjøres ved hjelp av ny teknologi,
                noe som gjør at vi har mer tid til å bistå våre kunder utover
                det som står i leiekontrakten.
              </p>
              <p className="mb-4 text-lg leading-normal text-muted-foreground">
                I Bonor Bolig er vi svært opptatt av miljø og bærekraft.
                Eiendomsbransjen har dessverre et alt for stort klimaavtrykk og
                vi er avhengig av å ta i bruk nye løsninger for å få dette ned.
                Vi jobber kontinuerlig med å finne nye innovasjoner som kan få
                ned klimaavtrykket til våre boliger. Vi er sertifisert
                Miljøfyrtårnbedrift og har dermed forpliktet oss til å velge
                bærekraftige alternativ. Vårt klimaregnskap er tilgjengelig på
                forespørsel.
              </p>
              <p className="mb-4 text-lg leading-normal text-muted-foreground">
                Send epost til: kontakt@bonor.no.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
