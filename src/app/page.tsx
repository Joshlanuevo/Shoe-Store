"use client"
import React from 'react';

const EmailSection = React.lazy(() => import("./shared/components/Sections/EmailSection"));
const KidSection = React.lazy(() => import("./shared/components/Sections/KidSection"));
const MainSection = React.lazy(() => import("./shared/components/Sections/MainSection"));
const SecondSection = React.lazy(() => import("./shared/components/Sections/SecondSection"));
const TrendingSection = React.lazy(() => import("./shared/components/Sections/TrendingSection"));

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


