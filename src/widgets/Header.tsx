import { Link } from 'react-router';

export function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-white">
      <div className="mx-[62px] flex max-w-[1920px] justify-between py-6">
        <div id="logo">
          <Link to="/">ManiSpace</Link>
        </div>
        <nav className="grid place-items-center">
          <ul className="flex cursor-pointer gap-6">
            {/* Navlist in Header */}
            {['blog', 'about', 'contact'].map((path) => (
              <li
                key={path}
                className="group relative inline-block pb-[7px] tracking-widest uppercase transition"
              >
                <Link
                  to={`/${path}`}
                  className="px-[14px] py-[12px] transition group-hover:text-pink-300"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                <span className="absolute bottom-0 left-1/2 h-[0.9px] w-0 bg-pink-300 opacity-70 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>{' '}
                {/* Underline animation */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
