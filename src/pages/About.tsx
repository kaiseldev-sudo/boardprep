import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6">
              About <span className="text-secondary">BoardPrep</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering students to achieve their dreams through innovative, accessible, and effective board exam preparation.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28">
           <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-12">
              <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      Board Prep Solutions is dedicated to enhancing educational quality through expert consultancy services, technology-enabled review programs and comprehensive competency development programs. Our mission is to strengthen higher education institutions, improve learner outcomes, and equip professionals with the skills and competencies needed to excel in a modern, competitive workforce.
                  </p>
              </div>

              <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      Board Prep Solutions envisions becoming a leading driver of innovation in higher education by delivering transformative digital learning solutions and professional development programs. We aim to empower institutions, uplift learners, and help build a globally competitive workforce prepared for the demands of a rapidly evolving world.
                  </p>
              </div>
              
              <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">Why We Started</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                      BoardPrep began with a clear realization: traditional review centers are effective but often inaccessible or rigid. We wanted to create a solution that travels with you—whether you're on a commute, at a coffee shop, or studying late at night. Our mobile-first approach ensures that quality education is always within reach.
                  </p>
              </div>

               <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">What Sets Us Apart</h2>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
                      <li><strong>Adaptive Learning:</strong> Our algorithms identify your weak spots and serve questions to turn them into strengths.</li>
                      <li><strong>Expert Content:</strong> All materials are crafted and vetted by topnotchers and industry specialists.</li>
                      <li><strong>Community Driven:</strong> We listen to our students and constantly evolve our platform based on real feedback.</li>
                  </ul>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
