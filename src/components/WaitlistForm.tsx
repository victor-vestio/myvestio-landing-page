/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Loader2, Building, Phone, Globe, Linkedin, MapPin, Briefcase } from "lucide-react";

interface WaitlistFormProps {
  className?: string;
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const registeredEmail = localStorage.getItem("vestio_waitlist_email");
    if (registeredEmail) {
      setAlreadyRegistered(true);
      setEmail(registeredEmail);
    }
  }, []);

  const submitToHubSpot = async () => {
    const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
    const formGuid = import.meta.env.VITE_HUBSPOT_FORM_GUID;

    if (!portalId || !formGuid) {
      throw new Error("HubSpot configuration missing");
    }

    const payload = {
      portalId,
      formGuid,
      fields: [
        { name: "email", value: email },
        { name: "company", value: businessName },
        { name: "mobilephone", value: phoneNumber },
        { name: "0-2/country", value: country },
        { name: "website", value: websiteUrl },
        { name: "linkedinurl", value: linkedinUrl },
        { name: "jobtitle", value: role },
        { name: "message", value: message },
      ].filter(field => field.value.trim() !== ""),
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("HubSpot API Error:", errorText);
      throw new Error(`Failed to submit to waitlist`);
    }

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !businessName || !phoneNumber || !country || !role) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await submitToHubSpot();
      localStorage.setItem("vestio_waitlist_email", email);
      setIsSubmitted(true);
      setEmail("");
      setBusinessName("");
      setPhoneNumber("");
      setCountry("");
      setWebsiteUrl("");
      setLinkedinUrl("");
      setRole("");
      setMessage("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted || alreadyRegistered) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md mx-auto border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {alreadyRegistered
                ? "You're already registered!"
                : "Thank you for joining our waitlist!"}
            </h3>
            <p className="text-green-700">
              We would keep updating you on Vestio.
            </p>
            {alreadyRegistered && email && (
              <p className="text-green-600 text-sm mt-2">
                Registered with: {email}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
            <p className="text-muted-foreground">
              Be the first to access Vestio's invoice financing platform. Fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Business Name */}
            <div className="relative">
              <Building className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Business or Organization Name *"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                required
              />
            </div>

            {/* Phone and Country */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Country/Region *"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Website URL */}
            <div className="relative">
              <Globe className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="url"
                placeholder="Website URL (Optional)"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              />
            </div>

            {/* LinkedIn URL */}
            <div className="relative">
              <Linkedin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="url"
                placeholder="LinkedIn URL (Optional)"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              />
            </div>

            {/* Role */}
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Your Role/Job Title *"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                required
              />
            </div>

            {error && (
              <motion.p
                className="text-red-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
