type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string; // qisqacha ma'lumot
  details: string;   // Основные функции...
  image?: string;    // bitta asosiy rasm (optional)
  images?: string[]; // bir nechta qo‘shimcha rasm uchun massiv
  author: Author;
  tags: string[];
  publishDate: string;
};
