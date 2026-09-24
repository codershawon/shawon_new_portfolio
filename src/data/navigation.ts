export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  // Blog তৈরি হলে এখানে যোগ করবেন:
  // { label: "Blog", href: "/blog" },
];