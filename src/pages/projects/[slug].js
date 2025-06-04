import Head from 'next/head';
import {NextSeo} from "next-seo";
import Link from "next/link";
import { useRouter } from 'next/router';
import {projects} from "@/data/projects";

export default function Project() {
    const router = useRouter();
    const { slug } = router.query;

    // Find current project based on slug
    const currentProject = projects.find(item => item.slug === slug);

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
            <div className="flex min-h-screen">
                <div>
                    <p className="text-sm">
                        Projects:
                    </p>
                    <ul className="pt-7">
                        {projects.map((item) => {
                            const isActive = item.slug === slug;
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={`/projects/${item.slug}`}
                                        className={`transition-colors font-helvetica-extra-bold text-xs ${
                                            isActive ? 'underline' : ''
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/*Here we will have the data of our page*/}
                <div className="flex-1 pl-12">
                    {currentProject ? currentProject.title : 'Project not found'}
                </div>
            </div>
        </>
    );
}