"use client";

import Image from "next/image";

import Avatar from "../../../public/images/avatar.png";

const Home = () => {
    return (
        <div className="flex justify-center mt-[5%] text-sm md:text-base break-words">
            <div className="text-center text-white">
                <div className="mb-10 flex justify-center">
                    <Image
                        src={Avatar}
                        alt="avatar"
                        className="rounded-full object-cover w-36 h-36"
                    />
                </div>
                <samp>
                    👋 Hello there, I&apos;m Bao (Yanji), Frontend developer
                    from CanTho, Vietnam.
                </samp>
                <div>
                    <div className="mb-2">learning</div> .
                    <a
                        className="text-amber-400 underline me-2"
                        href="https://yanji-porfolio.vercel.app/"
                    >
                        me
                    </a>
                    .
                    <a className="text-amber-400 underline me-2" href="/">
                        blog
                    </a>
                    .
                    <a className="text-amber-400 underline me-2" href="/">
                        resume
                    </a>
                    .
                    <a className="text-amber-400 underline me-2" href="/">
                        projects
                    </a>
                    .
                    <a className="text-amber-400 underline me-2" href="/">
                        tweets
                    </a>
                    .
                    <a className="text-amber-400 underline me-2" href="/">
                        contacts
                    </a>
                    <br />
                    <a
                        className="text-amber-400 underline me-2"
                        href="mailto:ngtrgiabao251002@gmail.com"
                    >
                        mail
                    </a>
                    .
                    <a
                        className="text-amber-400 underline me-2"
                        href="https://gist.github.com/ngtrgiabao"
                    >
                        gist
                    </a>
                    .
                    <a
                        className="text-amber-400 underline me-2"
                        href="https://github.com/ngtrgiabao/use"
                    >
                        use
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
