import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FtleDetails = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Hero Section */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
                            FTLE Review Class
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive review for the Fisheries Technologist Licensure Examination.
                        </p>
                    </div>

                    {/* Details Content */}
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* LMS Link Section */}
                        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                            <h2 className="text-2xl font-display font-semibold text-secondary mb-4">
                                Course Access
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Access the Learning Management System (LMS) for course materials, quizzes, and recorded sessions.
                            </p>
                            <Button size="lg" className="w-full" asChild>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    Go to LMS
                                </a>
                            </Button>
                        </div>

                        {/* Speakers Section */}
                        <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                            <h2 className="text-2xl font-display font-semibold text-secondary mb-4">
                                Our Speakers
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Learn from top industry experts and board topnotchers.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span>Expert 1 - Aquaculture</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span>Expert 2 - Capture Fisheries</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span>Expert 3 - Post-Harvest</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FtleDetails;
