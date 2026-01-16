import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle ? `${pageTitle} - Agnostic Infrastructure Solutions for Drones` : 'DragonFlyPads - Agnostic Infrastructure Solutions for Drones'}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="DragonFlyPads Leads the Way with Turn-Key Solutions, Providing a Grid of Secure, Modular, Mobile, and Economical Vertipads." />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);
 
export default SEO;
