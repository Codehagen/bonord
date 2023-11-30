import Image from "next/image";

import { PricingFaq } from "@/components/pricing-faq";

export default function PropertyPage() {
  return (
    <div>
      {/* Top image */}
      <div className="relative h-60 w-full">
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          layout="fill"
          objectFit="cover"
          alt="Property View"
        />
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-8">
        <hr className="container pb-6" />

        {/* Property Description and Details */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Property Description Column */}
          <div className="flex-1">
            <h2>Åsen</h2>
            <p>
              Åsen ligger på Midtre Kaldslett i Tromsdalen, og består av 2- og
              3-romsleiligheter. ...
            </p>
            {/* ... more content ... */}
          </div>

          {/* Property Details Column */}
          <div className="flex-1 bg-gray-100 p-4">
            <h3>Detaljer</h3>
            <ul>
              <li>LEILIGHETER: 30</li>
              <li>ADRESSE: Nordmannsgårdsvægen 1-3</li>
              {/* ... more details ... */}
            </ul>
          </div>
        </div>

        {/* FAQs or additional sections */}
        <PricingFaq />
      </div>
    </div>
  );
}
