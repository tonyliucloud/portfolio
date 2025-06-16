import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.pageX, y: e.pageY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    function useTypewriter(words, speed = 90, pause = 1500) {
        const [text, setText] = useState('');
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [waiting, setWaiting] = useState(false);

        useEffect(() => {
            if (waiting) return;

            const currentWord = words[index % words.length];

            const update = () => {
                setText((prev) => {
                    if (!isDeleting) {
                        const next = currentWord.substring(0, prev.length + 1);
                        if (next === currentWord) {
                            setWaiting(true);
                            setTimeout(() => {
                                setIsDeleting(true);
                                setWaiting(false);
                            }, pause);
                        }
                        return next;
                    } else {
                        const next = currentWord.substring(0, prev.length - 1);
                        if (next === '') {
                            setIsDeleting(false);
                            setIndex((prevIndex) => prevIndex + 1);
                        }
                        return next;
                    }
                });
            };

            const timer = setTimeout(update, isDeleting ? speed / 2 : speed);
            return () => clearTimeout(timer);
        }, [text, isDeleting, index, waiting, words, speed, pause]);

        return text;
    }

    const organizations = [
        {
            name: 'Isawebapp',
            description: 'Multiple web app and network tools online.',
            link: 'https://github.com/isawebapp',
        }
    ];

    const projects = [
        {
            title: 'Shrinx',
            description: 'Shrinx is a modern, minimalistic URL shortener that transforms long links into concise, trackable URLs. Fast, secure, and easy to integrate with a RESTful API.',
            link: 'https://github.com/isawebapp/Shrinx',
        },
        {
            title: 'Arkiv',
            description: 'A full-stack file library system for managing, storing, and accessing files with user authentication, file exploration, and search functionality. Secure, fast, and easy to use.',
            link: 'https://github.com/isawebapp/Arkiv',
        },
        {
            title: 'Librix',
            description: 'A front-end NEXT.JS application for HTTP/WebDAV–style servers.',
            link: 'https://github.com/isawebapp/Librix',
        },
    ];

    const phrases = [
        "React",
        "Node.js",
        "Next.js",
        "Python",
        "JavaScript",
        "Docker",
        "SQLite",
        "MySQL"
    ];

    return (
        <>
            <Head>
                <title>Tony Liu's Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <h1 className="text-white font-bold text-2xl">Tony Liu's Portfolio</h1>
                    <nav className="space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition font-medium">Home</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition font-medium">Projects</a>
                        <a href="#github" className="text-gray-300 hover:text-white transition font-medium">Github</a>
                    </nav>
                </div>
            </header>

            <main id="home" className="relative overflow-hidden pt-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white scroll-smooth">

                <div
                    className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl z-10"
                    style={{
                        transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                />

                <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 animate-fadeIn">
                        Hi, I'm Tony Liu
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 animate-fadeIn delay-150">
                        Full Stack Learner | {useTypewriter(phrases)} <span className="text-white blinking-cursor">|</span>
                    </p>
                    <a
                        href="#projects"
                        className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                    >
                        View My Projects
                    </a>
                </section>


                <section id="projects" className="max-w-6xl mx-auto px-6 py-16 text-center relative z-20">

                    <h3 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 animate-fadeIn">
                        My Project Organizations
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        {organizations.map((org, index) => (
                            <a
                                key={index}
                                href={org.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center justify-center w-64 h-36 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-105 p-4"
                            >
                                <span className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors text-center">
                                    {org.name}
                                </span>
                                <p className="text-sm text-gray-400 group-hover:text-gray-200 mt-2 text-center">
                                    {org.description}
                                </p>
                            </a>
                        ))}
                    </div>


                    <h3 className="text-4xl font-bold text-center mb-12 text-slate-300 animate-fadeIn">
                        Projects
                    </h3>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="border border-gray-700 rounded-xl p-6 bg-gradient-to-br from-gray-800 to-gray-700 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-slideUp"
                            >
                                <h4 className="text-2xl font-semibold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="text-slate-400 hover:text-white hover:underline transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        ))}
                    </div>

                </section>


                <section id="github" className="max-w-6xl mx-auto p-8 text-center relative z-20">
                    <h3 className="text-4xl font-bold text-slate-300 mb-6 animate-fadeIn">
                        Find me on GitHub
                    </h3>
                    <p className="text-gray-400 mb-8 animate-fadeIn delay-150">
                        Check out more of my work, experiments, and open-source contributions.
                    </p>
                    <a
                        href="https://github.com/tonyliucloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-slate-700 to-slate-500 hover:from-slate-600 hover:to-slate-400 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                        Visit My GitHub →
                    </a>
                </section>
            </main>

            <footer className="text-center text-gray-600 bg-black p-6">
                © {new Date().getFullYear()} Tony-Liu.com | TonyLiu.cloud. All rights reserved.
            </footer>
        </>
    );
}
