import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (replace with your public key from EmailJS)
const EMAILJS_PUBLIC_KEY = "FK9brEwG2pk_4vdzs";
const EMAILJS_SERVICE_ID = "service_g2esu8m";
const EMAILJS_TEMPLATE_ID = "template_nlx8lxs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS once on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: "thabisocm12@gmail.com", // Your email
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      });

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
              </div>

              {/* Email */}
              <a
                href="mailto:thabisocm12@gmail.com"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-muted rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">
                    thabisocm12@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+267-76707701"
                className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-muted rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-semibold">+267-76707701</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="p-3 bg-muted rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold">
                    Palapye, Botswana
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Follow me</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/mr-morapedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ManBizzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/mr_morapedi_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send me a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-32"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:opacity-90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Response Time
              </h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24-48 hours. For urgent matters, please call me directly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Availability
              </h3>
              <p className="text-muted-foreground">
                I'm open to freelance projects, full-time opportunities, and collaborations. Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
