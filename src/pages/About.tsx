import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Heart, Users } from "lucide-react";
import lighthouseCove from "@/assets/lighthouse-cove.jpg";
import therapistHeadshot from "@/assets/therapist-headshot.jpg";
import therapyOffice from "@/assets/therapy-office.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lighthouseCove})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-shadow-soft">
            Our Philosophy
          </h1>
          <p className="text-xl md:text-2xl text-shadow-soft">
            Your Anchor in Uncertain Tides
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-8 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Anchor Cove, our mission is to provide the stability—the anchor—and safety—the cove—
              for you to explore your thoughts and feelings without fear. We believe that like ships 
              navigating turbulent waters, everyone has the strength to chart their own course through 
              life's challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sometimes we just need a guide and a safe harbor to begin that journey. Our therapeutic 
              approach creates that protected space where healing can unfold naturally, at your own pace, 
              with professional support every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Therapist Bio */}
      <section className="py-20 gradient-shore">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif text-center mb-16 text-primary">Meet Your Therapist</h2>
          
          <Card className="border-none shadow-xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12">
                  <div className="flex items-center mb-6">
                    <img
                      src={therapistHeadshot}
                      alt="Dr. Sarah Mitchell"
                      className="w-24 h-24 rounded-full object-cover mr-6 shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold font-serif text-primary">Dr. Sarah Mitchell</h3>
                      <p className="text-coral font-semibold">LCSW, Ph.D.</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold font-serif mb-4 text-primary">My Approach to Therapy</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I use a client-centered approach, blending Cognitive Behavioral Therapy (CBT) with 
                    mindfulness techniques and somatic awareness. My practice is grounded in the belief 
                    that you are the expert on your own life—I'm here to provide tools, support, and 
                    a safe space for your natural healing process to unfold.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Having navigated my own storms, I understand the courage it takes to seek support. 
                    My approach is warm, non-judgmental, and collaborative. Together, we'll work to 
                    understand your patterns, develop healthy coping strategies, and help you reconnect 
                    with your inner strength and wisdom.
                  </p>

                  <Button variant="coral" asChild>
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>

                <div className="bg-primary/5 p-12">
                  <h4 className="text-xl font-semibold font-serif mb-6 text-primary">Education & Qualifications</h4>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-coral mt-1" />
                      <div>
                        <p className="font-semibold">Ph.D. in Clinical Psychology</p>
                        <p className="text-sm text-muted-foreground">University of California, San Diego</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="h-5 w-5 text-coral mt-1" />
                      <div>
                        <p className="font-semibold">M.A. in Counseling Psychology</p>
                        <p className="text-sm text-muted-foreground">Stanford University</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-coral mt-1" />
                      <div>
                        <p className="font-semibold">Licensed Clinical Social Worker (LCSW)</p>
                        <p className="text-sm text-muted-foreground">California State License #12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Heart className="h-5 w-5 text-coral mt-1" />
                      <div>
                        <p className="font-semibold">Trauma-Informed Care Certification</p>
                        <p className="text-sm text-muted-foreground">EMDR Institute</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>15+ years</strong> of clinical experience<br />
                      <strong>500+ clients</strong> successfully supported<br />
                      <strong>Specializations:</strong> Anxiety, Depression, Trauma, Couples Therapy
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Space */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-6 text-primary">A Calm & Confidential Space</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our therapy office is thoughtfully designed to create an atmosphere of peace and safety. 
                Natural light streams through large windows, comfortable seating invites open conversation, 
                and subtle coastal touches remind you that you're in a place of calm and healing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every element of our space is chosen to help you feel at ease—from the soft lighting 
                to the gentle colors that echo the serenity of the ocean. This is your sanctuary, 
                a place where you can speak freely and feel truly heard.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <Users className="h-5 w-5 text-accent" />
                <span>Private, confidential sessions</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground mt-2">
                <Heart className="h-5 w-5 text-accent" />
                <span>Comfortable, welcoming environment</span>
              </div>
            </div>
            <div>
              <img
                src={therapyOffice}
                alt="Peaceful therapy office with natural lighting and comfortable seating"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step toward healing in a space designed for your comfort and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;