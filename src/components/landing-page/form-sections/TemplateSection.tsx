
import { FormLabel } from "@/components/ui/form";
import TemplateSelector from "../TemplateSelector";

interface Props {
  activeTemplate: string;
  setActiveTemplate: (template: string) => void;
}

const TemplateSection = ({ activeTemplate, setActiveTemplate }: Props) => (
  <div className="space-y-4">
    <FormLabel>Select Template</FormLabel>
    <TemplateSelector
      activeTemplate={activeTemplate}
      onSelectTemplate={setActiveTemplate}
    />
  </div>
);

export default TemplateSection;
