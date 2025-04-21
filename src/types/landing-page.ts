
export interface LandingPageData {
  title?: string;
  subtitle?: string;
  description?: string;
  realtorName?: string;
  realtorEmail?: string;
  featuredImage?: string;
}

export interface TemplateProps {
  data: LandingPageData;
  isPlaceholder?: boolean;
}
