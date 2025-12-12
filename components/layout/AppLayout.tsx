"use client";

import { Sidebar, SidebarItem } from "./Sidebar";
import { Header } from "./Header";

export interface AppLayoutProps {
  children: React.ReactNode;
  sidebarItems: SidebarItem[];
  pageTitle?: string;
  userName?: string;
  userAvatar?: string | null;
  userRole?: string;
  onLogout?: () => void;
}

export function AppLayout({
  children,
  sidebarItems,
  pageTitle,
  userName,
  userAvatar,
  userRole,
  onLogout,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar items={sidebarItems} />

      {/* Main content area */}
      <div className="ml-64">
        {/* Header */}
        <Header
          title={pageTitle}
          userName={userName}
          userAvatar={userAvatar}
          userRole={userRole}
          onLogout={onLogout}
        />

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
