import Link from "next/link";


const Links = () => {
    const links = [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Projects",
        url: "/projects",
      },
      {
        title: "Certificates",
        url: "/certificados",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ];

    return (
        <div>
          {links.map((link) => (
            <Link href={link.url} key={link.title} className="pr-4 pl-4 pt-2 pb-2 hover:rounded-lg hover:border border-slate-100">
              {link.title}
            </Link>
          ))}
        </div>
      );
    };

export default Links;