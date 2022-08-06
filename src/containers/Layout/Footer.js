import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 bottom-0 shadow-inner">
        <div>
          <div className="grid gap-10 grid-cols-5 p-4 ">
            <section className="col-span-5 md:col-span-2">
              <h3 className="font-bold text-gray-500 mb-2">About project</h3>
              <p>
                This project is a blog project. The user must be able to like
                and bookmark the posts. The user must be able to post comments
                and reply to other people's comments. The user can be
                authenticated with <span className="font-bold text-violet-500"> httpOnly cookies</span>  This project is made by <span className="font-bold text-violet-500">Next.js</span> and is <span className="font-bold text-violet-500">SSR</span> project.
              </p>
            </section>
            <section className="col-span-5 md:col-span-1">
              <h3 className="font-bold text-gray-500">site parts</h3>
              <nav>
                <ul>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    products
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    blogs
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    about us
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    start learning
                  </li>
                </ul>
              </nav>
            </section>
            <section className="col-span-5 md:col-span-1">
              <h3 className="font-bold text-gray-500">products</h3>
              <nav>
                <ul>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    React course
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    Next course
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    Node course
                  </li>
                  <li className="list-disc py-2 list-inside text-gray-400">
                    Tailwind course
                  </li>
                </ul>
              </nav>
            </section>
            <section className="col-span-5 md:col-span-1">
              <img
                src="https://cdn.zarinpal.com/badges/trustLogo/1.svg"
                className="h-24 w-20 mb-3"
                alt="zarinpal"
              />
              <h2 className="font-bold text-gray-600">
                Made By : Ashkan Valizadeh
              </h2>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
