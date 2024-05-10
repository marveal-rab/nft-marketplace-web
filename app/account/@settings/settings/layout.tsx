interface AccountSettingsLayoutProps {
  children: React.ReactNode;
}

export default function AccountSettingsLayout(
  props: AccountSettingsLayoutProps
) {
  const { children } = props;

  return <div className="mx-2">{children}</div>;
}
