import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./(dashboard)/_components/navbar";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dev Note",
    description: "Created by Yanji",
    icons: {
        icon: ["/favicon.ico"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="bg-primary min-h-screen">
                        <Navbar />
                        <Container>
                            {children}
                        </Container>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
