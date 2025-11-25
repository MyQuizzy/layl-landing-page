"use client";

import { ArrowRight, Clock, Zap, Shield, BarChart, SearchCheck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center bg-[#122429]">
                    <div className="container mx-auto px-4 pt-24 relative z-10">
                        <div className="max-w-8xl">
                            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                                AI-powered screening.
                                <br />
                                Human decisions.
                            </h1>
                            <p className="text-3xl text-white/90 mb-8">
                                For recruiters and hiring managers who want to focus on people, not paperwork.
                            </p>
                            <Link
                                href="#get-started"
                                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
                            >
                                Get started
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* AI Personas Section */}
                <section className="py-36 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                            Revolutionize your recruitment workflows
                        </h2>
                        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                            {`Boost your recruitment process with Layl's suite of AI tools, delivering faster, smarter hiring decisions.`}
                        </p>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="relative bg-black rounded-2xl p-8 overflow-hidden text-white">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Layl Assistant</h3>
                                    <p className="mb-6">
                                        Automatically screens and ranks candidates, enriches applications, and provides
                                        detailed insights.
                                    </p>
                                    <div className="flex items-center text-sm">
                                        <Clock className="w-4 h-4 mr-2" /> Available 24/7
                                    </div>
                                </div>
                            </div>
                            <div className="relative bg-black rounded-2xl p-8 overflow-hidden text-white">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">ATS Connectors</h3>
                                    <p className="text-lg mb-6">
                                        Seamlessly connect with your existing ATS to import candidates and sync
                                        screening results.
                                    </p>
                                    <div className="flex items-center text-sm">
                                        <Shield className="w-4 h-4 mr-2" /> Enterprise-ready
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-32 bg-[#D5CECC]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
                            AI tools transform your workforce
                        </h2>
                        <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
                            Make Layl your expert recruiter — analyzing every CV the way a seasoned hiring manager
                            would, but at scale
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="bg-[#FBF6F5] p-8 rounded-xl h-64 flex items-center justify-center">
                                    <div className="text-8xl font-bold mb-2">70%</div>
                                </div>
                                <div className="px-2 py-6">
                                    <p className="text-black text-2xl font-bold">Faster screening time</p>
                                    <div className="mt-2 text-gray-600">
                                        Accelerate the screening process by 70%, allowing you to spend more time on
                                        interviews and less on reviewing resumes.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#FBF6F5] p-8 rounded-xl h-64 flex items-center justify-center">
                                    <div className="text-8xl font-bold mb-2">40%</div>
                                </div>
                                <div className="px-2 py-6">
                                    <p className="text-black text-2xl font-bold">Lower cost per hire</p>
                                    <div className="mt-2 text-gray-600">
                                        Reduce hiring expenses by automating candidate screening and improving
                                        efficiency, cutting costs by 40% compared to traditional methods.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#FBF6F5] p-8 rounded-xl h-64 flex items-center justify-center">
                                    <div className="text-7xl font-bold mb-2">20 days</div>
                                </div>
                                <div className="px-2 py-6">
                                    <p className="text-black text-2xl font-bold">Faster time to fill</p>
                                    <div className="mt-2 text-gray-600">
                                        Streamline the hiring process to fill positions 55% faster than the industry
                                        average, reducing time-to-hire to just 20 days.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-32 bg-[#122429]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white">
                            Reinvent your hiring process
                        </h2>
                        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg">
                            Empower your hiring with AI-driven solutions designed to streamline screening, enrich
                            applications with context, and provide actionable insights for smarter decisions.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#29393E] p-8 rounded-xl">
                                <Zap className="w-12 h-12 text-[#4B6D78] mb-6" />
                                <h3 className="text-xl font-bold mb-4 text-white">Intelligent Screening</h3>
                                <p className="text-white">
                                    Uses human-like inference to assess skills, experience, and potential—just like an
                                    expert recruiter.
                                </p>
                            </div>
                            <div className="bg-[#29393E] p-8 rounded-xl">
                                <SearchCheck className="w-12 h-12 text-[#4B6D78] mb-6" />
                                <h3 className="text-xl font-bold mb-4 text-white">Contextual Enrichment</h3>
                                <p className="text-white">
                                    Provide contextual information that helps recruiters understand the skills and
                                    experience of candidates.
                                </p>
                            </div>
                            <div className="bg-[#29393E] p-8 rounded-xl">
                                <BarChart className="w-12 h-12 text-[#4B6D78] mb-6" />
                                <h3 className="text-xl font-bold mb-4 text-white">Data-Driven Insights</h3>
                                <p className="text-white">
                                    Get clear, actionable insights on every candidate to make confident hiring
                                    decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Screenshot */}
                <section className="py-24 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Screening that works like your best recruiter
                            </h2>
                            <p className="text-xl text-white/80">
                                Layl understands context, potential, and real talent - just like you do.
                            </p>
                        </div>
                        <div className="relative rounded-xl overflow-hidden ">
                            <Carousel
                                className="w-full"
                                plugins={[
                                    Autoplay({
                                        delay: 5000,
                                    }),
                                ]}
                            >
                                <CarouselPrevious />
                                <CarouselContent>
                                    {Array.from({ length: 2 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Image
                                                    src={`/product-${index + 1}.png`}
                                                    alt="Layl Platform Screenshot"
                                                    width={1200}
                                                    height={675}
                                                    className="w-full"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
            </main>

            <Footer />
        </div>
    );
}
