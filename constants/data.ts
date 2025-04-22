export const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About us",
    href: "/about",
    subLinks: [
      { name: "Our Story", href: "/about/story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "example", href: "/about/sustainability" },
    ],
  },
  {
    name: "Our Brand",
    href: "/brands",
    subLinks: [
      {
        name: "gametosa",
        href: "/brand/gametosa",
        subLinks: [
          { name: "overview", href: "/gametosa/overview" },
          { name: "about us", href: "/gametosa/aboutus" },
          { name: "team", href: "/gametosa/team" },
        ],
      },
      {
        name: "qubestat",
        href: "/brand/qubestat",
      },
    ],
  },
  {
    name: "Investor",
    href: "/investor",
    subLinks: [
      { name: "Financial Reports", href: "/investor/reports" },
      { name: "Investor Relations", href: "/investor/relations" },
      { name: "Corporate Governance", href: "/investor/governance" },
    ],
  },
  {
    name: "Our WorkPlace",
    href: "/workplace",
    subLinks: [
      { name: "Culture", href: "/workplace/culture" },
      { name: "Locations", href: "/workplace/locations" },
      { name: "Facilities", href: "/workplace/facilities" },
    ],
  },
  { name: "News & Events", href: "/news" },
  { name: "Careers", href: "/careers" },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Our Brand", href: "/brands" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];
