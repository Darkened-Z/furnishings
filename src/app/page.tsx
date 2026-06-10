import dynamic from "next/dynamic";
import HeroBanner from "@/components/home/hero-section";
import MainContentSections from "@/components/home/main-content-section";

// Above-the-fold sections load eagerly; everything below is code-split with
// next/dynamic so its client JS isn't parsed/executed on first paint (lowers TBT).
// ssr stays enabled (default) so the HTML/SEO content is unchanged.
const FloorCategories = dynamic(() => import("@/components/home/collection"));
const CertificateMarquee = dynamic(() => import("@/components/home/Certificate-section"));
const FurniturePromoBanner = dynamic(() => import("@/components/home/sales-card"));
const ProcessSection = dynamic(() => import("@/components/home/process-section"));
const VinylBenefitsSection = dynamic(() => import("@/components/home/benefits-section"));
const PricingSection = dynamic(() => import("@/components/home/pricing-section"));
const FlooringSection = dynamic(() => import("@/components/home/flooring-section"));
const FaqSection = dynamic(() => import("@/components/home/faq-section"));
const TestimonialsSection = dynamic(() => import("@/components/home/testinomial-section"));
const FlooringProjectSection = dynamic(() => import("@/components/home/nationwide-section"));
const CompanyOverviewSection = dynamic(() => import("@/components/home/overview-section"));
const CTASection2 = dynamic(() => import("@/components/home/CTA-section2"));
// BlogList is a server component (fetches on the server) so it ships no client JS.
import BlogList from "@/components/blogs/blog-section";

export const metadata = {
  title: "Vinyl Flooring Malaysia | SPC, Laminate & Carpet Tiles | Furnishing",
  description: "Shop vinyl flooring, SPC, laminate and carpet tiles in Malaysia with Furnishing. Get water-resistant, durable flooring solutions for homes and commercial spaces with a free quotation.",
  alternates: {
    canonical: "https://www.furnishings.com.my",
  },
};

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <MainContentSections />

      <FloorCategories />
      <CertificateMarquee />
      <FurniturePromoBanner />
      <ProcessSection />
      <VinylBenefitsSection />
      <PricingSection />
      <FlooringSection />
      <FaqSection />
      <TestimonialsSection />
      <FlooringProjectSection />
      <CompanyOverviewSection />
      <CTASection2 />
      <BlogList limit={6} />
    </main>
  );
}
export const revalidate = 1800;
