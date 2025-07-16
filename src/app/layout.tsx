
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raccount App - ERP System',
  description: 'Modern ERP system for accounting and general ledger management',
};

const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${inter.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.gray[50]};
    color: ${theme.colors.gray[900]};
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles>
          {children}
        </GlobalStyles>
      </body>
    </html>
  );
}
