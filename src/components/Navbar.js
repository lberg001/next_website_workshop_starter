import Link from 'next/link';

const navigationItems = [
    {
        id: 1,
        name: 'About',
        path: '/about',
    },
    {
        id: 2,
        name: 'Projects',
        path: '/projects',
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact',
    },
];

const Navbar = () => {
    return (
        <nav className="fixed h-screen">
            <Link href="/">
                <p className="font-helvetica-extra-bold text-xs cursor-pointer">
                    David Lazăr
                </p>
            </Link>
            <ul className="pt-8">
                {navigationItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.path}
                            className="transition-colors font-helvetica-extra-bold text-xs"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
