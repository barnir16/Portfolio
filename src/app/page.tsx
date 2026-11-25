/**
 * Home page - temporary "coming soon" landing.
 *
 * Kept on purpose to one centered greeting plus an emoji, until
 * the real portfolio sections (about, projects, contact) are ready.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center font-sans">
      {/*
        Hatching chick emoji with a gentle bounce.
        role="img" + aria-label let screen readers announce it properly
        instead of reading out the raw emoji name.
      */}
      <span
        role="img"
        aria-label="Hatching chick"
        className="animate-bounce text-7xl"
      >
        🐣
      </span>

      <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        Hi! It&apos;s Bar Muller Nir, and my portfolio is still hatching. Stay
        tuned!
      </h1>
    </main>
  );
}
