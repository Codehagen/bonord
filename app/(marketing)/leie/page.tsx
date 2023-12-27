import Image from "next/image";

import { SelectSeparator } from "@/components/ui/select";
import { PricingFaq } from "@/components/pricing-faq";

export default function PropertyPage() {
  return (
    <div>
      {/* Top image */}
      <div className="relative h-60 w-full">
        <Image
          src="/images/iparken-2.png" // Replace with your image path
          layout="fill"
          objectFit="cover"
          alt="Property View"
        />
      </div>

      {/* Page Content */}
      <div className="container mx-auto my-8 px-4">
        {/* Property Description and Details */}
        <div className="mb-8">
          <h2 className="font-urban text-4xl  font-extrabold tracking-tight text-green-700">
            iParken
          </h2>
          <p className="text-xl text-gray-600">
            Ditt nye hjem i hjertet av Rønvika
          </p>
        </div>

        <SelectSeparator className="mb-8" />

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Property Description Column */}
          <div className="md:w-2/3">
            <h2 className="mb-4 text-2xl font-semibold">iParken</h2>
            <p className="mb-4">
              iParken ligger i Rønvika, og består av 2- og 3-romsleiligheter.
              Leilighetene ligger i flotte landlige omgivelser med kort reisevei
              og gode bussforbindelser
            </p>
            <h3 className="mb-4 text-xl font-semibold">Om prosjektet</h3>
            <p className="mb-4">
              Leilighetene er fordelt i en blokk, som totalt utgjør 30
              utleieleiligheter. Disse er ferdigstilt i 2024. Blokkene har en
              miks av 2- og 3-roms leiligheter hvor alle har egen sportsbod på
              minimum 5 kvm. Leilighetene har gjennomtenkte og praktiske
              planløsninger. Det er lagt vekt på at balkonger og terrasser skal
              være store nok og ha riktig utsiktsvinkel. Det er mulig å leie
              parkeringsplass i felles garasjeanlegg, ta kontakt med oss dersom
              dette er ønskelig.
            </p>
            <h3 className="mb-4 text-xl font-semibold">Beliggenhet</h3>
            <p className="mb-4">
              Rønvika er bydelen som gir deg en smakebit på alt det gode Bodø
              har å tilby. iParken bygges på tomta til gamle Kirkhaugen skole
              midt i attraktive Rønvika. En bydel nær sentrum, men samtididg
              tilbaketrukket og uten stor trafikk. Gangavstand til butikker,
              treningssenter, skole og kirke. Idrettsanleggene i Stordalen et
              par solide langpasninger unna. Turstiene i Bodømarka 200 meter fra
              ytterdøra. Og hele byen når du på ti minutter med sykkel på flate
              veier.
            </p>
            <h3 className="mb-4 text-xl font-semibold">Utforming</h3>
            <p className="mb-4">
              Det er lagt vekt på et moderne uttrykk, høy standard og smarte
              løsninger i prosjektet. Med store vindusflater og lyse farger på
              vegger vil leilighetene framstå lys og trivelig uansett årstid.
              Kjøkken har lyse høyglans fronter og integrerte hvitevarer fra
              Bosch. Vindfang og bad er flislagt med varmekabler. Du trenger
              ikke å tenke på garderobeløsning eller solskjerming, dette har vi
              ordnet før du flytter inn.
            </p>
            <h3 className="mb-4 text-xl font-semibold">Miljø</h3>
            <p className="mb-4">
              I iParken finner du flotte lekeog utearealer som lar deg bo i en
              av byens triveligste nabolag i nedre Rønvik. Trygge omgivelser for
              store og små med både to og fire ben. Vår grønne boligstandard
              innebærer arealeffektive boliger, med gjenbruk av betong fra
              riving, fasader med tre kledning, samt vannbåren oppvarming med
              solenergi og varmepumper. I kombinasjon med nærhet til
              kollektivtransport, vil du kunne bo i en grønn lunge med et lavere
              CO2-avtrykk enn en ordinær bolig.
            </p>
            <h3 className="mb-4 text-xl font-semibold">Leilighetsmiks</h3>
            <p className="mb-4">
              2-roms: 9 leiligheter fra 34 til 50 kvm
              <br />
              3-roms: 19 leiligheter fra 50 til 80 kvm
              <br />
              Ta kontakt med oss for å finne den leiligheten som passer best for
              deg!
            </p>
          </div>

          {/* Property Details Column */}
          <div className="bg-[#f4ede8] p-6 md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold">Detaljer</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Leiligheter:</span> 30
              </li>
              <li>
                <span className="font-semibold">Adresse:</span> Lagårdveien 42C
              </li>
              <li>
                <span className="font-semibold">Byggeår:</span> 2024
              </li>
              <li>
                <span className="font-semibold">Parkeringsplasser:</span> 22
              </li>
              <li>
                <span className="font-semibold">Etasjer:</span> 4
              </li>
              <li>
                <span className="font-semibold">Standard:</span>
              </li>
              <ul className="list-inside list-disc">
                <li>Parkett</li>
                <li>Slette lyse vegger, 1 mørk kontrastvegg</li>
                <li>Integrerte hvitevarer</li>
                <li>Flislagt gang og bad</li>
              </ul>
              <li>
                <span className="font-semibold">Bussforbindelse:</span> 3
                minutters gange til bussholdeplass, Rute 1
              </li>
              <li>
                <span className="font-semibold">Sentrum:</span> 5,8 km
              </li>
              <li>
                <span className="font-semibold">Universitet i Bodø:</span> 11 km
              </li>
              <li>
                <span className="font-semibold">Dagligvarebutikk:</span> Rema
                1000 1 km
              </li>
              <li>
                <span className="font-semibold">Treningssenter:</span> Feel 24 1
                km
              </li>
            </ul>
          </div>
        </div>

        {/* FAQs or additional sections */}
        {/* <PricingFaq /> */}
      </div>
    </div>
  );
}
