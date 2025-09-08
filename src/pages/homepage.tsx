import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  FileText,
  CheckCircle,
  DollarSign,
  BarChart3,
  Star,
  Building2,
  Globe,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  
  const smoothScrollTo = (elementId: string) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar smoothScrollTo={smoothScrollTo} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-lg"
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl"
            animate={{
              y: [30, -30, 30],
              x: [20, -20, 20],
              scale: [1.2, 0.8, 1.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-lg"
            animate={{
              y: [-25, 25, -25],
              x: [25, -25, 25],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-60 right-1/3 w-36 h-36 bg-green-500/20 rounded-full blur-xl"
            animate={{
              y: [20, -20, 20],
              x: [-15, 15, -15],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Gradient Overlay Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Additional Floating Elements */}
          <motion.div
            className="absolute top-1/3 left-1/2 w-28 h-28 bg-yellow-400/15 rounded-full blur-lg"
            animate={{
              y: [-40, 40, -40],
              x: [-30, 30, -30],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 360],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-pink-500/15 rounded-full blur-md"
            animate={{
              y: [35, -35, 35],
              x: [25, -25, 25],
              scale: [1.1, 0.7, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Subtle Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-8"
            >
              <Star className="w-4 h-4" />
              Premier Invoice Discounting Marketplace
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                Transforming
              </motion.span>
              <br />
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {"Working Capital Financing In Africa"
                  .split("")
                  .map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1 + index * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              All in one invoice financing platform.{" "}
              <span className="text-primary font-semibold">
                To facilitate working capitals for african SMEs.
              </span>{" "}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="group px-8 py-6 text-lg font-semibold"
                onClick={() => navigate('/waitlist')}
              >
                Join Waitlist
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary mb-8"
            >
              SOLUTIONS
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering African Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Vestio offers a complete suite of digital solutions to help
              African SMEs manage, finance, and streamline their invoicing
              processes. We empower businesses to access working capital faster,
              improve payment reliability, and strengthen supply chain
              stability.
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Solutions for Buyers (Corporates) */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                        <Users className="w-8 h-8 text-slate-600" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                        <Building2 className="w-10 h-10 text-blue-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Solutions for Businesses Vendors/Sellers
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Vestio, we help businesses unlock working capital by
                  getting early payments on their unpaid invoices. Through our
                  digital invoice discounting marketplace, sellers can access
                  financing against verified invoices, improving cash flow,
                  reducing payment delays, and ensuring business continuity.
                  This empowers SMEs to operate more efficiently, meet
                  obligations on time, and focus on growth without waiting for
                  long payment cycles.
                </p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Solutions for Suppliers */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold mb-4">
                  Solutions for Anchors/Ajax{" "}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Vestio, we provide anchors with a secure and transparent
                  platform to manage and settle supplier invoices on time. By
                  using our system, anchors can streamline payment processes,
                  strengthen supplier relationships, and maintain supply chain
                  stability. With automated reminders, credit verification, and
                  secured payment-based settlements, anchors benefit from
                  improved trust, operational efficiency, and compliance with
                  agreed payment terms.
                </p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-orange-700" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                        <Globe className="w-10 h-10 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions for Financiers */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-full h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-indigo-300 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-indigo-700" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Solutions for Investors/Lenders
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Vestio, we connect lenders to a pipeline of verified,
                  credit-assessed invoice financing opportunities. Our platform
                  ensures each transaction undergoes rigorous document
                  verification and risk assessment, enabling lenders to invest
                  with confidence. With transparent terms, automated repayments,
                  and detailed performance tracking, lenders can earn
                  competitive returns while supporting the growth of African
                  SMEs.
                </p>
                <Button variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Vestio
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of invoice financing with our comprehensive
              platform designed for modern businesses.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Invoice Marketplace",
                description:
                  "Vestio is built for the unique challenges of African SMEs, connecting sellers, lenders, and buyers in one transparent ecosystem.",
              },
              {
                icon: Users,
                title: "Multi-Role Access",
                description:
                  "Access to seller, lender, and anchor accounts, offering unmatched flexibility for diverse business needs.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Credit Intelligence",
                description:
                  "Integrated credit assessments give instant visibility into payment reliability, helping lenders and sellers make smarter decisions.",
              },
              {
                icon: Shield,
                title: "Payment-Backed Security",
                description:
                  "All payments flow through secure, platform-managed accounts to ensure funds are safe and settlements are guaranteed.",
              },
              {
                icon: CheckCircle,
                title: "Secure Compliance",
                description:
                  "KYC/AML checks, transaction audits, and data privacy compliance (GDPR/NDPR) are built into the platform to ensure data and platform security and authenticity for users.",
              },
              {
                icon: Zap,
                title: "Transparent Settlement Engine",
                description:
                  "Our automated settlement system deducts fees, pays lenders, and releases balances without hidden charges or delays.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-medium text-muted-foreground mb-4">
              What it's like using Vestio
            </div>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              "Vestio’s platform was a game-changer for our small business. We
              accessed funding at great rates and avoided the typical hassle of
              bank loans. Plus, the relationship with our buyers stayed strong
              since everything was handled professionally."
            </h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              — Aisha B, Founder, Artisan Crafts Co.
            </button>
          </motion.div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Investing through Vestio gives me confidence with its verified
                invoices and reputable buyers. The returns are attractive, and
                the platform makes it easy to diversify across industries. It's
                a smart way to put capital to work in a secure, short-term
                market."
              </p>
              <p className="text-sm font-medium text-foreground">
                — Linda T, Private Investor
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Thanks to Vestio, we've been able to unlock the value of our
                unpaid invoices instantly. The predictable cash flow has allowed
                us to invest in growth and meet new orders without worrying
                about delayed payments. The process is smooth and transparent."
              </p>
              <p className="text-sm font-medium text-foreground">
                — James K, CEO, Reform Solutions Ltd.
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Vestio has transformed how we manage our cash flow. By enabling
                early payments to our suppliers, we've strengthened our supply
                chain and improved operational efficiency — all without
                impacting our working capital. It's a win-win for everyone
                involved."
              </p>
              <p className="text-sm font-medium text-foreground">
                — Sarah M, CFO, Global Manufacturing Corp.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cash Flow?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already improved their
              working capital with Vestio's invoice discounting solutions.
            </p>
            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-semibold"
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist Now
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
