export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <p>Marc</p>
      </div>

      <div>
        <ul className="flex gap-2">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutme">About me</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
