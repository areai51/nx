import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html className="h-full scroll-smooth" lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="apple-mobile-web-app-title" content="Nx" />
        <meta name="application-name" content="Nx" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="theme-color" content="#FFFFFF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </Head>
      <body className="h-full bg-white text-slate-700 antialiased selection:bg-blue-500 selection:text-white dark:bg-slate-900 dark:text-slate-400 dark:selection:bg-sky-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
