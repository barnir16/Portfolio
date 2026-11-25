/**
 * Runs once before every test file (wired up in vitest.config.mts).
 *
 * - Adds the jest-dom matchers (toBeInTheDocument, toHaveTextContent, ...)
 *   to Vitest's expect, including their TypeScript types.
 * - Unmounts rendered components after each test. Testing Library only does
 *   this automatically when Vitest globals are on, and here they are off.
 */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(cleanup);
