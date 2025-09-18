'use client';
import { Check, X } from "lucide-react";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PolicyLayout from '@/components/PolicyLayout';
import KindnessJourneySection from "@/components/KindnessJourneySection/KindnessJourneySection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {  Crown, Heart, Star, Gift, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from "next/link";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const plans = [
    {
      id: 'basic',
      name: t('subscription.basic'),
      description: t('subscription.basicDesc'),
      monthlyPrice: 49,
      annualPrice: 490,
      icon: Heart,
      features: [
        t('subscription.basicFeature1'),
        t('subscription.basicFeature2'),
        t('subscription.basicFeature3'),
        t('subscription.basicFeature4'),
      ],
      color: 'from-blue-500 to-blue-600',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'premium',
      name: t('subscription.premium'),
      description: t('subscription.premiumDesc'),
      monthlyPrice: 99,
      annualPrice: 990,
      icon: Crown,
      popular: true,
      features: [
        t('subscription.premiumFeature1'),
        t('subscription.premiumFeature2'),
        t('subscription.premiumFeature3'),
        t('subscription.premiumFeature4'),
        t('subscription.premiumFeature5'),
        t('subscription.premiumFeature6'),
      ],
      color: 'from-purple-500 to-pink-500',
      badgeColor: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'enterprise',
      name: t('subscription.enterprise'),
      description: t('subscription.enterpriseDesc'),
      monthlyPrice: 199,
      annualPrice: 1990,
      icon: Star,
      features: [
        t('subscription.enterpriseFeature1'),
        t('subscription.enterpriseFeature2'),
        t('subscription.enterpriseFeature3'),
        t('subscription.enterpriseFeature4'),
        t('subscription.enterpriseFeature5'),
        t('subscription.enterpriseFeature6'),
        t('subscription.enterpriseFeature7'),
      ],
      color: 'from-orange-500 to-red-500',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
  ];

  const handleSubscribe = async (planId: string) => {
    // Handle subscription logic without auth
    toast({
      title: t('subscription.comingSoon'),
      description: t('subscription.paymentSoon'),
    });
  };

  const handleGoodDeedPayment = () => {
    toast({
      title: t('subscription.goodDeedPayment'),
      description: t('subscription.goodDeedPaymentDesc'),
    });
  };

  return (
    <PolicyLayout>
      <AccessibilityProvider>
        <AccessibilityWidget/>
      <div className="mt-10 sm:mt-10 lg:mt-10">
        <div className="min-h-screen bg-gradient-subtle">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Gift className="w-4 h-4 mr-2" />
                {t('subscription.chooseYourPlan')}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{t('subscription.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('subscription.subtitle')}
              </p>
            </div>

          <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>
            {t('subscription.monthly')}
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <span className={`text-sm ${isAnnual ? 'font-semibold' : 'text-muted-foreground'}`}>
            {t('subscription.annual')}
          </span>
          {isAnnual && (
            <Badge variant="secondary" className="ml-2">
              {t('subscription.save20')}
            </Badge>
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
                      plan.popular ? 'ring-2 ring-sky-400 shadow-lg scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-sky-400 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                        {t('subscription.popular')}
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      
                      <div className="mt-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">₪{price}</span>
                          <span className="text-muted-foreground">
                            /{isAnnual ? t('subscription.year') : t('subscription.month')}
                          </span>
                        </div>
                        {isAnnual && (
                          <p className="text-sm text-muted-foreground">
                            {t('subscription.billedAnnually')}
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
      ? "bg-sky-400 text-white hover:bg-sky-500" // Popular → filled button
      : "border border-sky-400 text-black-400 hover:bg-sky-50" // Not popular → outlined button
  }`}
  onClick={() => handleSubscribe(plan.id)}
>
  {t("subscription.choosePlan")}
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
                  <CardTitle className="text-xl">{t('subscription.goodDeedTitle')}</CardTitle>
                  <CardDescription>
                    {t('subscription.goodDeedDescription')}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      {t('subscription.goodDeedOptions')}
                    </div>
                    
                    <Link href="/good-deeds">
  <Button
    variant="outline"
    onClick={handleGoodDeedPayment}
    className="w-full rounded-2xl border-dashed border-2 border-sky-400/50 text-sky-600 hover:bg-sky-50"
  >
    <Gift className="w-4 h-4 mr-2" />
    {t("subscription.payWithGoodDeeds")}
  </Button>
</Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                {t('subscription.freeForNow')}
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span>{t('subscription.securePayment')}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>{t('subscription.cancelAnytime')}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>{t('subscription.support247')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}