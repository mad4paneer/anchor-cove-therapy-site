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
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary">
            Our Services
          </h2>
          
          <Accordion type="single" collapsible className="space-y-6">
            {/* Individual Therapy */}
            <AccordionItem value="individual-therapy" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-accent-foreground" />
                  </div>
                  Individual Therapy
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Adults dealing with anxiety, depression, or mood disorders</li>
                    <li>• Individuals experiencing burnout or chronic stress</li>
                    <li>• Those processing grief, trauma, or major life transitions</li>
                    <li>• People seeking to improve self-esteem and personal growth</li>
                    <li>• Anyone wanting to develop better coping strategies</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                  <p className="text-muted-foreground">
                    A collaborative, confidential therapeutic relationship where we explore your thoughts, 
                    feelings, and behavioral patterns. Using evidence-based approaches like CBT, DBT, and 
                    mindfulness techniques, we'll work together to develop personalized strategies for healing and growth.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Improved emotional regulation and stress management</li>
                    <li>• Enhanced self-awareness and personal insight</li>
                    <li>• Development of healthy coping mechanisms</li>
                    <li>• Better relationships and communication skills</li>
                    <li>• Increased resilience and life satisfaction</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                  <p className="text-muted-foreground">
                    50-minute sessions, typically weekly or bi-weekly. Treatment duration varies from 
                    short-term focused work (8-12 sessions) to longer-term therapeutic relationships 
                    (6+ months). Available both in-person and via secure video sessions.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Assessments */}
            <AccordionItem value="assessments" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-coral-foreground" />
                  </div>
                  Psychological Assessments
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Individuals seeking clarity on mental health diagnoses</li>
                    <li>• Students needing accommodations or educational planning</li>
                    <li>• Adults questioning ADHD, autism, or learning differences</li>
                    <li>• Those requiring documentation for workplace accommodations</li>
                    <li>• Anyone wanting comprehensive understanding of their cognitive profile</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                  <p className="text-muted-foreground">
                    A comprehensive evaluation process including clinical interviews, standardized testing, 
                    and behavioral observations. We'll review your history, current functioning, and specific 
                    concerns to provide accurate diagnosis and personalized recommendations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Clear diagnostic clarity and treatment direction</li>
                    <li>• Detailed written report with actionable recommendations</li>
                    <li>• Documentation for academic or workplace accommodations</li>
                    <li>• Better understanding of strengths and challenges</li>
                    <li>• Informed treatment planning and goal setting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                  <p className="text-muted-foreground">
                    2-4 sessions over 2-3 weeks, including initial interview (90 minutes), 
                    testing session(s) (2-4 hours), and feedback session (60 minutes). 
                    Comprehensive written report provided within 2 weeks of completion.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Workshops */}
            <AccordionItem value="workshops" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-foreground" />
                  </div>
                  Therapeutic Workshops
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Groups wanting to learn specific mental health skills</li>
                    <li>• Organizations seeking employee wellness programs</li>
                    <li>• Individuals preferring group learning environments</li>
                    <li>• Those looking for cost-effective mental health education</li>
                    <li>• Community groups focused on collective healing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                  <p className="text-muted-foreground">
                    Interactive, skills-based workshops covering topics like stress management, 
                    mindfulness, communication, and emotional regulation. Includes psychoeducation, 
                    practical exercises, and take-home resources for continued practice.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Practical, evidence-based coping strategies</li>
                    <li>• Peer support and shared learning experiences</li>
                    <li>• Cost-effective access to mental health education</li>
                    <li>• Immediate application of skills and techniques</li>
                    <li>• Community building and reduced isolation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                  <p className="text-muted-foreground">
                    Single workshops (2-3 hours) or multi-session series (4-8 weeks, 90 minutes each). 
                    Available for groups of 6-12 participants. Topics include: Anxiety Management, 
                    Mindfulness & Stress Reduction, Healthy Boundaries, and Emotional Intelligence.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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