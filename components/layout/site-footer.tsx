import * as React from "react";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#f4ede8] font-urban text-sm ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between pt-8">
          <div className="mb-6 w-full lg:mb-0 lg:w-auto">
            <p className="font-medium text-gray-900">KONTAKT:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Kundeservice: 48 100 748</li>
              <li>Vakttelefon: 975 30 006</li>
              <li>Email: kontakt@bonord.no</li>
            </ul>
          </div>

          <div className="mb-6 w-full lg:mb-0 lg:w-auto">
            <p className="font-medium text-gray-900">POSTADRESSE:</p>
            <p className="text-muted-foreground">Bonord AS</p>
            <p className="text-muted-foreground">Sjøgata 18</p>
            <p className="text-muted-foreground">8006 Bodø</p>
          </div>

          <div className="mb-6 w-full lg:mb-0 lg:w-auto">
            <p className="font-medium text-gray-900">FØLG OSS:</p>
            <p className="text-muted-foreground">Facebook</p>
            <p className="text-muted-foreground">Instagram</p>
            <p className="text-muted-foreground">Linkedin</p>
          </div>

          {/* Membership logos here */}
          <div className="flex w-full justify-end space-x-4 lg:w-auto">
            {/* Replace with actual logos */}
            <img
              src="/images/norskeiendom.png"
              alt="Norsk Eiendom"
              className="h-24"
            />
            <img
              src="/images/miljofyr.png"
              alt="Miljøfyrtårn"
              className="h-24"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-500">
            &copy; {currentYear}. Design og utvikling CodeNord
          </p>
          <p className="text-gray-500">Personvern og informasjonskapsler</p>
        </div>
      </div>
    </footer>
  );
}
