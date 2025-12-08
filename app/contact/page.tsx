"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PolicyLayout from "@/components/PolicyLayout";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, ready } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     try {
  //       await emailjs.send(
  //         "service_efrol3r", // EmailJS Service ID (Zoho SMTP)
  //         "template_0b997ii", // EmailJS Template ID
  //         {
  //           from_name: formData.name,
  //           from_email: formData.email,
  //           subject: formData.subject,
  //           message: formData.message,
  //         },
  //         "tnkPfeMRqrRuWDqL1" // EmailJS Public Key
  //       );

  //       toast.success(t("contact.success", "Message sent successfully!"));

  //       setFormData({ name: "", email: "", subject: "", message: "" });
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Failed to send message");
  //     }
  //   };

  //   // ✅ Fallback while translations are loading
  //   if (!ready) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center bg-sky-50 text-gray-500">
  //         Loading...
  //       </div>
  //     );
  //   }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // const serviceID = "service6fp6d";
      // const templateID = "templatzckl5"; // SAME template for both emails
      // const publicKey = "tnkPrRuWDqL1";

      const serviceID = "service_ud6fp6d";
      const templateID = "template_05zckl5";
      const publicKey = "tnkPfeMRqrRuWDqL1";

      const emailPromises = [];

      // Email 1: Send to support team (loveaitesting@gmail.com)
      emailPromises.push(
        emailjs.send(
          serviceID,
          templateID,
          {
            to_email: "loveaitesting@gmail.com", // Support email
            from_name: formData.name,
            from_email: formData.email,
            subject: `New Support Request from ${formData.name}`,
            message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
            to_name: "Support Team",
          },
          publicKey
        )
      );

      // Email 2: Send confirmation to user (tanvighelani11@gmail.com)
      emailPromises.push(
        emailjs.send(
          serviceID,
          templateID, // SAME template
          {
            to_email: formData.email, // User's email (tanvighelani11@gmail.com)
            from_name: "LoveAI Support",
            from_email: "loveaitesting@gmail.com",
            subject: "We received your message",
            message: `Hi ${formData.name},\n\nThank you for contacting us. We have received your message regarding:\n\nSubject: ${formData.subject}\n\nYour message:\n"${formData.message}"\n\nOur support team will review your request and get back to you soon.\n\nBest regards,\nLoveAI Support Team`,
            to_name: formData.name,
          },
          publicKey
        )
      );

      await Promise.all(emailPromises);

      setPopupMessage("Message sent successfully!");
      setIsPopupOpen(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setPopupMessage("Failed to send message. Please try again.");
      setIsPopupOpen(true);
    }
  };
  return (
    <PolicyLayout>
      <AccessibilityProvider>
        <AccessibilityWidget />
        <div className="min-h-screen bg-white p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="bg-sky-100 text-sky-600 border-sky-300 mb-4 px-4 py-2 text-sm rounded-full shadow-sm">
                <MessageCircle className="w-4 h-4 mr-2 text-sky-400" />
                {t("contact.support", "Support")}
              </Badge>

              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent drop-shadow-sm">
                {t("contact.title", "Contact Us")}
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t(
                  "contact.subtitle",
                  "We're here to help! Reach out with any questions or issues."
                )}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <Card className="shadow-lg border border-sky-100 bg-white/80 backdrop-blur-md rounded-2xl hover:shadow-sky-200 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sky-400">
                    <Send className="w-5 h-5 text-sky-400" />
                    {t("contact.form.send", "Send Message")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-600">
                          {t("contact.form.name", "Full Name")}
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="rounded-xl border-sky-200 focus:border-sky-500 focus:ring-sky-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-600">
                          {t("contact.form.email", "Email Address")}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="rounded-xl border-sky-200 focus:border-sky-400 focus:ring-sky-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-600">
                        {t("contact.form.subject", "Subject")}
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="rounded-xl border-sky-200 focus:border-sky-400 focus:ring-sky-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-600">
                        {t("contact.form.message", "Message")}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        required
                        className="rounded-xl border-sky-200 focus:border-sky-400 focus:ring-sky-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-sky-400 hover:bg-sky-600 text-white rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg"
                    >
                      <Send className="w-5 h-5 mr-2 text-white" />
                      {t("contact.form.send", "Send Message")}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-md border border-sky-100 bg-white/80 backdrop-blur-md rounded-2xl hover:shadow-sky-200 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sky-400">
                      <Mail className="w-5 h-5 text-sky-400" />
                      {t("contact.info.title", "Contact Information")}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      {t(
                        "contact.info.description",
                        "You can reach us in several ways."
                      )}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-sky-400" />
                      <div>
                        <p className="font-semibold text-gray-600">
                          {t("contact.info.emailLabel", "Email")}
                        </p>
                        <a
                          href={`mailto:${t(
                            "contact.info.email",
                            "loveaitesting@gmail.com"
                          )}`}
                          className="text-sky-600 hover:underline"
                        >
                          {t("contact.info.email", "support@loveai.co.il")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-sky-400" />
                      <div>
                        <p className="font-semibold text-gray-600">
                          {t("contact.info.phoneLabel", "Phone")}
                        </p>
                        <a
                          href={`tel:${t(
                            "contact.info.phone",
                            "+972-50-755-5200"
                          )}`}
                          className="text-sky-600 hover:underline"
                        >
                          {t("contact.info.phone", "+972-50-755-5200")}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-sky-400" />
                      <div>
                        <p className="font-semibold text-gray-600">
                          {t("contact.info.addressLabel", "Address")}
                        </p>
                        <p className="text-gray-600">
                          {t("contact.info.address", "Tel Aviv, Israel")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-sky-400" />
                      <div>
                        <p className="font-semibold text-gray-600">
                          {t("contact.info.hoursLabel", "Business Hours")}
                        </p>
                        <p className="text-gray-600">
                          {t("contact.info.hours", "Sun-Thu: 9:00–18:00")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Types */}
                <Card className="shadow-md border border-sky-100 bg-white/80 backdrop-blur-md rounded-2xl hover:shadow-sky-200 transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sky-400">
                      <Users className="w-5 h-5 text-sky-400" />
                      {t("contact.supportTypes.title", "Support Types")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      <Badge
                        variant="outline"
                        className="p-2 justify-center rounded-xl border-sky-300 text-sky-400 bg-sky-50 hover:bg-sky-100 cursor-pointer"
                      >
                        {t("contact.supportTypes.general", "General Questions")}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="p-2 justify-center rounded-xl border-sky-300 text-sky-400 bg-sky-50 hover:bg-sky-100 cursor-pointer"
                      >
                        {t(
                          "contact.supportTypes.technical",
                          "Technical Support"
                        )}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="p-2 justify-center rounded-xl border-sky-300 text-sky-400 bg-sky-50 hover:bg-sky-100 cursor-pointer"
                      >
                        {t("contact.supportTypes.billing", "Billing Questions")}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="p-2 justify-center rounded-xl border-sky-300 text-sky-400 bg-sky-50 hover:bg-sky-100 cursor-pointer"
                      >
                        {t("contact.supportTypes.safety", "Safety Report")}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
                <p className="mb-4">{popupMessage}</p>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
};

export default Contact;
