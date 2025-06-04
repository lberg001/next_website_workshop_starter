import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <Layout>
            <body className="antialiased">
            <Main />
            <NextScript />
            </body>
        </Layout>
    </Html>
  );
}
