import { Contact, Home, ListVideo, Rss } from "lucide-react";
import {
  DiCisco,
  DiCreativecommonsBadge,
  DiDjango,
  DiDocker,
  DiGhost,
  DiGithubFull,
  DiLess,
  DiMailchimp,
  DiMeteorfull,
  DiNetmagazine,
  DiNginx,
  DiStylus,
  DiYahoo,
} from "react-icons/di";

// Navbar links
export const navLinks = [
  { route: "", name: "navLink1", icon: Home },
  { route: "courses", name: "navLink2", icon: ListVideo },
  { route: "blogs", name: "navLink3", icon: Rss },
  { route: "contacts", name: "navLink4", icon: Contact },
];

// Langs
export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
  { route: "tr", label: "Turkce" },
];

// Companies
export const companies = [
  DiCisco,
  DiCreativecommonsBadge,
  DiGhost,
  DiGithubFull,
  DiMeteorfull,
  DiLess,
  DiMailchimp,
  DiNetmagazine,
  DiNginx,
  DiStylus,
  DiYahoo,
  DiDjango,
  DiDocker,
];

// Courses filter
export const filterCourses = [
  { label: "cateogry1", name: "all" },
  { label: "cateogry2", name: "newest" },
  { label: "cateogry3", name: "lowest-price" },
  { label: "cateogry4", name: "highest-price" },
];

// Courses levels
export const filterLevels = [
  { label: "level1", name: "all" },
  { label: "level2", name: "beginner" },
  { label: "level3", name: "intermediate" },
  { label: "level4", name: "advanced" },
];

// Courses
export const courses = [
  {
    title: "JavaScript",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 179,
    currentPrice: 79,
    level: "Beginner",
  },
  {
    title: "ReactJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 159,
    currentPrice: 59,
    level: "Intermidate",
  },
  {
    title: "VueJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbddfc919-2260-46dd-a078-b956bd9a377c-kilwcq.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermidate",
  },
  {
    title: "Telegram BOT",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F1662922d-b61d-401b-aa1a-693a6231d8a0-kilw9a.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermidate",
  },
  {
    title: "React Native",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F27f17594-ae28-4fe1-86ce-964a5c89c78d-kilw7k.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermidate",
  },
  {
    title: "Foundation",
    previewImage:
      "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbcdfb541-3300-430f-b8b2-ff0fb57df056-kilw6p.png&w=1920&q=75",
    author: {
      image: "/assets/userImage.jpg",
      name: "Abdulloyev Ulug'bek",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermidate",
  },
];

// Categories
export const categories = [
  {
    icon: "/assets/categories/digital-marketing.svg",
    label: "Digital Marketing",
  },
  { icon: "/assets/categories/web-development.svg", label: "Web Development" },
  { icon: "/assets/categories/graphic-design.svg", label: "Graphic Design" },
  { icon: "/assets/categories/photography.svg", label: "Photography" },
  { icon: "/assets/categories/social-sciences.svg", label: "Social Sciences" },
  { icon: "/assets/categories/art-humanities.svg", label: "Art & Humanities" },
  {
    icon: "/assets/categories/personal-development.svg",
    label: "Personal Development",
  },
  { icon: "/assets/categories/it-software.svg", label: "IT & Software" },
];
