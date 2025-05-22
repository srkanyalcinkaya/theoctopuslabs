import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'QR Code Generator | The Octopus Labs',
    description: 'Create customizable QR codes for free. Add logos, change colors, and adjust error correction levels.',
    keywords: 'QR code, QR code generator, customizable QR code, logo addition, QR code download',
    openGraph: {
        title: 'QR Code Generator | The Octopus Labs',
        description: 'Create customizable QR codes for free. Add logos, change colors, and adjust error correction levels.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'QR Code Generator | The Octopus Labs',
        description: 'Create customizable QR codes for free. Add logos, change colors, and adjust error correction levels.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function QRLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 