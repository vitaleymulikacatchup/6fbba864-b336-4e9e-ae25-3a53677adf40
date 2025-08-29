"use client";
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' }
];

export default function Home() {
  return (
    <>
      <NavbarStyleMinimal logoSrc="/images/logo.svg" logoAlt="MEMEcoin Pulse Logo" navItems={navItems} buttonText="Get MEME" onButtonClick={() => console.log('Get MEME clicked')} />
      <SplitHero title="Welcome to MEMEcoin" subtitle="Join the meme revolution with us!" primaryButtonText="Get MEME" onPrimaryButtonClick={() => console.log('Primary CTA clicked')} />
      <SplitAbout description="Experience the fun and dynamic world of MEMEcoin, your gate to blockchain innovation!" />
      <HowToBuy3D title="How to Buy MEMEcoin" steps={[
        { title: 'Step 1', description: 'Visit the exchange and create an account.', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
        { title: 'Step 2', description: 'Deposit funds into your account', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
        { title: 'Step 3', description: 'Buy MEMEcoin using the funds deposited.', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
      ]} />
      <NumberGridTokenomics title="Tokenomics" description="Our economic structure is designed to support growth and stability." kpiItems={[
        { value: '1B', description: 'Total Supply'},
        { value: '100M', description: 'Circulating Supply'},
        { value: '15%', description: 'Transaction Fee'}
      ]} />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={60}
        columns={[
          { title: 'Resources', items: [
            { label: 'Whitepaper', onClick: () => console.log('Whitepaper clicked') },
            { label: 'Community', onClick: () => console.log('Community clicked') }
          ]},
          { title: 'Company', items: [
            { label: 'About Us', onClick: () => console.log('About Us clicked') },
            { label: 'Careers', onClick: () => console.log('Careers clicked') }
          ]},
          { title: 'Support', items: [
            { label: 'Contact Us', onClick: () => console.log('Contact Us clicked') },
            { label: 'Help Center', onClick: () => console.log('Help Center clicked') }
          ]}
        ]}
        copyrightText="© 2023 MEMEcoin. All rights reserved."
        onPrivacyClick={() => console.log('Privacy Policy clicked')}
      />
    </>
  );
}