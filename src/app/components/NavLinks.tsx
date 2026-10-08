import Link from "next/link";
import React from "react";

interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navs: Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);

  return (
    <div className="mt-4 w-full overflow-x-auto px-3 sm:mt-5">
      <div className="mx-auto flex w-max items-center justify-center gap-5 text-sm sm:gap-7 sm:text-base">
        {/* Home */}
        <Link
          href="/"
          className="shrink-0 font-semibold text-gray-700 transition-all duration-300 ease-out hover:scale-110 hover:text-red-700"
        >
          হোম
        </Link>

        {/* Categories */}
        {filteredNavs.map((n) => (
          <Link
            key={n.slug}
            href={`/category/${n.slug}`}
            className="shrink-0 font-semibold text-gray-700 transition-all duration-300 ease-out hover:scale-110 hover:text-red-700"
          >
            {n.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;

// import Link from "next/link";
// import React from "react";

// interface Navs {
//   slug: string;
//   title: string;
//   topicId: string | null;
//   url: string;
//   scrapable: string;
// }

// const NavLinks = async () => {
//   const res = await fetch(
//     "https://news-api-v2.vercel.app/api/categories"
//   );

//   const data = await res.json();

//   const navs: Navs[] = data.data;
//   const filteredNavs = navs.filter((n) => n.scrapable);

//   return (
//     <div className="mt-5 flex justify-center gap-7 text-md">
//       <Link
//         href="/"
//         className="font-semibold text-gray-700 transition-all duration-300 ease-out hover:scale-110 hover:text-red-700"
//       >
//         হোম
//       </Link>

//       {filteredNavs.map((n, i) => (
//         <Link
//           key={i}
//           href={`/category/${n.slug}`}
//           className="font-semibold text-gray-700 transition-all duration-300 ease-out hover:scale-110 hover:text-red-700"
//         >
//           {n.title}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default NavLinks;

// import Link from "next/link";
// import React from "react";

// interface Navs {
//   slug: string;
//   title: string;
//   topicId: string | null;
//   url: string;
//   scrapable: string;
// }

// const NavLinks = async () => {
//   const res = await fetch(
//     "https://news-api-v2.vercel.app/api/categories"
//   );

//   const data = await res.json();
//   const navs: Navs[] = data.data;

//   const filteredNavs = navs.filter((n) => n.scrapable);

//   return (
//     <nav className="sticky top-0 z-40  bg-base-100/90 backdrop-blur-md">
//       <div className="mx-auto max-w-7xl overflow-x-auto px-4">
//         <div className="flex min-w-max items-center justify-center gap-1 py-2">

//           {/* Home */}
//           <Link
//             href="/"
//             className="
//               group relative rounded-lg px-4 py-2
//               text-md font-semibold
//               text-base-content/80
//               transition-all duration-300
//               hover:bg-primary
//               hover:text-primary-content
//             "
//           >
//             হোম

//             <span
//               className="
//                 absolute bottom-1 left-1/2 h-0.5 w-0
//                 -translate-x-1/2
//                 rounded-full bg-current
//                 transition-all duration-300
//                 group-hover:w-1/2
//               "
//             />
//           </Link>

//           {/* Categories */}
//           {filteredNavs.map((n) => (
//             <Link
//               key={n.slug}
//               href={`/${n.slug}`}
//               className="
//                 group relative rounded-lg px-4 py-2
//                 text-md font-medium
//                 text-base-content/70
//                 transition-all duration-300
//                 hover:bg-primary/10
//                 hover:text-primary
//               "
//             >
//               {n.title}

//               {/* Hover underline */}
//               <span
//                 className="
//                   absolute bottom-1 left-1/2 h-0.5 w-0
//                   -translate-x-1/2
//                   rounded-full bg-primary
//                   transition-all duration-300
//                   group-hover:w-1/2
//                 "
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavLinks;