
import { LandingPageData } from "@/types/landing-page";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";

interface TemplatePreviewProps {
  template: string;
  data: LandingPageData;
  isPlaceholder?: boolean;
  fullscreen?: boolean;
}

const TemplatePreview = ({ template, data, isPlaceholder = false, fullscreen = false }: TemplatePreviewProps) => {
  return (
    <div className={`relative border rounded-lg overflow-hidden ${isPlaceholder ? "opacity-70" : ""} ${fullscreen ? "" : "h-[600px]"}`}>
      <div className={`${fullscreen ? "" : "h-full overflow-y-auto"}`}>
        {template === "template1" ? (
          <Template1 data={data} isPlaceholder={isPlaceholder} />
        ) : (
          <Template2 data={data} isPlaceholder={isPlaceholder} />
        )}
      </div>
      
      {isPlaceholder && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg">
          <p className="text-sm font-medium text-muted-foreground bg-background/90 px-3 py-2 rounded select-none">
            Preview - Fill the form to generate
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;

