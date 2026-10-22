import type { Metadata, Viewport } from 'next';
import './globals.css';
import PowerGauge from '@/components/common/PowerGauge';

export const viewport: Viewport = {
  themeColor: '#FFF9EE',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'numberJuan.io — Mid-Century Retro-Cartoon Web & Automation Studio',
  description:
    'Why settle for second best when you can have Number Juan? High-octane web development and intelligent automation crafted with 1960s-70s optimism and modern AI.',
  icons: {
    icon: '/assets/mascot.svg',
  },
  openGraph: {
    title: 'numberJuan.io — The #1 Web & Automation Studio',
    description: "Tomorrow's Web, Freshly Automated Today! Built by Number Juan.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('numberjuan-theme') || localStorage.getItem('automato-theme');
                if (t) document.documentElement.dataset.theme = t;
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>
        <PowerGauge />
        {children}
      </body>
    </html>
  );
}
