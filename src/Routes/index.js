import VueRouter from "vue-router";
import AboutUs from "@/components/page/AboutUs";
import Home from "@/components/page/Home";
import ContactUs from "@/components/page/ContactUs";
import PhotoDetail from "@/components/page/PhotoDetail";

const routes = [
  { name: "Home", path: "/", alias: "/home", component: Home },
  { name: "About", path: "/about", component: AboutUs },
  { name: "Contact Us", path: "/contact-us", component: ContactUs },
  {
    name: "details",
    path: "/:id",
    component: PhotoDetail,
    props: true,
    meta: { layout: "photo-detail" }
  }
];

const router = new VueRouter({ mode: "history", routes });

export default router;
