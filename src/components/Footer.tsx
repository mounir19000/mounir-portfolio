export default function Footer() {
  return (
    <footer className="py-8 border-t border-grid-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary/50">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
        <p className="font-mono text-xs text-text-secondary/50">
          Mostefai Mounir Sofiane © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
