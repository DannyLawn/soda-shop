import "../pages/index.scss";
import { scrollToAnchor } from "../utils/anchorLinkScroll.js";

document
	.querySelectorAll("[data-attribute-anchor]")
	.forEach((link) => scrollToAnchor(link));