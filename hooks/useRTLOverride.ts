// hooks/useRTLOverride.ts
import { useTranslation } from "react-i18next";
import { CSSProperties } from "react";

export const useRTLOverride = (overrideRTL: boolean = true) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const isHebrew = isRTL;

  const getRTLOverrideProps = () => {
    if (!overrideRTL) return {};
    
    return {
      dir: 'ltr' as const,
      style: { 
        direction: 'ltr' as const,
      } as CSSProperties
    };
  };

  const getTextAlignmentStyle = (): CSSProperties => {
    if (!overrideRTL) return {};
    return { textAlign: isHebrew ? 'right' : 'left' };
  };

  const getTextAlignmentClass = (leftClass: string = 'text-left', rightClass: string = 'text-right') => {
    if (!overrideRTL) return leftClass;
    return isHebrew ? rightClass : leftClass;
  };

  return {
    isRTL,
    isHebrew,
    getRTLOverrideProps,
    getTextAlignmentStyle,
    getTextAlignmentClass
  };
};