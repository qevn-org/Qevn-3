export type AnnouncementBar = {
  text: string;
  href: string;
  startDate?: string; // ISO date format, e.g. "2026-06-20"
  endDate?: string;   // ISO date format, e.g. "2026-06-27"
};

export const announcements: AnnouncementBar[] = [
  {
    text: "Try our new AI Pitch Generator — free",
    href: "https://pitch.qevn.in",
    startDate: "2026-07-20", // Set to a future launch week (today is June 20, 2026)
    endDate: "2026-07-27",   // Launch week end
  },
  {
    text: "LIMITED OFFER: Build or redesign your site from ₹4,999/-",
    href: "/offer",
  },
];
