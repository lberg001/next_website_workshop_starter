import Head from 'next/head';
import {NextSeo} from "next-seo";

export default function Home() {
  return (
      <>
          <Head>
              {/*Here are our SEO information we need to add this on every page we have  */}
              <NextSeo
                  title="David Lazar"
                  description="This is my website"
                  openGraph={{
                      type: 'website',
                      url: 'https://url-of-your-website.com/',
                      title: 'David Lazar',
                      description: 'Im David Lazar a Computational Artist',
                      images: [
                          {
                              url: '/coacroach.jpg',
                              width: 800,
                              height: 600,
                              alt: 'Og Image Alt',
                          },
                      ],
                  }}
              />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div>
              {/*Here we will have the data of our page*/}
              welcome to my website
          </div>
      </>
  );
}
