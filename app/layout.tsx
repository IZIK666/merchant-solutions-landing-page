import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { ClientTrackingInitializer } from '@/components/client-tracking-initializer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Merchant Solutions | Payment Onboarding for Growing Businesses',
  description:
    'We connect high-volume and digital merchants with vetted, certified payment processors. Higher approvals, compliant infrastructure, and global reach.',

  generator: 'v0.app',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'Merchant Solutions | Payment Onboarding for Growing Businesses',
    description:
      'We connect high-volume and digital merchants with vetted payment processors. Higher approvals and global reach.',
    url: 'https://merchant-solutions-landing-page.vercel.app/',
    siteName: 'Merchant Solutions',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Merchant Solutions',
    description:
      'Payment onboarding & merchant solutions for growing businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
  const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {FB_PIXEL_ID && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* LinkedIn Insight Tag */}
        {LINKEDIN_PARTNER_ID && (
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l.__linkedin_loaded) {
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  b.async = true;
                  s.parentNode.insertBefore(b, s);
                  l.__linkedin_loaded = true;
                }
              })(window);
            `}
          </Script>
        )}
      </head>

      <body className="font-sans antialiased">
        {children}

        {/* Facebook noscript fallback */}
        {FB_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {process.env.NODE_ENV === 'production' && <Analytics />}
        <ClientTrackingInitializer />
      </body>
    </html>
  )
}
