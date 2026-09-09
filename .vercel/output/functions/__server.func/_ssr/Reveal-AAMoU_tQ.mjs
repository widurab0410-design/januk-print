import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as cn } from "./PageShell-abhac41t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-AAMoU_tQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useInView(once = true) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setVisible(true);
				if (once) io.disconnect();
			} else if (!once) setVisible(false);
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return {
		ref,
		visible
	};
}
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const { ref, visible } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
//#endregion
export { useInView as n, Reveal as t };
