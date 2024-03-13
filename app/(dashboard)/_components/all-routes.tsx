import { BookOpen, BriefcaseBusiness, Home, Lightbulb, Wrench } from "lucide-react";

export const allRoutes = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="me-3" />,
  },
  {
    name: "Blog",
    href: "/blogs",
    icon: <BookOpen className="me-3" />,
  },
  {
    name: "My works",
    href: "/my-works",
    icon: <BriefcaseBusiness className="me-3" />,
  },
  {
    name: "Issues",
    href: "/issues",
    icon: <Lightbulb className="me-3" />,
  },
  {
    name: "Tools",
    href: "/tools",
    icon: <Wrench className="me-3" />,
  },
];