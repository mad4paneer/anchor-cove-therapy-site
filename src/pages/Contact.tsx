import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, Shield, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-shore text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-primary">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Take the first step toward healing. Reach out today to schedule your free consultation 
            and discover how we can support your journey together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Get in Touch */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8 text-primary">Get in Touch</h2>
              
              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">All calls are confidential</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-coral-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-muted-foreground">contact@anchorcovetherapy.com</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-orange-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-muted-foreground">
                      123 Ocean View Lane<br />
                      Suite 200<br />
                      Serenity Bay, CA 90210
                    </p>
                    <p className="text-xs text-muted-foreground">Private parking available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Office Hours</p>
                    <div className="text-muted-foreground text-sm">
                      <p>Mon - Thu: 9:00 AM - 7:00 PM</p>
                      <p>Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 10:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold font-serif mb-6 text-primary">Send a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">How can we help you?</label>
                      <Textarea 
                        placeholder="Please share what brings you here today and any questions you have about therapy..."
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="privacy" className="mt-1" />
                      <label htmlFor="privacy" className="text-xs text-muted-foreground">
                        I understand that this form is secure and my information will be kept confidential. 
                        This is not a substitute for therapy or crisis intervention.
                      </label>
                    </div>
                    
                    <Button variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Schedule Your Session */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8 text-primary">Schedule Your Session</h2>
              
              {/* Free Consultation Card */}
              <Card className="border-none shadow-lg mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-serif text-primary">Free 15-Minute Consultation</h3>
                      <p className="text-muted-foreground">Let's see if we're a good fit</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    This complimentary consultation gives us a chance to meet, discuss your needs, 
                    and determine if my approach aligns with your goals. No pressure, just connection.
                  </p>
                  
                  <div className="bg-accent/10 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold mb-2 text-primary">What to expect:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Brief discussion of your current situation</li>
                      <li>• Overview of my therapeutic approach</li>
                      <li>• Opportunity to ask questions</li>
                      <li>• Discussion of scheduling and logistics</li>
                    </ul>
                  </div>
                  
                  {/* Embedded Scheduler Placeholder */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-primary font-semibold mb-2">Online Scheduling</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      Book your free consultation using our secure scheduling system
                    </p>
                    <Button variant="coral" className="w-full">
                      View Available Times
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Resources */}
              <Card className="border-none shadow-lg bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-destructive" />
                    <h3 className="font-semibold text-destructive">Crisis Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're experiencing a mental health emergency, please reach out for immediate help:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>National Suicide Prevention Lifeline:</strong> 988</p>
                    <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                    <p><strong>Emergency Services:</strong> 911</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-shore">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer virtual sessions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, I offer secure, HIPAA-compliant video sessions for clients located anywhere in California. 
                Virtual therapy provides the same quality of care as in-person sessions while offering convenience 
                and comfort of receiving support from your own space. All sessions use encrypted, professional-grade 
                video conferencing technology.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What are your office hours?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                I offer flexible scheduling to accommodate different lifestyles:
                <br />• Monday through Thursday: 9:00 AM - 7:00 PM
                <br />• Friday: 9:00 AM - 5:00 PM  
                <br />• Saturday: 10:00 AM - 3:00 PM (limited availability)
                <br />• Emergency consultations available by appointment
                <br />Both in-person and virtual appointments are available during these hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What can I expect in the first session?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your first session is designed to be comfortable and informative. We'll discuss what brought you 
                to therapy, your goals and expectations, and any immediate concerns. I'll explain my therapeutic 
                approach and answer any questions about the process. This session helps us both determine if we're 
                a good fit and allows you to feel comfortable before beginning deeper work. There's no pressure—just 
                an opportunity to connect and plan your path forward.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How do I know if therapy is right for me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Therapy can be beneficial for anyone looking to understand themselves better, develop coping strategies, 
                or navigate life's challenges. You don't need to be in crisis to benefit—many people seek therapy for 
                personal growth, relationship improvement, or stress management. If you're curious about therapy or 
                feeling stuck in any area of your life, it's worth exploring. Our free consultation is a great way 
                to learn more without any commitment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Your Journey Begins Here</h2>
          <p className="text-xl mb-8 opacity-90">
            Taking the first step toward therapy shows incredible courage. I'm here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;