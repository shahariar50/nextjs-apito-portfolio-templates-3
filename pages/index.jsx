import FilterSection from "../components/FilterSection";
import Layout from "../components/Layout";
import HeroSection from "../components/pages/homepage/HeroSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FilterSection />
    </Layout>
  );
}
