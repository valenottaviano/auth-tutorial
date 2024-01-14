export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-slate-100">
      {children}
    </div>
  );
}
