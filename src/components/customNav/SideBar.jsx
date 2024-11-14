import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Accordion', path: '/customnav' },
    { label: 'Dropdown', path: '/customnav/select' },
    { label: 'Buttons', path: '/customnav/buttons' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-hidden flex flex-col items-center justify-center align-middle">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
