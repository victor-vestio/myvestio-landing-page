import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Vestio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses with innovative financial solutions and
              cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Vestio, we believe that every business deserves timely access
                to working capital without complicated loans or strained
                relationships. Founded with the vision to modernize invoice
                financing, Vestio brings together three essential players in the
                supply chain ecosystem: anchors , suppliers, and investors. We
                saw the challenges faced by businesses everywhere: suppliers
                struggling with unpredictable cash flow, anchors wanting to
                strengthen supplier relationships without tying up their
                capital, and investors seeking secure, high-yield opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vestio was created to solve this by building a transparent,
                efficient marketplace where unpaid invoices become powerful
                financial assets. Through our platform, suppliers unlock
                immediate cash flow, anchors maintain smooth operations and
                supplier relationships, and investors fund verified invoices for
                attractive returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  description:
                    "Fully authorized and regulated by the Financial Conduct Authority (FCA) with comprehensive compliance frameworks.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Our team combines decades of experience in finance, technology, and risk management to serve you better.",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Track Record",
                  description:
                    "Successfully funded thousands of invoices with a 99.9% platform uptime and industry-leading approval rates.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to working capital by providing
                    innovative, technology-driven financial solutions that
                    empower businesses to grow and thrive in today's competitive
                    marketplace.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the leading platform for supply chain finance in
                    Africa, enabling millions of SMEs to access the capital they
                    need to scale their operations and contribute to economic
                    growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cash Flow?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of businesses that trust Vestio for their working
              capital needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Join Waitlist Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
