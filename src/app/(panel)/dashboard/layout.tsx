import { SidebarDasboard } from './_components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarDasboard>{children}</SidebarDasboard>
    </>
  );
}
