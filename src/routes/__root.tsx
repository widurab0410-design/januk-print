import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "../components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Januk Print — Graphic Design & Printing Since 2013" },
      {
        name: "description",
        content:
          "Professional graphic design and printing since 2013 — branding, packaging, signage and apparel, delivered worldwide.",
      },
      { property: "og:title", content: "Januk Print — Graphic Design & Printing Since 2013" },
      {
        property: "og:description",
        content:
          "Professional graphic design and printing since 2013 — branding, packaging, signage and apparel, delivered worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="relative">
        {/* Subtle Background Paint Blobs/Strokes */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background">
          {/* Top Left Paint Splatter */}
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] opacity-[0.06] blur-[60px] md:blur-[100px] text-primary">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <path d="M47.7,-67.2C59,-58.5,64.2,-41.8,69.5,-26.1C74.7,-10.3,80.1,4.4,75.8,17.2C71.5,30,57.5,40.8,43.2,50.7C28.9,60.6,14.5,69.6,-0.6,70.4C-15.7,71.2,-31.4,63.8,-42.6,52.3C-53.7,40.8,-60.2,25.2,-64.4,9.3C-68.6,-6.6,-70.5,-22.7,-64.7,-35.3C-58.9,-47.9,-45.5,-57,-31.8,-63.3C-18.1,-69.6,-4.1,-73.2,7.3,-71C18.6,-68.8,36.4,-75.9,47.7,-67.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          {/* Middle Right Paint Splatter */}
          <div className="absolute top-[30%] -right-[5%] w-[35%] h-[40%] opacity-[0.05] blur-[60px] md:blur-[90px] text-primary rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <path d="M38.1,-48.6C48.8,-40.4,56.5,-28.5,61.7,-15.1C66.9,-1.7,69.6,13.2,63.5,25.3C57.4,37.3,42.5,46.5,28.2,52C13.8,57.6,0,59.5,-15.5,58C-31,56.5,-48.2,51.6,-59.7,40.1C-71.2,28.6,-77,10.6,-74.6,-6.2C-72.2,-23,-61.7,-38.7,-48,-46.8C-34.4,-54.9,-17.2,-55.5,-1.9,-53.2C13.4,-51,27.3,-56.9,38.1,-48.6Z" transform="translate(100 100)" />
            </svg>
          </div>
          {/* Bottom Left Paint Splatter */}
          <div className="absolute -bottom-[10%] left-[15%] w-[45%] h-[45%] opacity-[0.04] blur-[70px] md:blur-[120px] text-primary -rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <path d="M41.7,-52.1C55.4,-44.6,68.7,-34.5,75.4,-20.9C82.1,-7.4,82.2,9.6,75.3,23.5C68.3,37.5,54.4,48.4,40.1,55.9C25.7,63.4,10.9,67.6,-3.4,71.8C-17.7,76,-31.6,80.3,-43.3,75.2C-55,70.1,-64.5,55.7,-70.7,40.6C-76.8,25.5,-79.7,9.6,-76.8,-5.2C-73.9,-20,-65.2,-33.7,-53.4,-43.2C-41.6,-52.7,-26.8,-58,-12.3,-58.5C2.2,-59,16.7,-54.8,27.9,-59.6C39.1,-64.4,41.7,-52.1,41.7,-52.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}

