import type { AppProps } from "next/app";

import Head from "next/head";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
                />
            </Head>
            <main className={`${manrope.className}`}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
