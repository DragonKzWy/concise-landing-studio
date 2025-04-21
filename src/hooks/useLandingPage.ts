
import { useState } from "react";
import { LandingPageData } from "@/types/landing-page";
import { LandingPageService } from "@/services/landingPageService";
import { toast } from "@/hooks/use-toast";

export const useLandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [landingPage, setLandingPage] = useState<LandingPageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateLandingPage = async (data: LandingPageData, template: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await LandingPageService.generateLandingPage(data, template);
      
      if (result.success && result.data) {
        setLandingPage(result.data);
        return result.data;
      } else {
        throw new Error("Failed to generate landing page");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const saveLandingPage = async (data: LandingPageData, template: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await LandingPageService.saveLandingPage(data, template);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Landing page saved successfully",
        });
        return result.id;
      } else {
        throw new Error("Failed to save landing page");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    landingPage,
    error,
    generateLandingPage,
    saveLandingPage,
  };
};
