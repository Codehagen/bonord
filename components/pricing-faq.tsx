import Balancer from "react-wrap-balancer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqData = [
  // ... eksisterende items
  {
    id: "item-1",
    question: "Hva gjør jeg hvis jeg har mistet husnøkkelen?",
    answer:
      "Dersom det er innenfor åpningstidene våre kan du komme innom å hente ny. Du må selv betale prisen det koster å produsere ny nøkkel. Utenom ordinær åpningstid kan du ringe vår vakttelefon. (NB! utrykning vil utløse gebyr som dekkes av leietaker)",
  },
  {
    id: "item-2",
    question: "Er strøm inkludert i husleien?",
    answer: "Nei, strøm er ikke inkludert i husleien.",
  },
  {
    id: "item-3",
    question: "Er internett inkludert i husleien?",
    answer: "Ja, internett er inkludert i husleien.",
  },
  {
    id: "item-4",
    question: "Hvilken krav har dere til depositum?",
    answer: "I våre leieforhold krever vi 3 måneders husleie i depositum.",
  },
  {
    id: "item-5",
    question: "Er det mulig å leie parkering?",
    answer:
      "Vi har parkeringsplasser tilknyttet alle våre bygg. Ta kontakt med oss for tilgjengelighet og leie av disse.",
  },
  {
    id: "item-6",
    question: "Er oppvarming inkludert i husleie?",
    answer:
      "Nei, oppvarming er ikke inkludert i husleien. Det blir fakturert som et fast beløp pr. mnd med avregning en gang i året.",
  },
  {
    id: "item-7",
    question: "Er det lov med husdyr?",
    answer:
      "Ja, husdyr er tillatt. For å ha husdyr må det signeres en egen leiekontrakt med en tilhørende erklæring for dyreholdet.",
  },
  // ... eventuelle ytterligere items
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h1 className="text-center font-heading text-3xl text-green-700 md:text-5xl">
          <Balancer>Ofte stilte spørsmål</Balancer>
        </h1>
        <p className="text-md text-muted-foreground">
          <Balancer>
            Explore our comprehensive FAQ to find quick answers to common
            inquiries. If you need further assistance, don&apos;t hesitate to
            contact us for personalized help.
          </Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent>{faqItem.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
