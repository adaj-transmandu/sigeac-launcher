import NoSlidePage from "@/components/sliding/NoSlidePage";
import Head from "next/head";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-clouds bg-bottom animate-moveBackground">
            <Head>
                <title>SIGEAC - Launcher</title>
            </Head>
            <NoSlidePage />
        </div>
    );
}
