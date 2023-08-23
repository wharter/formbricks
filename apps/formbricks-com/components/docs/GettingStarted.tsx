import { Button } from "./Button";
import { Heading } from "./Heading";

const gettingStarted = [
  {
    href: "/docs/getting-started/quickstart",
    name: "Quickstart",
    description: "Get up and running with our cloud and JavaScript widget",
  },
  {
    href: "/docs/getting-started/nextjs-app",
    name: "Next.js App",
    description: "Integrate the Formbricks SDK into a Next.js application with the new app directory",
  },
  {
    href: "/docs/getting-started/nextjs-pages",
    name: "Next.js Pages",
    description: "Integrate the Formbricks SDK into a Next.js application with the pages directory",
  },
  {
    href: "/docs/getting-started/vuejs",
    name: "Vue.js",
    description: "Integrate the Formbricks SDK into a Vue.js application",
  },
];

export function GettingStarted() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="getting-started">
        Getting Started
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {gettingStarted.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{guide.name}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{guide.description}</p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
