import "./theme/theme.css";
import "./style.css";

import {
  createPlanBHeader,
  createPlanBPageShell,
} from "./theme/index.js";

const app = document.querySelector("#app");

app.replaceChildren(
  createPlanBPageShell({
    header: createPlanBHeader({
      eyebrow: "Plan B Foundation",
      title: "Official site coming soon",
      lede:
        "A temporary home for Plan B Foundation while the public website is prepared.",
    }),
    mainContent: `
      <section class="planb-panel site-status">
        <div class="planb-section-heading">
          <p class="planb-eyebrow">Placeholder</p>
          <h2>The GitHub Pages site is ready for content.</h2>
          <p>
            This page confirms the Plan B Vite theme is available locally and gives
            maintainers a clean starting point for the future site.
          </p>
        </div>
      </section>

      <section class="planb-panel planb-grid">
        <article class="planb-card">
          <h3>Theme based</h3>
          <p>
            Header, hero image, layout tokens, and page shell styles are vendored
            in <code>src/theme</code>.
          </p>
        </article>
        <article class="planb-card">
          <h3>Content light</h3>
          <p>
            The site keeps only placeholder copy here, so future content can be
            added without untangling demo-specific behavior.
          </p>
        </article>
      </section>
    `,
  }),
);
