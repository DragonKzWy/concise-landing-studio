
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface TemplateSelectorProps {
  activeTemplate: string;
  onSelectTemplate: (template: string) => void;
}

const TemplateSelector = ({ activeTemplate, onSelectTemplate }: TemplateSelectorProps) => {
  return (
    <RadioGroup
      value={activeTemplate}
      onValueChange={onSelectTemplate}
      className="grid grid-cols-2 gap-4"
    >
      <div>
        <RadioGroupItem
          value="template1"
          id="template1"
          className="sr-only"
        />
        <Label
          htmlFor="template1"
          className="cursor-pointer"
        >
          <Card className={`overflow-hidden ${activeTemplate === "template1" ? "ring-2 ring-primary" : ""}`}>
            <CardContent className="p-2">
              <div className="aspect-video bg-muted rounded-sm flex flex-col items-center justify-center text-xs p-2">
                <div className="w-full h-1/3 bg-primary/20 mb-1 rounded"></div>
                <div className="w-full flex space-x-1">
                  <div className="w-2/3 h-12 bg-primary/10 rounded"></div>
                  <div className="w-1/3 h-12 bg-primary/10 rounded"></div>
                </div>
                <div className="text-center mt-1 text-[10px]">Modern Template</div>
              </div>
            </CardContent>
          </Card>
        </Label>
      </div>
      
      <div>
        <RadioGroupItem
          value="template2"
          id="template2"
          className="sr-only"
        />
        <Label
          htmlFor="template2"
          className="cursor-pointer"
        >
          <Card className={`overflow-hidden ${activeTemplate === "template2" ? "ring-2 ring-primary" : ""}`}>
            <CardContent className="p-2">
              <div className="aspect-video bg-muted rounded-sm flex flex-col items-center justify-center text-xs p-2">
                <div className="w-full h-6 bg-primary/20 mb-1 rounded"></div>
                <div className="w-full grid grid-cols-2 gap-1 flex-1">
                  <div className="bg-primary/10 rounded"></div>
                  <div className="bg-primary/10 rounded"></div>
                </div>
                <div className="text-center mt-1 text-[10px]">Classic Template</div>
              </div>
            </CardContent>
          </Card>
        </Label>
      </div>
    </RadioGroup>
  );
};

export default TemplateSelector;
