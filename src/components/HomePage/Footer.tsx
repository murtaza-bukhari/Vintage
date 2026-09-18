const Footer = () => {
    return (
        <footer className="w-full bg-[#242220] px-6 py-10 text-[#D8C2A8] md:px-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                <div>
                    <h2 className="mb-3 font-serif text-2xl">The Vintage Cut</h2>
                    <address className="text-sm not-italic leading-relaxed text-[#D8C2A8]/70">
                        123 Main Street, Gulberg
                        <br />
                        Lahore, Pakistan
                    </address>
                </div>

                <nav
                    aria-label="Social media"
                    className="flex flex-wrap justify-center gap-6 text-sm"
                >
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-white"
                    >
                        TikTok
                    </a>
                </nav>
            </div>

            <div className="mx-auto mt-8 max-w-7xl border-t border-[#D8C2A8]/15 pt-6 text-center text-xs text-[#D8C2A8]/50">
                © {new Date().getFullYear()} Vintage. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;