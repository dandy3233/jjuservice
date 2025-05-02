// app/layout.tsx
'use client';

import './globals.css';
import { usePathname } from 'next/navigation';
import UserMenu from './components/UserMenu';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showUserMenu = pathname !== '/login'; // adjust this if your login page is at a different path

  return (
    <html lang="en">
      <body>
        {showUserMenu && <UserMenu />}
        {children}
      </body>
    </html>
  );
}
