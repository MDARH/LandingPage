import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';

export default function Home() {
    const { logo, content, text_color, social_links = [], has_countdown } = usePage().props;

    const platformIcons = {
        facebook: <Facebook className="w-8 h-8 text-white bg-blue-500 rounded-sm" />,
        twitter: <Twitter className="w-5 h-5" />,
        linkedin: <Linkedin className="w-5 h-5" />,
        youtube: <Youtube className="w-5 h-5" />,
        instagram: <Instagram className="w-5 h-5" />,
    };

    return (
        <div className='flex justify-center items-center p-6 min-h-screen bg-lime-100'>
            <Head title="Under Construction" />
            <div className={`max-w-2xl text-center ${text_color}`}>
                <h1 className="mb-4 text-4xl font-bold text-yellow-600">This site is under construction</h1>

                {logo && (
                    <img
                        src={logo}
                        alt="Logo"
                        className="mx-auto my-2 w-52 rounded"
                    />
                )}

                <div
                    className="mx-auto my-2 scale-125 prose"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* {has_countdown && (
                    <div className="mt-6">
                        <p className="text-xl font-semibold">Countdown Here</p>
                    </div>
                )} */}

                {social_links.length > 0 && (
                    <div className="flex justify-center mt-6 space-x-4">
                        {social_links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="flex items-center text-xl transition hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {platformIcons[link.platform]} {link.platform}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
