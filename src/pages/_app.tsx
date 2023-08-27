import type { AppProps } from "next/app";

import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${manrope.className}`}>
            <Component {...pageProps} />
        </main>
    );
}
