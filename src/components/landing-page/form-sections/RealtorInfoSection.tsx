
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import * as z from "zod";

interface Props {
  control: Control<z.infer<typeof import("../LandingPageForm").formSchema>>;
}

const RealtorInfoSection = ({ control }: Props) => (
  <div className="grid grid-cols-2 gap-4">
    <FormField
      control={control}
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
      control={control}
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
);

export default RealtorInfoSection;
