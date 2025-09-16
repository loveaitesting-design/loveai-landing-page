import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from 'react-i18next';
import { Heart, Calendar, MapPin, Star, Users, TrendingUp } from "lucide-react";
import AppShowcase  from "@/components/AppShowCase/AppShowcase";

const CaseStudies = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || 'en';

  // Get case studies from translation
const rawCaseStudies = t('caseStudies.stories', { returnObjects: true });
const caseStudies = Array.isArray(rawCaseStudies) ? rawCaseStudies : [];
  
  // Fixed stats for all case studies
  const stats = [
    { matchAccuracy: "94%", daysToFirstDate: "3", monthsToEngagement: "5", relationshipSatisfaction: "9.8/10" },
    { matchAccuracy: "89%", daysToFirstDate: "2", monthsToLivingTogether: "8", relationshipSatisfaction: "9.3/10" }
  ];

  return (
    <section className="py-20 bg-white first-letter:relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-6 max-w-8xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-sky-100 text-sky-600 border-sky-200 mb-6">
            <Users className="w-4 h-4 mr-2" />
            {t('caseStudies.badge')}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              {t('caseStudies.title')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        {/* App Showcase */}
        <AppShowcase />

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="p-8 bg-white/90 backdrop-blur border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Stats Sidebar - Left */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2 text-sky-600">
                      <TrendingUp className="w-5 h-5" />
                      data
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-sky-50 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-sky-500 mb-1">{stats[index].matchAccuracy}</div>
                        <div className="text-sm text-gray-600">
                          {t('caseStudies.stats.matchingAccuracy')}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-gray-600 mb-1">{stats[index].daysToFirstDate}</div>
                        <div className="text-sm text-gray-600">
                          {t('caseStudies.stats.daysToFirstDate')}
                        </div>
                      </div>

                      <div className="p-4 bg-red-50 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-red-500 mb-1">
                          {stats[index].monthsToEngagement || stats[index].monthsToLivingTogether}
                        </div>
                        <div className="text-sm text-gray-600">
                          {t('caseStudies.stats.monthsToCommitment')}
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-green-500 mb-1">{stats[index].relationshipSatisfaction}</div>
                        <div className="text-sm text-gray-600">
                          {t('caseStudies.stats.satisfaction')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Story - Right */}
                <div className="lg:col-span-2 space-y-6 order-1 lg:order-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-sky-600 font-semibold mb-2">{study.subtitle}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{study.timeline}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-500 mb-2">
                        {t('caseStudies.labels.challenge')}
                      </h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sky-500 mb-2">
                        {t('caseStudies.labels.solution')}
                      </h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-green-500 mb-2">
                        {t('caseStudies.labels.result')}
                      </h4>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-sky-400 pl-4 italic text-lg text-gray-700">
                    "{study.quote}"
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow-md">
              <div className="text-3xl font-bold text-sky-500 mb-2">92%</div>
              <div className="text-gray-600">
                {t('caseStudies.trustIndicators.successRate')}
              </div>
            </div>
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow-md">
              <div className="text-3xl font-bold text-red-400 mb-2">4.9/5</div>
              <div className="text-gray-600">
                {t('caseStudies.trustIndicators.averageRating')}
              </div>
            </div>
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow-md">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2,500+</div>
              <div className="text-gray-600">
                {t('caseStudies.trustIndicators.marriedCouples')}
              </div>
            </div>
            <div className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow-md">
              <div className="text-3xl font-bold text-sky-400 mb-2">15,000+</div>
              <div className="text-gray-600">
                {t('caseStudies.trustIndicators.activeUsers')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;

