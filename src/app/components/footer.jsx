export default function Footer() {
  return (
    <footer className="border-2 border-white-500 mt-16 pt-6 pb-10 text-sm text-center text-white-500">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/henryIsHim" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/hein-thuya-win-b54932363" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:winheinthuay.dev@gmail.com">Email</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Henry. All rights reserved.</p>
    </footer>
  );
}
