import React from 'react';
import { Head, usePage } from '@inertiajs/react';

const Home = () => {
    const { title, logos = [], content, text_color, social_links = [], has_countdown } = usePage().props;
    const platformIcons = {
        facebook: (
            <svg
                className="w-6 h-6 text-orange-600 transition-colors md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-orange-800"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
        ),
        twitter: (
            <svg
                className="w-6 h-6 text-orange-600 transition-colors md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-orange-800"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
        youtube: (
            <svg
                className="w-6 h-6 text-orange-600 transition-colors md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-orange-800"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
        linkedin: (
            <svg
                className="w-6 h-6 text-orange-600 transition-colors md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-orange-800"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
        instagram: (
            <svg
                className="w-6 h-6 text-orange-600 transition-colors md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-orange-800"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
        ),
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-yellow-100 sm:p-6 md:p-8 lg:p-12">
            <Head title="Under Construction" />
            {/* Construction Header */}
            <h1
                className="mb-6 text-3xl font-bold text-center text-orange-600 drop-shadow-lg sm:mb-8 md:mb-10 lg:mb-12 sm:text-4xl md:text-5xl lg:text-7xl"
                style={{ color: text_color }}
            >
                {title}
            </h1>

            {/* Construction Image */}
            <div className="flex gap-2 sm:gap-3 md:gap-4">
                {logos.length > 0 && (
                    logos.map((logo, index) => (
                        <img
                            key={index}
                            src={`storage/${logo}`}
                            alt="Logo"
                            className="object-contain mb-6 max-h-32 shadow-lg sm:mb-8 md:mb-10 sm:max-h-40 md:max-h-48 lg:max-h-52"
                        />
                    ))
                )}
            </div>

            {/* Owner Info */}
            <div
                className="mb-6 max-w-xs text-sm text-center text-gray-800 sm:mb-8 md:mb-10 sm:text-base md:text-lg lg:text-xl sm:max-w-md md:max-w-lg lg:max-w-2xl"
                dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Social Links */}
            {social_links.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-center mt-4 sm:gap-6 md:gap-8 sm:mt-6 md:mt-8">
                    {social_links.map((link, index) => (
                        <div key={index} className="flex flex-col items-center space-y-1">
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-800"
                            >
                                {platformIcons[link.platform]}
                            </a>
                            {link.title && (
                                <span className="text-xs font-bold text-orange-600 sm:text-sm md:text-base lg:text-lg dark:text-orange-800">
                                    {link.title}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Footer Note */}
            <p className="mt-6 max-w-xs text-xs text-center text-gray-600 sm:mt-8 md:mt-10 sm:text-sm md:text-base lg:text-lg sm:max-w-md md:max-w-lg">
                We're working hard to bring you something awesome! Check back soon.
            </p>
        </div>
    );
};

export default Home;
