import EmailSection from "./shared/components/Sections/EmailSection";
import KidSection from "./shared/components/Sections/KidSection";
import MainSection from "./shared/components/Sections/MainSection";
import SecondSection from "./shared/components/Sections/SecondSection";
import TrendingSection from "./shared/components/Sections/TrendingSection";

export default function Home() {
  return (
    <div>
        <MainSection />
        <TrendingSection />
        <KidSection />
        <SecondSection />
        <EmailSection />
    </div>
  );
}
