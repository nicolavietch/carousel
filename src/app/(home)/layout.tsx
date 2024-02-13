export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl">Proyecto de carrusel</h1>
      {children}
    </div>
  );
}
