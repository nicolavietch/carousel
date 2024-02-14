export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col w-full p-2 gap-8">
      <h1 className="text-4xl text-center font-bold">Proyecto de carrusel</h1>
      {children}
    </div>
  );
}
