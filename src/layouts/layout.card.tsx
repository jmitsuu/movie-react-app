export default function LayoutCard({ children }: { children: React.ReactNode }) {
 return (
  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-5">
   {children}
  </div>
 );
}
