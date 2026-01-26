import {
  Hero,
  Statement,
  Showcase,
  Products,
  Process,
  Integrations,
  News,
} from '@/components/sections';
import { LogoReveal } from '@/components/layout';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Showcase />
      <Products />
      <Process />
      <Integrations />
      <News />
      <LogoReveal />
    </>
  );
}
