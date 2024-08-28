export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        {/* left */}
        <div className="w-1/6">left</div>
        {/* right */}
        <div className="w-5/6 ">right</div>
      </div>
    );
  }