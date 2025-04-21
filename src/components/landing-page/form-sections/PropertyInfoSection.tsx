
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import * as z from "zod";

interface Props {
  control: Control<z.infer<typeof import("../LandingPageForm").formSchema>>;
}

const PropertyInfoSection = ({ control }: Props) => (
  <>
    <FormField
      control={control}
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
      control={control}
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
      control={control}
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
  </>
);

export default PropertyInfoSection;
