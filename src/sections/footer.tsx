import Image from "next/image";

const navigation = {
  connect: [
    { name: "Book Meeting", href: "" },
    {
      name: "Twitter",
      href: "https://twitter.com/justansub",
    },
    {
      name: "Github",
      href: "https://www.youtube.com/@SpeedyBrand-SEO",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/speedy-brand-inc/",
    },
  ],
  company: [
    { name: "Blogs", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Affiliate Partner", href: "/" },
    { name: "AI For Enterprise", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="font-brand w-full ">
      <h2 id="footer-heading" className="sr-only">
        Izis Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <svg
              width="49"
              height="40"
              viewBox="0 0 49 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                fill="#FF0A0A"
              ></path>
            </svg>
            <p className="text-md max-w-xs leading-6 text-gray-300">
              Not your average component library - build faster, launch sooner.
            </p>
            <div className="flex text-sm text-gray-300">
              <span>Made with ❤️ by Ansub.</span>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-200">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6   text-gray-600 dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pb-8 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Burak Bilen. All rights reserved.
            Powered by Motion Provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
