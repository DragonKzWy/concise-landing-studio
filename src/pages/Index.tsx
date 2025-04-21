
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LandingPageForm from "@/components/landing-page/LandingPageForm";
import TemplatePreview from "@/components/landing-page/TemplatePreview";
import { LandingPageData } from "@/types/landing-page";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData | null>(null);
  const [activeTemplate, setActiveTemplate] = useState<string>("template1");

  const handleFormSubmit = (data: LandingPageData) => {
    setLandingPageData(data);
    toast({
      title: "Landing page created!",
      description: "Your landing page has been successfully generated.",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Intelligent Landing Page Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create professional landing pages for real estate listings in seconds. Fill out the form and choose a template to get started.
        </p>
      </header>
      
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="preview" disabled={!landingPageData}>Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create" className="mt-6">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
            <LandingPageForm onSubmit={handleFormSubmit} setActiveTemplate={setActiveTemplate} activeTemplate={activeTemplate} />
            <TemplatePreview 
              template={activeTemplate} 
              data={landingPageData || {
                title: "Sample Property Title",
                subtitle: "Exclusive Location",
                description: "This is a placeholder description for your property. Fill out the form to generate your custom landing page.",
                realtorName: "Jane Realtor",
                realtorEmail: "jane@example.com"
              }} 
              isPlaceholder={!landingPageData}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="mt-6">
          {landingPageData && (
            <div className="border rounded-lg overflow-hidden shadow-md">
              <TemplatePreview 
                template={activeTemplate} 
                data={landingPageData} 
                isPlaceholder={false}
                fullscreen
              />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
