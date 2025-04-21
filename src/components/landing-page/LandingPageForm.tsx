
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LandingPageData } from "@/types/landing-page";
import TemplateSelector from "./TemplateSelector";

const formSchema = z.object({
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
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Title</FormLabel>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="Stunning Waterfront Villa" 
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This will be the main headline for your property.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="Exclusive Beachfront Location" 
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A short, catchy phrase about the property.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Write a detailed description of the property..."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="realtorName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Realtor Name</FormLabel>
                    <FormControl>
                      <Input 
                        type="text"
                        placeholder="Jane Smith"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="realtorEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Realtor Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="jane@realestate.com"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="featuredImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured Image URL (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="text"
                      placeholder="https://example.com/property-image.jpg" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Enter a URL for the property's featured image.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-4">
              <FormLabel>Select Template</FormLabel>
              <TemplateSelector
                activeTemplate={activeTemplate}
                onSelectTemplate={setActiveTemplate}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Generating Landing Page..." : "Generate Landing Page"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LandingPageForm;

