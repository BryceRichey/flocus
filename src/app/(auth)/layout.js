import "../globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';

import Header from "@/components/header/header";

export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <Header />
                    {children}
                </body>
            </UserProvider>
        </html>
    );
}
