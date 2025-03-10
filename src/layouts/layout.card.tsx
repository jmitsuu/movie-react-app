export default function LayoutCard({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <div className="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col items-center justify-center gap-x-4 gap-y-5 my-20">
   {children}
  </div>
 );
}
