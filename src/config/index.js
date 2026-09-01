// All editable site content now lives in the /content JSON files (one level up
// from /src), which are edited through the CMS at /admin. This file just wires
// that content into the same exported names every component already imports,
// so no component code needed to change.
import navLinksData from "../../content/nav.json";
import heroSlidesData from "../../content/hero-slides.json";
import servicesData from "../../content/services.json";
import projectCategoriesData from "../../content/project-categories.json";
import testimonialsData from "../../content/testimonials.json";
import whyChooseUsData from "../../content/why-choose-us.json";
import companyData from "../../content/company.json";

export const NAV_LINKS = navLinksData.items;
export const heroSlides = heroSlidesData.items;
export const services = servicesData.items;
export const projectCategories = projectCategoriesData.items;
export const testimonials = testimonialsData.items;
export const whyChooseUs = whyChooseUsData.items;
export const COMPANY = companyData;
