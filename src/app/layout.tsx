import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'MEMEcoin Pulse',
  description: 'Launch a playful, concise landing that introduces MEMEcoin, explains how to buy, and presents tokenomics with clear CTAs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}