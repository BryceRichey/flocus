import '../../public/output.css';
import Navbar from "../components/navbar/Navbar";

export const metadata = {
    title: 'Flocus'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}