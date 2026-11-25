import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Vitest config for unit and component tests.
 *
 * - tsconfigPaths: lets tests use the "@/..." import alias from tsconfig.json
 * - react: compiles JSX in test files
 * - jsdom: a fake browser DOM so components can render without a real browser
 * - setupFiles: shared setup that runs before every test file
 */
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
