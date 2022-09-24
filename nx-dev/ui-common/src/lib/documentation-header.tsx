import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AlgoliaSearch } from '@nrwl/nx-dev/feature-search';
import { ThemeSwitcher } from '@nrwl/nx-dev/ui-theme';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Menu({ tabs }: { tabs: any[] }): JSX.Element {
  return (
    <div className="hidden sm:block">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <Link key={tab.name} href={tab.href}>
            <a
              className={cx(
                tab.current
                  ? 'border-blue-500 text-blue-600 dark:border-sky-500 dark:text-sky-500'
                  : 'border-transparent hover:text-slate-900 dark:hover:text-sky-400',
                'whitespace-nowrap border-b-2 py-2 text-sm font-medium'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function DocumentationHeader({
  isNavOpen,
  toggleNav,
}: {
  isNavOpen: boolean;
  toggleNav: (value: boolean) => void;
}): JSX.Element {
  const router = useRouter();
  const isNxCloud: boolean = router.asPath.startsWith('/nx-cloud');
  const isPackages: boolean = router.asPath.startsWith('/packages');
  const isPlugins: boolean = router.asPath.startsWith('/plugins');
  const isRecipes: boolean = router.asPath.startsWith('/recipes');
  const isNx: boolean = !isNxCloud && !isPackages && !isPlugins && !isRecipes;

  const sections = [
    { name: 'Home', href: '/', current: false },
    { name: 'Nx', href: '/getting-started/intro', current: isNx },
    {
      name: 'Nx Cloud',
      href: '/nx-cloud/intro/what-is-nx-cloud',
      current: isNxCloud,
    },
    {
      name: 'Packages',
      href: '/packages',
      current: isPackages,
    },
    {
      name: 'Plugins',
      href: '/community#plugin-directory',
      current: isPlugins,
    },
    {
      name: 'Recipes',
      href: '/recipes/all',
      current: isRecipes,
    },
  ];

  const communityLinks = [
    {
      name: 'Slack',
      label: 'Community channel',
      href: 'https://go.nrwl.io/join-slack?utm_source=nx.dev',
      icon: (props: any) => (
        <svg
          fill="currentColor"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>Slack</title>
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      label: 'Latest news',
      href: 'https://twitter.com/NXdevtools?utm_source=nx.dev',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <title>Twitter</title>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Youtube',
      label: 'Youtube channel',
      href: 'https://www.youtube.com/c/Nrwl_io?utm_source=nx.dev',
      icon: (props: any) => (
        <svg
          fill="currentColor"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>YouTube</title>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Github',
      label: 'Nx is open source, check the code on Github',
      href: 'https://github.com/nrwl/nx?utm_source=nx.dev',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
          <title>Github</title>
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/60 print:hidden">
      <div className="mx-auto flex w-full items-center sm:space-x-6 lg:py-4 lg:px-8">
        {/*MOBILE MENU*/}
        <div className="flex w-full items-center lg:hidden">
          <button
            type="button"
            className="flex px-4 py-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => toggleNav(!isNavOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            {isNavOpen ? (
              <XMarkIcon className="mr-3 h-6 w-6" />
            ) : (
              <Bars3Icon className="mr-3 h-6 w-6" aria-hidden="true" />
            )}
            <span className="font-medium">
              {sections.find((x) => x.current)?.name}
            </span>
          </button>
        </div>
        {/*LOGO*/}
        <div className="flex items-center">
          <Link href="/getting-started/intro">
            <a className="flex items-center px-4 text-slate-900 dark:text-white lg:px-0">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
              >
                <title>Nx</title>
                <path d="M11.987 14.138l-3.132 4.923-5.193-8.427-.012 8.822H0V4.544h3.691l5.247 8.833.005-3.998 3.044 4.759zm.601-5.761c.024-.048 0-3.784.008-3.833h-3.65c.002.059-.005 3.776-.003 3.833h3.645zm5.634 4.134a2.061 2.061 0 0 0-1.969 1.336 1.963 1.963 0 0 1 2.343-.739c.396.161.917.422 1.33.283a2.1 2.1 0 0 0-1.704-.88zm3.39 1.061c-.375-.13-.8-.277-1.109-.681-.06-.08-.116-.17-.176-.265a2.143 2.143 0 0 0-.533-.642c-.294-.216-.68-.322-1.18-.322a2.482 2.482 0 0 0-2.294 1.536 2.325 2.325 0 0 1 4.002.388.75.75 0 0 0 .836.334c.493-.105.46.36 1.203.518v-.133c-.003-.446-.246-.55-.75-.733zm2.024 1.266a.723.723 0 0 0 .347-.638c-.01-2.957-2.41-5.487-5.37-5.487a5.364 5.364 0 0 0-4.487 2.418c-.01-.026-1.522-2.39-1.538-2.418H8.943l3.463 5.423-3.379 5.32h3.54l1.54-2.366 1.568 2.366h3.541l-3.21-5.052a.7.7 0 0 1-.084-.32 2.69 2.69 0 0 1 2.69-2.691h.001c1.488 0 1.736.89 2.057 1.308.634.826 1.9.464 1.9 1.541a.707.707 0 0 0 1.066.596zm.35.133c-.173.372-.56.338-.755.639-.176.271.114.412.114.412s.337.156.538-.311c.104-.231.14-.488.103-.74z" />
              </svg>
              <span className="ml-2 text-xl font-bold uppercase tracking-wide">
                Docs
              </span>
            </a>
          </Link>
        </div>
        {/*SEARCH*/}
        <div className="hidden w-full max-w-sm lg:inline">
          <AlgoliaSearch />
        </div>
        {/*NAVIGATION*/}
        <div className="hidden flex-grow lg:flex">{/* SPACER */}</div>
        <div className="hidden flex-shrink-0 lg:flex">
          <nav className="items-justified hidden justify-center space-x-4 text-xs lg:flex">
            <ThemeSwitcher />
            <a
              title="Check Nx consluting with Nrwl"
              href="https://nrwl.io/?utm_source=nx.dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center opacity-50 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2"
            >
              Created by
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="ml-2 h-10 w-10"
              >
                <title>Nrwl</title>
                <path d="M3.357 8.258a3.424 3.424 0 00-.845.123l.054-.02a3.437 3.437 0 00-.841.346 3.437 3.437 0 00-.262.168 3.437 3.437 0 00-.11.078 3.424 3.424 0 00-.025.022 3.437 3.437 0 00-.01.005 3.424 3.424 0 00-.103.084 3.437 3.437 0 00-.115.104 3.437 3.437 0 00-.05.045 3.424 3.424 0 00-.08.08 3.424 3.424 0 00-.099.107 3.437 3.437 0 00-.03.034 3.424 3.424 0 00-.071.086 3.437 3.437 0 00-.034.04 3.424 3.424 0 00-.066.088 3.437 3.437 0 00-.006.008 3.424 3.424 0 00-.072.1 3.437 3.437 0 00-.014.02 3.424 3.424 0 00-.082.132 3.424 3.424 0 00-.074.127 3.437 3.437 0 00-.012.026 3.424 3.424 0 00-.062.12 3.424 3.424 0 00-.067.143 3.424 3.424 0 00-.054.135 3.437 3.437 0 00-.008.02 3.424 3.424 0 00-.131.437 3.424 3.424 0 00-.031.152 3.424 3.424 0 00-.026.149 3.437 3.437 0 000 .013 3.424 3.424 0 00-.027.303A3.424 3.424 0 000 11.68a3.437 3.437 0 000 .04 3.424 3.424 0 00.004.124A3.424 3.424 0 00.016 12a3.424 3.424 0 00.015.14 3.437 3.437 0 00.01.057 3.424 3.424 0 00.018.108 3.437 3.437 0 000 .004 3.424 3.424 0 00.025.123 3.437 3.437 0 00.037.15 3.437 3.437 0 00.096.297 3.437 3.437 0 00.056.144 3.437 3.437 0 00.432.745c.014.02.025.024.04.043a3.424 3.424 0 00.007.01 3.424 3.424 0 00.305.33l.011.013c.1.09.16.132.137.129.008.006.02.01.03.018a3.424 3.424 0 00.017.017.711.711 0 01-.205-.08.683.683 0 00-.39-.088.696.696 0 00-.608.947 1.993 1.993 0 01.564-.12 2.088 2.088 0 01.34.007 1.707 1.707 0 00.283.006c.05-.004.098-.01.147-.018a1.714 1.714 0 00.584-.203 3.424 3.424 0 00.437.17 4.43 4.43 0 002.989-.193.528.528 0 00.115-.076.179.179 0 00.076.03l1.789.169v.863H8.75v-.734l1.12.105-4.204-.754a.111.111 0 00-.014-.004c-.01-.1-.095-.172-.13-.218a.134.134 0 01-.03-.07 1.64 1.64 0 00-1.496-1.52.504.504 0 00-.18-.193.503.503 0 01-.187-.4.56.56 0 00-.498.44 1.393 1.393 0 01-.377-2.222 1.798 1.798 0 011.312-.563A1.824 1.824 0 015.83 10.96a.914.914 0 01-.543.32.904.904 0 00-.736.748c.35 0 .585.477 1.236.477a.59.59 0 00.547-.367.592.592 0 00.549.367 1.17 1.17 0 00.49-.106v2.002l1.377.327v-1.592l2.193 2.605H12.1v-4.89h-1.38v2.605L8.53 10.852H7.373v.427c-.283-.05-.556-.255-.65-.52a3.424 3.424 0 00-3.366-2.501zM22.109 9.96v4.414c0 1.186.766 1.336 1.485 1.336.219 0 .406-.02.406-.02v-1.03s-.078.007-.164.007c-.305 0-.375-.12-.375-.453V9.96zm-6.816 1.932a2.057 2.057 0 00-.709.128 1.253 1.253 0 00-.535.385v-.453h-1.285v3.79h1.347v-1.74c0-.316.081-.551.244-.704.164-.154.39-.23.678-.23a2.937 2.937 0 01.307.017v-1.193a2.057 2.057 0 00-.047 0zm.584.06l1.094 3.787h1.306l.477-1.736.45 1.736h1.306l1.094-3.787h-1.186l-.54 1.932-.52-1.932h-1.15l-.542 1.912-.512-1.912zm-12.281 2.14c.03 0 .07.016.117.027.092.023.17.02.15.108a.171.171 0 01-.332-.08c.01-.044.033-.056.065-.055z" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
      <div className="mx-auto hidden w-full items-center px-4 sm:space-x-10 sm:px-6 lg:flex lg:px-8">
        <Menu tabs={sections} />
        <div className="flex-grow"></div>
        <nav aria-labelledby="community-links" className="space-x-2">
          {communityLinks.map((item) => (
            <a
              key={item.name}
              title={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex p-1"
            >
              <span className="sr-only">{item.label}</span>
              <item.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
