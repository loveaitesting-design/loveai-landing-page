import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

 const AdBanner = () => {
  const { t, i18n } = useTranslation();

  return (
    <Card className="w-full border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <ExternalLink className="w-3 h-3 mr-1" />
            {t('advertisement')}
          </Badge>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="font-bold text-lg text-center text-blue-800">
            {t('your_advertisement_can_appear_here')}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-700 text-center">
            {t('reach_audience')}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-center">
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('whatsapp')}
            </Button>
            <Button size="sm" variant="outline" className="border-blue-300 text-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              {t('send_email')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdBanner;