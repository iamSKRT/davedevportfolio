import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const PhilippinesMap = () => (
  <svg viewBox="0 0 600 500" className="w-full h-full" fill="none">
    {/* Dotted world map background */}
    {Array.from({ length: 40 }).map((_, row) =>
      Array.from({ length: 60 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 10 + 5}
          cy={row * 12.5 + 5}
          r={1.2}
          fill="hsl(var(--muted-foreground))"
          opacity={0.15}
        />
      ))
    )}
    
    {/* Philippines archipelago - simplified shapes */}
    {/* Luzon */}
    <path
      d="M320 180 L335 170 L345 175 L350 190 L348 210 L340 230 L330 240 L320 235 L315 220 L310 200 Z"
      fill="hsl(var(--primary))"
      opacity={0.6}
      stroke="hsl(var(--primary))"
      strokeWidth={1}
    />
    {/* Visayas */}
    <path
      d="M310 250 L330 248 L340 255 L335 265 L320 270 L308 262 Z"
      fill="hsl(var(--primary))"
      opacity={0.6}
      stroke="hsl(var(--primary))"
      strokeWidth={1}
    />
    {/* Mindanao */}
    <path
      d="M315 278 L340 275 L350 285 L348 305 L335 315 L320 310 L310 295 Z"
      fill="hsl(var(--primary))"
      opacity={0.6}
      stroke="hsl(var(--primary))"
      strokeWidth={1}
    />
    
    {/* Location pin with Philippines flag */}
    <g transform="translate(330, 220)">
      {/* Pin line */}
      <line x1="0" y1="0" x2="30" y2="-50" stroke="hsl(var(--primary))" strokeWidth={1.5} />
      {/* Flag card */}
      <g transform="translate(15, -75)">
        <rect x="-25" y="-20" width="50" height="40" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth={1} />
        {/* Philippines flag */}
        <rect x="-18" y="-14" width="36" height="12" fill="#0038A8" />
        <rect x="-18" y="-2" width="36" height="12" fill="#CE1126" />
        {/* White triangle */}
        <polygon points="-18,-14 -18,10 -2,-2" fill="white" />
        {/* Sun */}
        <circle cx="-12" cy="-2" r="2.5" fill="#FCD116" />
        {/* Label */}
        <text x="0" y="25" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="7" fontFamily="Space Grotesk">
          Philippines
        </text>
      </g>
      {/* Pulse effect */}
      <circle cx="0" cy="0" r="4" fill="hsl(var(--primary))" opacity={0.8}>
        <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="0" cy="0" r="3" fill="hsl(var(--primary))" />
    </g>

    {/* Additional decorative dots for nearby regions */}
    {[
      { x: 250, y: 200 }, { x: 270, y: 250 }, { x: 380, y: 220 },
      { x: 400, y: 280 }, { x: 200, y: 300 }, { x: 450, y: 180 },
    ].map((dot, i) => (
      <circle key={i} cx={dot.x} cy={dot.y} r={2} fill="hsl(var(--primary))" opacity={0.3} />
    ))}
  </svg>
);

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    try {
       const result = await emailjs.send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );

      console.log("EmailJS Success:", result.text);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">03.</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                placeholder="your@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>


          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <PhilippinesMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
