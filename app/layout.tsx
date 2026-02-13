import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import SmoothScroll from '../components/SmoothScroll';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';

export const metadata = {
  title: 'ALSSOLUTION - 헬스케어 데이터 혁신',
  description: '대한민국 헬스케어의 미래, 데이터로 혁신하다. 알스솔루션.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
        {/* Preload fonts or other head elements if needed */}
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <SmoothScroll />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
