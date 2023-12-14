import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sarasavi Gee Sisila 2024 | BESS",
	description: "Sarasavi Gee Sisila is the premier classical music event at the University of Moratuwa",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`min-h-screen ${inter.className} bg-img-gradient`}
				style={{
					backgroundImage: "url('/bg.jpg')",
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					minHeight: '100vh',
				}}
			>
				{children}
				<Footer />
			</body>
		</html>
	);
}
