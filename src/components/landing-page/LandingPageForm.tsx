
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LandingPageData } from "@/types/landing-page";
// Import new components
import PropertyInfoSection from "./form-sections/PropertyInfoSection";
import RealtorInfoSection from "./form-sections/RealtorInfoSection";
import FeaturedImageSection from "./form-sections/FeaturedImageSection";
import TemplateSection from "./form-sections/TemplateSection";

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }).max(100),
  subtitle: z.string().min(2, {
    message: "Subtitle must be at least 2 characters.",
  }).max(150),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }).max(1000),
  realtorName: z.string().min(2, {
    message: "Realtor name must be at least 2 characters.",
  }).max(100),
  realtorEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  featuredImage: z.string().optional(),
});

interface LandingPageFormProps {
  onSubmit: (data: LandingPageData) => void;
  setActiveTemplate: (template: string) => void;
  activeTemplate: string;
}

const LandingPageForm = ({ onSubmit, setActiveTemplate, activeTemplate }: LandingPageFormProps) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      realtorName: "",
      realtorEmail: "",
      featuredImage: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setTimeout(() => {
      onSubmit(values);
      setLoading(false);
    }, 500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Landing Page</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {/* Property Info */}
            <PropertyInfoSection control={form.control} />
            {/* Realtor Info */}
            <RealtorInfoSection control={form.control} />
            {/* Featured Image */}
            <FeaturedImageSection control={form.control} />
            {/* Template selection */}
            <TemplateSection
              activeTemplate={activeTemplate}
              setActiveTemplate={setActiveTemplate}
            />
            {/* Submit button */}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Generating Landing Page..." : "Generate Landing Page"}
            </Button>
            <FormMessage />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LandingPageForm;
