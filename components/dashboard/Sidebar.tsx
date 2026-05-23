'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold text-sidebar-primary">CFILIHTC</h1>
        <p className="text-xs text-sidebar-accent-foreground mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link href="/dashboard">
          <Button
            variant={pathname === '/dashboard' ? 'default' : 'ghost'}
            className="w-full justify-start"
          >
            📊 Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/orders">
          <Button
            variant={pathname === '/dashboard/orders' ? 'default' : 'ghost'}
            className="w-full justify-start"
          >
            📦 Orders
          </Button>
        </Link>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        <div className="bg-sidebar-accent/30 rounded-md p-3">
          <p className="text-xs text-sidebar-accent-foreground">Logged in as</p>
          <p className="text-sm font-semibold text-sidebar-foreground">Admin</p>
        </div>
        <Button
          onClick={handleLogout}
          className="w-full bg-destructive hover:bg-destructive/90 text-white"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
