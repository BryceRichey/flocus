import "../globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function AuthRootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>{children}</body>
            </UserProvider>
        </html>
    );
}
