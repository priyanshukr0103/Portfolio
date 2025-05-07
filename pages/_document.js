import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="stylesheet" href={`${basePath}/_next/static/css/app/layout.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
