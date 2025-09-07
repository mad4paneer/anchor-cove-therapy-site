import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Waves, Anchor, Heart } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Navigating Life's Tides: 3 Mindfulness Practices for Turbulent Times",
      excerpt: "Learn simple, effective mindfulness techniques to anchor yourself when you feel overwhelmed by stress or change. These practices can help you find calm in any storm.",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: Waves,
      featured: true,
    },
    {
      id: 2,
      title: "What's Your Anchor? Identifying Your Core Values in Therapy",
      excerpt: "Discover how understanding your core values can act as a powerful anchor, guiding your decisions and bringing you a sense of purpose and direction.",
      date: "March 8, 2024",
      readTime: "7 min read",
      icon: Anchor,
    },
    {
      id: 3,
      title: "Mending the Nets: A Guide to Healthy Conflict Resolution for Couples",
      excerpt: "Conflict is normal, but it doesn't have to sink your relationship. Explore strategies for communicating effectively and repairing your connection after disagreements.",
      date: "February 28, 2024",
      readTime: "6 min read",
      icon: Heart,
    },
    {
      id: 4,
      title: "The Lighthouse Within: Building Self-Compassion During Difficult Times",
      excerpt: "Learn how to be your own guiding light through self-compassion practices that can transform your relationship with yourself and your healing journey.",
      date: "February 20, 2024",
      readTime: "4 min read",
      icon: Waves,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-shore text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-primary">
            Insights & Guidance
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thoughtful articles on mental health, relationships, and personal growth 
            to support you on your healing journey.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => {
        const IconComponent = post.icon;
        return (
          <section key={post.id} className="py-12 bg-background">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-8">
                <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Article
                </span>
              </div>
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-12 lg:p-16">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6 text-primary">
                        {post.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                      <Button variant="coral" size="lg">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-gradient-ocean p-16 flex items-center justify-center">
                      <div className="text-center text-primary-foreground">
                        <IconComponent className="h-24 w-24 mx-auto mb-6 opacity-80" />
                        <p className="text-lg opacity-90">
                          Practical mindfulness techniques for finding your center in chaos
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        );
      })}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => {
              const IconComponent = post.icon;
              return (
                <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-smooth group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-smooth">
                      <IconComponent className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-serif mb-4 text-primary group-hover:text-accent transition-smooth">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:border-accent group-hover:text-accent">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-shore">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6 text-primary">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive new articles and mental health insights delivered to your inbox monthly.
          </p>
          <Card className="border-none shadow-lg max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="hero" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Your privacy is important to us. We'll never share your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Reading about mental health is a great first step. Taking action is the next one.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;