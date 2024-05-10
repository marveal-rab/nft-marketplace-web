"use client";

import { usePathname } from "next/navigation";

export default function Pathname({
  profile,
  settings,
}: {
  profile: React.ReactNode;
  settings: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSettingsPath = pathname === "/account/settings";

  return <>{isSettingsPath ? settings : profile}</>;
}
