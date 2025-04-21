
import { TemplateProps } from "@/types/landing-page";

const Template1 = ({ data }: TemplateProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${data.featuredImage || defaultImage})` 
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {data.title || "Property Title"}
          </h1>
          <p className="text-xl text-white/90">
            {data.subtitle || "Property Subtitle"}
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex-1 p-6 md:p-8 max-w-4xl mx-auto w-full">
        <div className="prose prose-lg max-w-none mb-8">
          <h2 className="text-2xl font-semibold mb-4">About This Property</h2>
          <p className="text-muted-foreground whitespace-pre-line">
            {data.description || "No description provided."}
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {["4 Bedrooms", "3 Bathrooms", "2 Garage", "2,400 sq ft"].map((feature, i) => (
            <div key={i} className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="font-medium">{feature}</p>
            </div>
          ))}
        </div>
        
        {/* Realtor Info */}
        <div className="border-t pt-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold">
              {data.realtorName?.charAt(0) || "R"}
            </div>
            <div>
              <h3 className="text-lg font-medium">{data.realtorName || "Realtor Name"}</h3>
              <p className="text-muted-foreground">{data.realtorEmail || "email@example.com"}</p>
              <button className="mt-2 text-sm font-medium text-primary hover:underline">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-muted/30 py-4 px-6 text-center text-sm text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} Intelligent Landing Page Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Template1;
