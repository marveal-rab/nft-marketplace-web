import Tabs, { Tab } from "./components/tabs";

const tabs: Tab[] = [
  {
    name: "all",
    title: "All",
    href: `/account/deals/all`,
  },
  {
    name: "active",
    title: "Active",
    href: `/account/deals/active`,
  },
  {
    name: "accepted",
    title: "Accepted",
    href: `/account/deals/accepted`,
  },
  {
    name: "calcelled",
    title: "Cancelled",
    href: `/account/deals/calcelled`,
  },
  {
    name: "inactive",
    title: "Inactive",
    href: `/account/deals/inactive`,
  },
  {
    name: "expired",
    title: "Expired",
    href: `/account/deals/expired`,
  },
];

export default function AccountDealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full gap-6 mt-4 sticky top-40">
      <Tabs className="w-80" tabs={tabs} />
      {children}
    </div>
  );
}
