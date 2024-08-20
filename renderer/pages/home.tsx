import LoginPage from "@/components/sliding/LoginPage";
import NoSlideLoginPage from "@/components/sliding/NoSlideLoginPage";
import Head from "next/head";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-300 bg-indigo-400 to-blue-600">
            <Head>
                <title>SIGEAC - Launcher</title>
            </Head>
            <LoginPage />
        </div>
    );
}
