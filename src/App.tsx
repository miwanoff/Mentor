import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Tracks from './components/Tracks';
import Mentorship from './components/Mentorship';
import Path from './components/Path';
import Concierge from './components/Concierge';
import Quiz from './components/Quiz';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-gold selection:text-midnight antialiased overflow-x-hidden">
      {/* 1. Header (Sticky navigation bar) */}
      <Header />

      {/* Main Single Page structural container */}
      <main>
        {/* 2. Hero Section (H1 header + animated math graphics + CTA) */}
        <Hero />

        {/* 3. Pain Points (Crisis overview + 3 interactive card grids) */}
        <PainPoints />

        {/* 4. Solution Section (The CLIL pedagogical methodology) */}
        <Solution />

        {/* 5. Educational Tracks (Program modules with custom grids) */}
        <Tracks />

        {/* 6. Philosophy of Mentorship (IT, Robolox, AI and modern connections) */}
        <Mentorship />

        {/* 7. Step-by-Step Path (Linear numbered progress timeline) */}
        <Path />

        {/* 8. Educational Concierge / Care Service portal */}
        <Concierge />

        {/* 9. Interactive Smart Quiz (Crucial lead capturing state machine) */}
        <Quiz />

        {/* 10. FAQ Section (Toggleable Accordion list) */}
        <FAQ />
      </main>

      {/* 11. Premium Footer (Full credit credentials & legal specifications) */}
      <Footer />
    </div>
  );
}
