function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-night/70 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-6">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          id="contact-me"
        >
          Contact Me
        </h2>

        <p className="text-white/75 text-lg">
          I’m currently open to internships, collaborations, and project
          discussions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://www.linkedin.com/in/marc-hamilton-488240192/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition shadow-md"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Marcosauras"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition shadow-md"
          >
            GitHub
          </a>

          <a
            href="mailto:Mhamilton1300@outlook.com"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition shadow-md"
          >
            Email Me
          </a>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Marc Hamilton — Applied Computer Science
        </div>
      </div>
    </footer>
  );
}

export default Footer;
