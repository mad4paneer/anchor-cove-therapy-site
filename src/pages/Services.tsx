import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { User, Users, Brain, Shield, DollarSign, CreditCard } from "lucide-react";
const Services = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-shore text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-primary">
            Services Tailored to Your Needs
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional therapy and counseling services available both in-person and virtually, 
            designed to meet you wherever you are in your healing journey.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Individual Therapy */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                  <User className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Individual Therapy</h3>
                <p className="text-muted-foreground mb-6">
                  A safe, confidential space to explore your inner world, develop coping strategies, 
                  and build resilience for life's challenges.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-primary">Who it's for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anxiety and panic disorders</li>
                    <li>• Depression and mood disorders</li>
                    <li>• Burnout and stress management</li>
                    <li>• Grief and loss processing</li>
                    <li>• Life transitions and changes</li>
                    <li>• Self-esteem and confidence issues</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>What to expect:</strong> A collaborative process where we'll explore your 
                  thoughts, feelings, and patterns together. Using evidence-based techniques, we'll 
                  develop personalized strategies for healing and growth.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Couples Counseling */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-coral-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Couples Counseling</h3>
                <p className="text-muted-foreground mb-6">
                  A neutral, supportive environment to improve communication, resolve conflicts, 
                  and deepen your connection with your partner.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-primary">Who it's for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Communication difficulties</li>
                    <li>• Conflict resolution needs</li>
                    <li>• Trust and intimacy issues</li>
                    <li>• Pre-marital counseling</li>
                    <li>• Major life transitions as a couple</li>
                    <li>• Relationship strengthening</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>What to expect:</strong> Guided sessions focused on understanding each 
                  other's perspectives, improving communication skills, and rebuilding or strengthening 
                  your emotional connection.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Specialty Services */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-smooth">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-orange-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Trauma & PTSD Support</h3>
                <p className="text-muted-foreground mb-6">
                  Specialized, trauma-informed care for those who have experienced traumatic events 
                  and are seeking professional support for healing.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-primary">Who it's for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Post-traumatic stress (PTSD)</li>
                    <li>• Childhood trauma processing</li>
                    <li>• Acute stress reactions</li>
                    <li>• Complex trauma recovery</li>
                    <li>• Anxiety related to past events</li>
                    <li>• Survivors seeking healing</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>What to expect:</strong> Evidence-based trauma therapies including EMDR 
                  and somatic approaches, delivered in a safe, controlled environment at your own pace.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Service Information */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What can I expect in my first session?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Your first session is about getting to know each other and creating a safe space for our work together. 
                  We'll discuss what brought you to therapy, your goals, and any immediate concerns. I'll explain my 
                  approach and answer any questions you have about the therapeutic process. This session helps determine 
                  if we're a good fit and allows you to feel comfortable before diving deeper into your healing journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer virtual sessions?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, I offer secure, HIPAA-compliant video sessions for clients located anywhere in California. 
                  Virtual therapy can be just as effective as in-person sessions and offers the convenience of 
                  receiving support from the comfort of your own home. All you need is a private space and a 
                  reliable internet connection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  How long does therapy typically take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  The length of therapy varies greatly depending on your individual needs and goals. Some people 
                  find significant relief in a few sessions, while others benefit from longer-term support. We'll 
                  regularly check in about your progress and adjust our approach as needed. You're always in control 
                  of your therapeutic journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  What are your office hours?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I offer flexible scheduling to accommodate various lifestyles and work schedules:
                  <br />• Monday - Thursday: 9:00 AM - 7:00 PM
                  <br />• Friday: 9:00 AM - 5:00 PM  
                  <br />• Saturday: 10:00 AM - 3:00 PM (limited availability)
                  <br />• Emergency consultations available by appointment
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Rates & Insurance */}
      <section className="py-20 gradient-shore">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
            Rates & Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-accent mr-3" />
                  <h3 className="text-xl font-semibold font-serif text-primary">Session Rates</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span>Individual Therapy (50 min)</span>
                    <span className="font-semibold">$150</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span>Initial Consultation (15 min)</span>
                    <span className="font-semibold text-accent">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Extended Session (90 min)</span>
                    <span className="font-semibold">$225</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CreditCard className="h-8 w-8 text-coral mr-3" />
                  <h3 className="text-xl font-semibold font-serif text-primary">Insurance & Payment</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">In-Network With:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Blue Cross Blue Shield</li>
                      <li>• Aetna</li>
                      <li>• Cigna</li>
                      <li>• United Healthcare</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Out-of-Network:</p>
                    <p className="text-sm text-muted-foreground">
                      I provide detailed superbills for reimbursement from your insurance company. 
                      Many clients receive 50-80% reimbursement for out-of-network benefits.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Payment Options:</p>
                    <p className="text-sm text-muted-foreground">
                      Cash, check, credit/debit cards, HSA/FSA accounts accepted. 
                      Payment is due at time of service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Find the Right Support for You</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to begin your healing journey? Let's find the approach that feels right for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn More About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;