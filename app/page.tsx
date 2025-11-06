import './styles/home.css';
import { CivicCallout } from './components/CivicCallout';
import { CivicTimeline } from './components/CivicTimeline';
import { EngagementPlaybook } from './components/EngagementPlaybook';
import { EssentialPillars } from './components/EssentialPillars';
import { FAQSection } from './components/FAQSection';
import { HeroSection } from './components/HeroSection';
import { MiniQuiz } from './components/MiniQuiz';
import { ResourceList } from './components/ResourceList';

export default function Page() {
  return (
    <main className="page">
      <HeroSection />
      <EssentialPillars />
      <CivicTimeline />
      <CivicCallout />
      <EngagementPlaybook />
      <MiniQuiz />
      <FAQSection />
      <ResourceList />
      <footer className="footer">
        Built to answer the question “What is Civics?” and inspire everyday participation.
      </footer>
    </main>
  );
}
