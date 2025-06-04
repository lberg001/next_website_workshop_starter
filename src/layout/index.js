import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Layout({ children }) {
    return (
        <div
            className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
        >
            <div className="flex min-h-screen p-4">
                {/* Sidebar */}
                <div className="w-[150px]">
                    <Navbar />
                </div>

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
