export default function PageWrapper({ children }) {
  return (
    <div className="pt-2 pb-10">  
      {/* pt-24 ensures every page starts below header */}
      {children}
    </div>
  );
}
