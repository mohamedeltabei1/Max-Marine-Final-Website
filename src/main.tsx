import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// vite-react-ssg controls mounting/hydration and prerenders every route to
// static HTML at build time. The entry exports `createRoot`; it does not call
// createRoot() itself.
export const createRoot = ViteReactSSG({ routes });
