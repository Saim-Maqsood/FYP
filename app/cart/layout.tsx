import "../../app/globals.css";
import {
    Protect
} from '@clerk/nextjs'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Protect>
            {children}
        </Protect>
        </>
    );
}
