export const LensMusicSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            The future of music distribution.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Discover, create, and share your musical journey with us.
          </p>
        </header>
        <div className="flex flex-col items-center mb-10">
          <div
            className="aspect-square w-full max-w-xl rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-lg relative"
            style={{ background: 'linear-gradient(135deg, #20618d 0%, #3a7ca5 100%)' }}
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md" style={{ backgroundColor: '#20618d' }}>
              <span className="text-4xl" role="img" aria-label="Music">🎵</span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold">Lens Music Platform</h3>
              <p className="text-white text-base">Empowering artists & creators</p>
            </div>
            <div className="w-full mt-6 space-y-2">
              <div className="rounded h-3" style={{ backgroundColor: '#20618d' }}></div>
              <div className="rounded h-3 w-3/4" style={{ backgroundColor: '#3a7ca5' }}></div>
              <div className="rounded h-3 w-1/2" style={{ backgroundColor: '#b3cde0' }}></div>
            </div>
            <span className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-60" style={{ backgroundColor: '#b3cde0' }} aria-hidden="true"></span>
            <span className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full opacity-40" style={{ backgroundColor: '#3a7ca5' }} aria-hidden="true"></span>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://music.lens.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white transition-all duration-200 focus:outline-none focus:ring-4 hover:bg-[#164666]"
            style={{ backgroundColor: '#20618d' }}
          >
            Explore Lens Music
          </a>
        </div>
      </main>
    </section>
  );
};
