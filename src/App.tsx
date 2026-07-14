import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ExhibitPro = lazy(() => import("./pages/ExhibitPro"));
const ExhibitProHowItWorks = lazy(() => import("./pages/ExhibitProHowItWorks"));
const ExhibitProFeatures = lazy(() => import("./pages/ExhibitProFeatures"));
const ExhibitProBlog = lazy(() => import("./pages/ExhibitProBlog"));
const Contact = lazy(() => import("./pages/Contact"));
const ExhibitProContact = lazy(() => import("./pages/ExhibitProContact"));
const FileLabelPro = lazy(() => import("./pages/FileLabelPro"));
const FileLabelProHowItWorks = lazy(() => import("./pages/FileLabelProHowItWorks"));
const FileLabelProFeatures = lazy(() => import("./pages/FileLabelProFeatures"));
const FileLabelProContact = lazy(() => import("./pages/FileLabelProContact"));
const FileLabelProPricing = lazy(() => import("./pages/FileLabelProPricing"));
const CopierTabsPro = lazy(() => import("./pages/CopierTabsPro"));
const CopierTabsProHowItWorks = lazy(() => import("./pages/CopierTabsProHowItWorks"));
const CopierTabsProFeatures = lazy(() => import("./pages/CopierTabsProFeatures"));
const CopierTabsProContact = lazy(() => import("./pages/CopierTabsProContact"));
const CopierTabsProEarlyAccess = lazy(() => import("./pages/CopierTabsProEarlyAccess"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
);

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                {/* Skip to main content link for keyboard navigation */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
                    aria-label="Skip to main content"
                >
                    Skip to main content
                </a>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/exhibitpro" element={<ExhibitPro />} />
                        <Route path="/exhibitpro/how-it-works" element={<ExhibitProHowItWorks />} />
                        <Route path="/exhibitpro/features" element={<ExhibitProFeatures />} />
                        <Route path="/exhibitpro/blog" element={<ExhibitProBlog />} />
                        <Route path="/exhibitpro/contact" element={<ExhibitProContact />} />
                        <Route path="/file-labelpro" element={<FileLabelPro />} />
                        <Route path="/file-labelpro/how-it-works" element={<FileLabelProHowItWorks />} />
                        <Route path="/file-labelpro/features" element={<FileLabelProFeatures />} />
                        <Route path="/file-labelpro/contact" element={<FileLabelProContact />} />
                        <Route path="/file-labelpro/pricing" element={<FileLabelProPricing />} />
                        <Route path="/copier-tabspro" element={<CopierTabsPro />} />
                        <Route path="/copier-tabspro/how-it-works" element={<CopierTabsProHowItWorks />} />
                        <Route path="/copier-tabspro/features" element={<CopierTabsProFeatures />} />
                        <Route path="/copier-tabspro/contact" element={<CopierTabsProContact />} />
                        <Route path="/copier-tabspro/early-access" element={<CopierTabsProEarlyAccess />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
