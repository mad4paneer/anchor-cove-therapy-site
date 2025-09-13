import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { User, Users, Brain, Shield, DollarSign, CreditCard } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
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
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
            Our Services
          </h2>
          <Accordion type="single" collapsible className="space-y-6">
            {/* Individual Therapy */}
            <AccordionItem value="individual" className="border rounded-lg">
              <AccordionTrigger className="px-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-serif text-primary">Individual Therapy</h3>
                    <p className="text-sm text-muted-foreground">One-on-one therapeutic support</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adults experiencing anxiety or depression</li>
                      <li>• Individuals facing life transitions</li>
                      <li>• Those struggling with stress management</li>
                      <li>• People seeking personal growth</li>
                      <li>• Anyone needing emotional support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      A collaborative, confidential space where we explore your thoughts, feelings, and 
                      patterns together. Using evidence-based approaches, we'll develop personalized 
                      strategies for healing and growth.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Improved emotional regulation</li>
                      <li>• Enhanced coping strategies</li>
                      <li>• Greater self-awareness</li>
                      <li>• Reduced anxiety and depression</li>
                      <li>• Increased life satisfaction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Duration:</strong> 50-minute sessions<br />
                      <strong>Frequency:</strong> Weekly or bi-weekly<br />
                      <strong>Format:</strong> In-person or virtual<br />
                      <strong>Timeline:</strong> Varies by individual needs
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Assessments */}
            <AccordionItem value="assessments" className="border rounded-lg">
              <AccordionTrigger className="px-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-coral-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-serif text-primary">Psychological Assessments</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive mental health evaluations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Those seeking diagnostic clarity</li>
                      <li>• Individuals requiring documentation</li>
                      <li>• People considering medication</li>
                      <li>• Those with complex symptoms</li>
                      <li>• Anyone wanting deeper self-understanding</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      A thorough evaluation including clinical interviews, standardized assessments, 
                      and psychological testing. You'll receive a comprehensive report with 
                      recommendations for treatment and support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clear diagnostic understanding</li>
                      <li>• Personalized treatment recommendations</li>
                      <li>• Educational accommodations support</li>
                      <li>• Insurance documentation</li>
                      <li>• Peace of mind and clarity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Duration:</strong> 2-4 hours total<br />
                      <strong>Sessions:</strong> 1-2 appointments<br />
                      <strong>Format:</strong> In-person preferred<br />
                      <strong>Report:</strong> Delivered within 2 weeks
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Workshops */}
            <AccordionItem value="workshops" className="border rounded-lg">
              <AccordionTrigger className="px-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-orange-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-serif text-primary">Therapeutic Workshops</h3>
                    <p className="text-sm text-muted-foreground">Group learning and skill-building sessions</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Who it's for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Those who learn well in groups</li>
                      <li>• People seeking peer connection</li>
                      <li>• Individuals wanting specific skills</li>
                      <li>• Those preferring cost-effective options</li>
                      <li>• Anyone interested in community support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What to expect:</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive group sessions focused on specific mental health topics like anxiety 
                      management, mindfulness, or relationship skills. Includes psychoeducation, 
                      skill practice, and peer support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Benefits:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Learn from shared experiences</li>
                      <li>• Practice skills in safe environment</li>
                      <li>• Build supportive connections</li>
                      <li>• Access affordable mental health education</li>
                      <li>• Reduce isolation and stigma</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Duration & Format:</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>Duration:</strong> 90-minute sessions<br />
                      <strong>Series:</strong> 4-8 week programs<br />
                      <strong>Format:</strong> In-person groups<br />
                      <strong>Size:</strong> 6-10 participants maximum
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                    <span>Couples Counseling (50 min)</span>
                    <span className="font-semibold">$175</span>
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
    </div>
  );
};

export default Services;