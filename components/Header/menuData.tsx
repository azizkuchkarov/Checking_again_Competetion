import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  // Agar xohlasang submenu ham ishlatsang bo‘ladi:
  // {
  //   id: 2,
  //   title: "Services",
  //   newTab: false,
  //   submenu: [
  //     { title: "Design", path: "/services/design" },
  //     { title: "Development", path: "/services/dev" },
  //   ],
  // },
];

export default menuData;
