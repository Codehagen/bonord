import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { Skeleton } from "@/components/ui/skeleton";
import { PricingCards } from "@/components/pricing-cards";
import { PricingFaq } from "@/components/pricing-faq";

// export const metadata = {
//   title: "Propwrite Pricing - Tailored Plans for Your Real Estate Needs",
//   description:
//     "Explore competitive pricing plans for Propwrite. Find the perfect package to boost your real estate listings with AI",
// };

export default async function PricingPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      {/* <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} /> */}
      <hr className="container" />
      <PricingFaq />
    </div>
  );
}
