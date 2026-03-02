"use client";
import { Check, X } from "lucide-react";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PolicyLayout from "@/components/PolicyLayout";
import KindnessJourneySection from "@/components/KindnessJourneySection/KindnessJourneySection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Crown, Heart, Star, Gift, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from "@/components/seo/SEOHead";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const { toast } = useToast();
  const { t, ready } = useTranslation();

  // Fallback translations
  const fallback = useMemo(
    () => ({
      "subscription.chooseYourPlan": "Choose Your Plan",
      "subscription.title": "Simple, Transparent Pricing",
      "subscription.subtitle":
        "Choose the perfect plan for your journey to meaningful connections",
      "subscription.monthly": "Monthly",
      "subscription.annual": "Annual",
      "subscription.save20": "Save 20%",
      "subscription.popular": "Most Popular",
      "subscription.year": "year",
      "subscription.month": "month",
      "subscription.billedAnnually": "Billed annually",
      "subscription.choosePlan": "Choose Plan",
      "subscription.basic": "Basic",
      "subscription.basicDesc": "Perfect for getting started",
      "subscription.basicFeature1": "Unlimited matches",
      "subscription.basicFeature2": "Basic profile customization",
      "subscription.basicFeature3": "Send messages",
      "subscription.basicFeature4": "View profiles",
      "subscription.premium": "Premium",
      "subscription.premiumDesc": "Most popular choice",
      "subscription.premiumFeature1": "Everything in Basic",
      "subscription.premiumFeature2": "Advanced matching algorithm",
      "subscription.premiumFeature3": "Video chat",
      "subscription.premiumFeature4": "Priority support",
      "subscription.premiumFeature5": "Advanced filters",
      "subscription.premiumFeature6": "Profile boost",
      "subscription.enterprise": "Enterprise",
      "subscription.enterpriseDesc": "The ultimate experience",
      "subscription.enterpriseFeature1": "Everything in Premium",
      "subscription.enterpriseFeature2": "VIP profile badge",
      "subscription.enterpriseFeature3": "See who liked you",
      "subscription.enterpriseFeature4": "Advanced privacy controls",
      "subscription.enterpriseFeature5": "Exclusive events access",
      "subscription.enterpriseFeature6": "Personal dating coach",
      "subscription.enterpriseFeature7": "Ad-free experience",
      "subscription.comingSoon": "Coming Soon",
      "subscription.paymentSoon": "Payment integration will be available soon",
      "subscription.goodDeedPayment": "Good Deed Payment",
      "subscription.goodDeedPaymentDesc":
        "Pay it forward with acts of kindness",
      "subscription.goodDeedTitle": "Or Pay With Good Deeds",
      "subscription.goodDeedDescription":
        "Contribute to the community through acts of kindness instead of traditional payment",
      "subscription.goodDeedOptions":
        "Help others, volunteer, or perform verified acts of kindness",
      "subscription.payWithGoodDeeds": "Pay With Good Deeds",
      "subscription.freeForNow":
        "All features are currently free during our beta period",
      "subscription.securePayment": "Secure Payment",
      "subscription.cancelAnytime": "Cancel Anytime",
      "subscription.support247": "24/7 Support",
    }),
    []
  );

  // Helper to get translated text with fallback
  const getText = (key: string) => {
    if (!ready) return fallback[key] || "";
    return t(key);
  };

  const router = useRouter();

  const handleChoosePlan = () => {
    router.push("https://www.loveai.co.il/login"); // 👈 navigate to login page
  };
  const plans = useMemo(
    () => [
      {
        id: "basic",
        name: getText("subscription.basic"),
        description: getText("subscription.basicDesc"),
        monthlyPrice: 49,
        annualPrice: 490,
        icon: Heart,
        features: [
          getText("subscription.basicFeature1"),
          getText("subscription.basicFeature2"),
          getText("subscription.basicFeature3"),
          getText("subscription.basicFeature4"),
        ],
        color: "from-blue-500 to-blue-600",
        badgeColor: "bg-blue-100 text-blue-800",
      },
      {
        id: "premium",
        name: getText("subscription.premium"),
        description: getText("subscription.premiumDesc"),
        monthlyPrice: 99,
        annualPrice: 990,
        icon: Crown,
        popular: true,
        features: [
          getText("subscription.premiumFeature1"),
          getText("subscription.premiumFeature2"),
          getText("subscription.premiumFeature3"),
          getText("subscription.premiumFeature4"),
          getText("subscription.premiumFeature5"),
          getText("subscription.premiumFeature6"),
        ],
        color: "from-purple-500 to-pink-500",
        badgeColor: "bg-purple-100 text-purple-800",
      },
      {
        id: "enterprise",
        name: getText("subscription.enterprise"),
        description: getText("subscription.enterpriseDesc"),
        monthlyPrice: 199,
        annualPrice: 1990,
        icon: Star,
        features: [
          getText("subscription.enterpriseFeature1"),
          getText("subscription.enterpriseFeature2"),
          getText("subscription.enterpriseFeature3"),
          getText("subscription.enterpriseFeature4"),
          getText("subscription.enterpriseFeature5"),
          getText("subscription.enterpriseFeature6"),
          getText("subscription.enterpriseFeature7"),
        ],
        color: "from-orange-500 to-red-500",
        badgeColor: "bg-orange-100 text-orange-800",
      },
    ],
    [ready, t]
  );

  const handleSubscribe = async (planId: string) => {
    toast({
      title: getText("subscription.comingSoon"),
      description: getText("subscription.paymentSoon"),
    });
  };

  const handleGoodDeedPayment = () => {
    toast({
      title: getText("subscription.goodDeedPayment"),
      description: getText("subscription.goodDeedPaymentDesc"),
    });
  };

  return (
    <PolicyLayout>
      <AccessibilityProvider>
        <AccessibilityWidget />
        <SEOHead
          title="LoveAi - Find Real Love with AI"
          url="https://www.loveai.co.il/"
        />

        <div className="mt-10 sm:mt-10 lg:mt-10">
          <div className="min-h-screen bg-gradient-subtle">
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  <Gift className="w-4 h-4 mr-2" />
                  {getText("subscription.chooseYourPlan")}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">
                  {getText("subscription.title")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {getText("subscription.subtitle")}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "30px",
                }}
              >
                {/* Monthly */}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: !isAnnual ? "bold" : "normal",
                    color: !isAnnual ? "#000" : "#777",
                  }}
                >
                  {getText("subscription.monthly")}
                </span>

                {/* Toggle Switch */}
                <label
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "50px",
                    height: "24px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isAnnual}
                    onChange={() => setIsAnnual(!isAnnual)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: isAnnual ? "#00b4d8" : "#ccc",
                      transition: "0.4s",
                      borderRadius: "24px",
                    }}
                  ></span>
                  <span
                    style={{
                      position: "absolute",
                      content: "",
                      height: "18px",
                      width: "18px",
                      left: isAnnual ? "28px" : "4px",
                      bottom: "3px",
                      backgroundColor: "white",
                      transition: "0.4s",
                      borderRadius: "50%",
                    }}
                  ></span>
                </label>

                {/* Annual */}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: isAnnual ? "bold" : "normal",
                    color: isAnnual ? "#000" : "#777",
                  }}
                >
                  {getText("subscription.annual")}
                </span>

                {/* Save badge */}
                {isAnnual && (
                  <span
                    style={{
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                      padding: "3px 8px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                    }}
                  >
                    {getText("subscription.save20")}
                  </span>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

                  return (
                    <Card
                      key={plan.id}
                      className={`relative overflow-hidden ${
                        plan.popular
                          ? "ring-2 ring-sky-400 shadow-lg scale-105"
                          : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-sky-400 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                          {getText("subscription.popular")}
                        </div>
                      )}

                      <CardHeader className="pb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>

                        <div className="mt-4">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">₪{price}</span>
                            <span className="text-muted-foreground">
                              /
                              {isAnnual
                                ? getText("subscription.year")
                                : getText("subscription.month")}
                            </span>
                          </div>
                          {isAnnual && (
                            <p className="text-sm text-muted-foreground">
                              {getText("subscription.billedAnnually")}
                            </p>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Button
                            className={`w-full rounded-2xl ${
                              plan.popular
                                ? "bg-sky-400 text-white hover:bg-sky-500"
                                : "border border-sky-400 text-black-400 hover:bg-sky-50"
                            }`}
                            // onClick={() => handleSubscribe(plan.id)}
                            onClick={handleChoosePlan}
                          >
                            {getText("subscription.choosePlan")}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="max-w-2xl mx-auto">
                <Card className="border-dashed border-2 border-sky-100/50 bg-sky-100/50">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="w-6 h-6 text-sky-400" />
                      <Zap className="w-6 h-6 text-sky-400" />
                    </div>
                    <CardTitle className="text-xl">
                      {getText("subscription.goodDeedTitle")}
                    </CardTitle>
                    <CardDescription>
                      {getText("subscription.goodDeedDescription")}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        {getText("subscription.goodDeedOptions")}
                      </div>

                      <Link href="/good-deeds">
                        <Button
                          variant="outline"
                          // onClick={handleGoodDeedPayment}
                          onClick={handleChoosePlan}
                          className="w-full rounded-2xl border-dashed border-2 border-sky-400/50 text-sky-600 hover:bg-sky-50"
                        >
                          <Gift className="w-4 h-4 mr-2" />
                          {getText("subscription.payWithGoodDeeds")}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-sm text-muted-foreground mb-4">
                  {getText("subscription.freeForNow")}
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span>{getText("subscription.securePayment")}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{getText("subscription.cancelAnytime")}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>{getText("subscription.support247")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}
