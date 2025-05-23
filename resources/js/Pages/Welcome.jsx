import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center p-4 min-h-screen bg-gray-100">
            <Head title="Under Construction" />

            {/* Logo Placeholder */}
            <div className="mb-8 text-4xl font-bold">LOGO</div>

            <div className="max-w-md text-center">
                <h1 className="mb-6 text-3xl font-bold">This site is under construction</h1>

                <div className="space-y-2">
                    <p>Owner name is</p>
                    <p className="text-xl font-semibold">Shohag bin Saifullah</p>
                    <p>CEO</p>
                    <p>Rapid Solution BD &</p>
                    <p>RSPD Properties</p>
                </div>
            </div>
        </div>
    );
}
