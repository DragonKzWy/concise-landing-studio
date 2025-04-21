
# Intelligent Landing Page Generator

A modern React application for creating professional real estate landing pages quickly and easily.

## Features

- Clean and modular architecture
- Form-based landing page generation
- Multiple responsive templates
- Real-time preview of landing pages
- Accessibility-compliant components
- Mobile-first design approach

## Project Structure

```
src/
├── components/
│   └── landing-page/
│       ├── LandingPageForm.tsx      # Form for inputting landing page data
│       ├── TemplatePreview.tsx      # Component for previewing templates
│       ├── TemplateSelector.tsx     # UI for selecting templates
│       └── templates/
│           ├── Template1.tsx        # Modern template
│           └── Template2.tsx        # Classic template
├── hooks/
│   └── useLandingPage.ts            # Custom hook for landing page operations
├── pages/
│   ├── Index.tsx                    # Main page with form and preview
│   └── NotFound.tsx                 # 404 page
├── services/
│   └── landingPageService.ts        # Service for API operations
├── types/
│   └── landing-page.ts              # TypeScript interfaces for landing pages
└── App.tsx                          # Main application component
```

## Technology Stack

- React with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- React Hook Form for form handling
- Zod for form validation

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open your browser to: `http://localhost:5173`

## Production Deployment

This application is ready for deployment to services like Vercel, Netlify, or GitHub Pages:

1. Build the application: `npm run build`
2. Deploy the `dist` directory to your hosting provider

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
