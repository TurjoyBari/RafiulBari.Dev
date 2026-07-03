"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Envelope from "@gravity-ui/icons/Envelope";
import Handset from "@gravity-ui/icons/Handset";
import CircleCheck from "@gravity-ui/icons/CircleCheck";
import { SITE, SOCIAL_LINKS, DISPLAY_SOCIAL } from "@/constants/site";
import { slideInLeft, slideInRight } from "@/utils/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { SocialIconGroup } from "@/components/ui/SocialIcon";

const CONTACT_SOCIAL = DISPLAY_SOCIAL;

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

function ContactInfoItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="icon-container h-12 w-12 shrink-0">
        <Icon width={20} height={20} />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mailtoLink = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailtoLink;

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="section-padding relative">
      <div aria-hidden="true" className="section-divider" />
      <div className="section-container">
        <SectionHeading
          title="Let's Work Together"
          description="I'm currently available for freelance projects and full-time opportunities. If you have a project needing sophisticated technical expertise, let's talk."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal animation="slideInLeft">
            <div className="space-y-8">
              <ContactInfoItem
                icon={Envelope}
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactInfoItem
                icon={Handset}
                label="Phone"
                value={SITE.phone}
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              />
              <ContactInfoItem
                icon={CircleCheck}
                label="Availability"
                value={SITE.availability}
              />

              <div className="pt-4">
                <p className="mb-4 text-sm font-medium text-text-muted">
                  Connect with me
                </p>
                <SocialIconGroup links={CONTACT_SOCIAL} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideInRight">
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card glass-card-lg space-y-6 p-7 sm:p-9"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-[#BFA181]/20 bg-[#BFA181]/10 px-4 py-3 text-sm text-[#D4C5B0]"
                  role="status"
                >
                  Thank you! Your message has been prepared. Your email client should open shortly.
                </motion.div>
              )}

              {errors.form && (
                <p className="text-sm text-red-400" role="alert">
                  {errors.form}
                </p>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-text-secondary">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`input-premium ${errors.name ? "error" : ""}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-text-secondary">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`input-premium ${errors.email ? "error" : ""}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-text-secondary">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={`input-premium ${errors.subject ? "error" : ""}`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-400" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`input-premium resize-none ${errors.message ? "error" : ""}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <AnimatedButton
                type="submit"
                loading={loading}
                loadingText="Sending..."
                className="w-full sm:w-auto"
              >
                Send Message
              </AnimatedButton>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
