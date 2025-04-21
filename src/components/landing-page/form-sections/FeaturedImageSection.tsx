
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import * as z from "zod";

interface Props {
  control: Control<z.infer<typeof import("../LandingPageForm").formSchema>>;
}

const FeaturedImageSection = ({ control }: Props) => (
  <FormField
    control={control}
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
);

export default FeaturedImageSection;
