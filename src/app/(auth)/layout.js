import "../globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';

import Header from "@/components/header/header";

export default function AuthRootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <UserProvider>
                <body className="h-full flex flex-col">
                    <Header />
                    <div className="flex-grow">
                    {children}
                    </div>
                </body>
            </UserProvider>
        </html>
    );
}
