import LoginPage from "@/components/sliding/LoginPage";
import Head from "next/head";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-sky-100">
            <Head>
                <title>SIGEAC - Launcher</title>
            </Head>
            <LoginPage />
        </div>
    );
}
