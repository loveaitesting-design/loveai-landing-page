import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowRight, Star, Users, Award, Shield, Headphones } from "lucide-react";
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language; 

  // const handleStartJourneyClick = () => {
  //   analytics.trackConversion('cta_start_journey_click');
  //   analytics.trackUserEngagement('click', 'cta_start_journey_button');
  // };

  // const handleLearnMoreClick = () => {
  //   analytics.trackUserEngagement('click', 'cta_learn_more_button');
  // };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Card className="bg-white border border-gray-200 shadow-lg rounded-3xl p-8 md:p-12 max-w-8xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <Badge className="bg-sky-50 text-sky-600 border-sky-200 mb-4 px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              {t("cta.badge")}
            </Badge>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t("cta.title")}
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Headphones className="w-5 h-5" />
                <span className="text-lg font-medium">{t("cta.benefits.support")}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Heart className="w-5 h-5" />
                <span className="text-lg font-medium">{t("cta.benefits.advancedMatching")}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Shield className="w-5 h-5" />
                <span className="text-lg font-medium">{t("cta.benefits.verifiedProfiles")}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <Star className="w-5 h-5" />
                <span className="text-lg font-medium">{t("cta.benefits.freeRegistration")}</span>
              </div>
            </div>

            {/* Action buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Button
    size="lg"
    className="bg-sky-400 hover:bg-sky-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200"
    asChild
  >
    <a
      href="https://www.loveai.co.il/login"
      className="flex items-center justify-center gap-2"
    >
      <Heart className="w-5 h-5" />
      {t("cta.startJourney")}
    </a>
  </Button>

  <Button
    variant="outline"
    size="lg"
    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-200"
    asChild
  >
    <a href="/pricing" className="flex items-center justify-center gap-2">
      {t("cta.learnMore")}
      <ArrowRight className="w-5 h-5" />
    </a>
  </Button>
</div>


            {/* Trust indicators */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-8 border-t border-gray-200 mt-8">
              <div className="flex items-baseline justify-center gap-2 text-gray-900">
                <span className="text-2xl md:text-3xl font-bold">98%</span>
                <span className="text-2xl text-gray-600">{t("cta.trustIndicators.satisfaction")}</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 text-gray-900">
                <span className="text-2xl md:text-3xl font-bold">10,000+</span>
                <span className="text-2xl text-gray-600">{t("cta.trustIndicators.matches")}</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 text-gray-900">
                <span className="text-2xl md:text-3xl font-bold">50,000+</span>
                <span className="text-2xl text-gray-600">{t("cta.trustIndicators.users")}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;