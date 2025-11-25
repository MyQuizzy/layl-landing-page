import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full">
            <section id="get-started" className="py-24 bg-black text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your hiring?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Join forward-thinking companies using Layl to find and hire the best talent, faster.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
                    >
                        Get started
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
            <footer id="contact" className="bg-black text-white py-16 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-white/60 mb-4 md:mb-0">
                            <p>&copy; {new Date().getFullYear()} Layl. All rights reserved.</p>
                            <p className="mt-2">
                                Contact us:{" "}
                                <a href="mailto:hello@getlayl.com" className="text-white hover:text-white/80">
                                    hello@getlayl.com
                                </a>
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-white/60 hover:text-white">
                                Privacy
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}