import Providers from "./Providers";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className=" bg-gray-700">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
