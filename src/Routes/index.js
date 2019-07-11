import VueRouter from "vue-router";
import AboutUs from "@/components/page/AboutUs";
import Home from "@/components/page/Home";
const routes = [
  { name: "Home", path: "/", alias: "/home", component: Home },
  { name: "About", path: "/about", component: AboutUs }
];

const router = new VueRouter({ mode: "history", routes });

export default router;
