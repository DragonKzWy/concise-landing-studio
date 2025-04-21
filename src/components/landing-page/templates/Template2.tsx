
import { TemplateProps } from "@/types/landing-page";

const Template2 = ({ data }: TemplateProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  
  return (
    <div className="min-h-full">
      {/* Header */}
      <header className="bg-primary text-white p-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          {data.title || "Property Title"}
        </h1>
        <p className="mt-2 text-primary-foreground/80">
          {data.subtitle || "Property Subtitle"}
        </p>
      </header>
      
      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 md:p-8 grid md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div 
            className="aspect-square rounded-lg bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${data.featuredImage || defaultImage})` 
            }}
          ></div>
          
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="aspect-square rounded-md bg-muted bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${data.featuredImage || defaultImage})` 
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Right Column - Details */}
        <div className="space-y-6">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-3 border-b pb-2">Property Details</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {data.description || "No description provided."}
            </p>
          </div>
          
          {/* Property Specs */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Type", value: "Single Family Home" },
                  { label: "Year Built", value: "2018" },
                  { label: "Heating", value: "Central" },
                  { label: "Cooling", value: "Central A/C" },
                  { label: "Parking", value: "2 Car Garage" },
                  { label: "Lot Size", value: "0.25 Acres" },
                ].map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="p-2 border-b font-medium">{item.label}</td>
                    <td className="p-2 border-b text-muted-foreground">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Agent Box */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium">Listed By:</h3>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-semibold">
                {data.realtorName?.charAt(0) || "R"}
              </div>
              <div>
                <p className="font-medium">{data.realtorName || "Realtor Name"}</p>
                <p className="text-sm text-muted-foreground">{data.realtorEmail || "email@example.com"}</p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Schedule a Viewing
          </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary mt-8 py-4 px-6 text-center text-sm text-secondary-foreground">
        <p>© {new Date().getFullYear()} Intelligent Landing Page Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Template2;
