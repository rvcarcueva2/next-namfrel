import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party-List | NAMFREL",
  description: "NAMFREL Website",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            {children}
        </main>
    );
}
