import Logo from "@/components/ui/logo";
import { Home } from "lucide-react";
import Link from "next/link";


export default function login() {
    return (
        <div className="login relative bg-[#F97316] w-screen h-screen flex items-center justify-center">
            <Link href="/" className="back text-white absolute top-10 left-10 border-2 border-white p-1">
                <Home />
            </Link>
            <div className="flex flex-col items-center gap-3 bg-white p-5">
                <Logo />
                <h1 className="w-full text-2xl text-center">Sign In</h1>
                <p>Enter your credentials to gain access.</p>
                <form className="flex flex-col w-full gap-3 text-right">
                    <label htmlFor="username">
                        <input type="text" name="username" id="username" placeholder="Username" />
                    </label>
                    <label htmlFor="password">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </label>
                    <Link className="dotted text-[#1E3A8A]" href="/signup">Create an Account</Link>
                    <button className="bg-[#1E3A8A] text-white p-2 cursor-pointer" type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}