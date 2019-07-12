import VueRouter from "vue-router";
import AboutUs from "@/components/page/AboutUs";
import Home from "@/components/page/Home";
import ContactUs from "@/components/page/ContactUs";
const routes = [
  { name: "Home", path: "/", alias: "/home", component: Home },
  { name: "About", path: "/about", component: AboutUs },
  { name: "Contact Us", path: "/contact-us", component: ContactUs }
];

const router = new VueRouter({ mode: "history", routes });

export default router;
