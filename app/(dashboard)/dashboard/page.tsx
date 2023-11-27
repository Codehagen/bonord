import Link from "next/link";
import { redirect } from "next/navigation";
import { getUserCredits } from "@/actions/get-credits";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { AddPropertyButton } from "@/components/buttons/AddPropertyButton";
import { LanugageButton } from "@/components/buttons/LanguageButton";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import PropertiesTable from "@/components/properties/Propertiestable";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";
import { columns, Payment } from "@/components/table/dashboard/columns";
import { DataTable } from "@/components/table/dashboard/data-table";

export const metadata = {
  title: "Propwrite Dashboard - Your Properties Overview",
  description:
    "Easily access and manage all your listed properties. View property statuses, add new listings, and organize your real estate portfolio on the Propwrite Dashboard.",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userCredits = await getUserCredits();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login");
  }

  const properties = await prisma.property.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      address: true,
      createdAt: true,
      status: true,
      label: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Ensure userCredits.credits is defined, default to 0 if undefined
  const availableCredits = userCredits?.credits ?? 0;

  return (
    <DashboardShell>
      <DashboardHeader heading="Properties" text="See all your properties.">
        {userCredits.success && availableCredits > 0 ? (
          <AddPropertyButton />
        ) : (
          <Button disabled variant="outline">
            Add Credits to Add Properties
          </Button>
        )}
      </DashboardHeader>
      <div>
        {properties.length === 0 ? (
          // Render EmptyPlaceholder if there are no properties
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>
              No properties created
            </EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You dont have any properties yet.
            </EmptyPlaceholder.Description>
            {/* <Link href="/property" passHref className="mb-4">
              <Button variant="outline">Add your first property</Button>
            </Link> */}
            <LanugageButton userId={user.id} />
          </EmptyPlaceholder>
        ) : (
          // Render PropertiesTable if there are properties
          <DataTable columns={columns} data={properties} />
          // <PropertiesTable properties={properties} />
        )}
      </div>
    </DashboardShell>
  );
}
