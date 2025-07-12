import Footer from "@/components/project/Footer";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="max-w-7xl mx-auto p-8 mt-10">
        {children}
      </div>
      <Footer />
    </>
  );
}