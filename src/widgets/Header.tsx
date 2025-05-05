import { Link } from 'react-router';

const navlist: string[] = ['blog', 'about', 'contact'];

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white">
      <div className="mx-[62px] flex max-w-[1920px] justify-between py-6">
        <div id="logo">
          <Link to="/">ManiSpace</Link>
        </div>
        <nav className="grid place-items-center">
          <ul className="flex cursor-pointer gap-6">
            {navlist.map((path) => (
              <li
                key={path}
                className="custom-underline-group relative inline-block pb-[7px] tracking-widest uppercase transition"
              >
                <Link
                  to={`/${path}`}
                  className="px-[14px] py-[12px] transition group-hover:text-pink-300"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                <span className="custom-underline-effect"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
