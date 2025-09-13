import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { User, Users, Brain, ArrowRight, Heart } from "lucide-react";
import heroSunset from "@/assets/hero-sunset.jpg";
import therapistHeadshot from "@/assets/therapist-headshot.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroSunset})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-shadow-soft">Healing isn't linear,
it's tidal</h1>
          <h2 className="text-xl md:text-2xl mb-8 text-shadow-soft font-light">
            Welcome to Anchor Cove. Your safe harbor for healing and growth.
          </h2>
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4">
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6 text-primary">A Space to Feel Grounded</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Life's storms can leave us feeling adrift, searching for solid ground. At Anchor Cove, 
            we provide the steady support and professional guidance you need to navigate life's 
            challenges. Whether you're facing anxiety, depression, relationship difficulties, or 
            major life transitions, you don't have to weather these storms alone.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 gradient-shore">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary">
            Pathways to Wellbeing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4 text-primary">Individual Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  For personal growth and overcoming challenges. A safe space to explore your 
                  thoughts, feelings, and patterns.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-coral-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4 text-primary">Assessments</h3>
                <p className="text-muted-foreground mb-6">Provide formal diagnosis to guide our work and create clear benchmarks to objectively monitor your progress.</p>
                <Button variant="outline" asChild>
                  <Link to="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-orange-foreground" />
                </div>
                <h3 className="text-xl font-semibold font-serif mb-4 text-primary">Workshops & Webinars</h3>
                <p className="text-muted-foreground mb-6">Empower yourself with practical tools and knowledge through interactive workshops and insightful webinars.</p>
                <Button variant="outline" asChild>
                  <Link to="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6 text-primary">Your Guide on This Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Dr. Sarah Mitchell, and I founded Anchor Cove to provide a stable, 
                non-judgmental space for people just like you. With over 15 years of experience 
                in therapeutic practice, I believe that everyone has the strength to navigate 
                their own waters—sometimes they just need a guide and a safe place to start.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My approach combines evidence-based therapeutic techniques with deep compassion 
                and understanding. Together, we'll work to help you find your anchor and chart 
                a course toward healing and growth.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Our Approach</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img src={therapistHeadshot} alt="Dr. Sarah Mitchell, Licensed Therapist" className="w-80 h-80 rounded-full object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 gradient-shore">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <Heart className="h-12 w-12 text-coral mx-auto mb-8" />
              <blockquote className="text-2xl font-serif text-primary mb-6 italic">"
"Starting therapy with Aashima has truly been life-changing. I came to her at a time when I was at my lowest, unable to care for myself or find any sense of direction. Her no-nonsense yet deeply compassionate approach made me feel seen and supported from day one. She never dismissed my experiences, and her guidance helped me shift the way I view myself and my life. With her tools and insights, I've been able to rebuild a healthier life, routine and mindset. If you're considering working with her, know that you're in the best hands—she's empathetic, direct, and her sessions leave you with practical tools that stay with you for life."</blockquote>
              <cite className="text-muted-foreground">— S.W. </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Take the First Step?</h2>
          <p className="text-xl mb-8 opacity-90">
            Your journey toward healing and growth begins with a single step. Let's take it together.
          </p>
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4">
            <Link to="/contact">Schedule Your Appointment Today</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;