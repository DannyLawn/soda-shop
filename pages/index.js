import { scrollToAnchor } from "../utils.js/anchorLinkScroll.js";

document
	.querySelectorAll("[data-attribute-anchor]")
	.forEach((link) => scrollToAnchor(link));