'use client'

import TeamsComp from "@/components/TermsCommon/TeamsComp"
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
export default function Page() {
    const { t, ready } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Complete fallback content for all 20 sections
    const fallbackTerms = {
        headText: "Dating Tips & Advice",
        MainText: {
            title: "Expert Dating Tips",
            description: []
        },
        array: [
            // Section 1
            {
                title: "1. Create an Authentic Profile",
                description: [
                    { parts: [ 
                        { type: 'bold', value: "Be genuine: " }, 
                        { type: 'text', value: "Show your true personality in your profile." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Use recent photos that represent the real you." } 
                    ] }
                ]
            },
            // Section 2
            {
                title: "2. First Message Tips",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Start with " }, 
                        { type: 'bold', value: "something personal " }, 
                        { type: 'text', value: "from their profile." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Ask " }, 
                        { type: 'bold', value: "open-ended questions " }, 
                        { type: 'text', value: "to encourage conversation." } 
                    ] }
                ]
            },
            // Section 3
            {
                title: "3. Conversation Starters",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Mention " }, 
                        { type: 'bold', value: "shared interests " }, 
                        { type: 'text', value: "from their profile." } 
                    ] },
                    { parts: [ 
                        { type: 'bold', value: "Avoid generic openers: " }, 
                        { type: 'text', value: "Be specific to stand out." } 
                    ] }
                ]
            },
            // Section 4
            {
                title: "4. Profile Photo Tips",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Use " }, 
                        { type: 'bold', value: "high-quality photos " }, 
                        { type: 'text', value: "that show your face clearly." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Include a mix of close-ups and full-body shots." } 
                    ] }
                ]
            },
            // Section 5
            {
                title: "5. Bio Writing Guide",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Keep it " }, 
                        { type: 'bold', value: "concise but interesting " }, 
                        { type: 'text', value: "with a touch of humor." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Highlight your " }, 
                        { type: 'bold', value: "unique qualities " }, 
                        { type: 'text', value: "and what makes you special." } 
                    ] }
                ]
            },
            // Section 6
            {
                title: "6. First Date Ideas",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Choose " }, 
                        { type: 'bold', value: "public places " }, 
                        { type: 'text', value: "for comfort and safety." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Activity-based dates can ease first-meet jitters." } 
                    ] }
                ]
            },
            // Section 7
            {
                title: "7. Red Flags to Watch For",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Be cautious of profiles with " }, 
                        { type: 'bold', value: "inconsistent information." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Watch for " }, 
                        { type: 'bold', value: "pushy behavior " }, 
                        { type: 'text', value: "or requests for personal information." } 
                    ] }
                ]
            },
            // Section 8
            {
                title: "8. Online Dating Etiquette",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Respond to messages " }, 
                        { type: 'bold', value: "within a reasonable time " }, 
                        { type: 'text', value: "even if not interested." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Be polite but clear when ending conversations." } 
                    ] }
                ]
            },
            // Section 9
            {
                title: "9. Building Connection",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Share " }, 
                        { type: 'bold', value: "personal stories " }, 
                        { type: 'text', value: "to create emotional bonds." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Ask " }, 
                        { type: 'bold', value: "thoughtful follow-up questions " }, 
                        { type: 'text', value: "about their responses." } 
                    ] }
                ]
            },
            // Section 10
            {
                title: "10. Handling Rejection",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Don't take it personally - " }, 
                        { type: 'bold', value: "compatibility is complex." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "View each " }, 
                        { type: 'bold', value: "no as a step closer " }, 
                        { type: 'text', value: "to finding the right match." } 
                    ] }
                ]
            },
            // Section 11
            {
                title: "11. Dating App Algorithms",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Regularly " }, 
                        { type: 'bold', value: "update your profile " }, 
                        { type: 'text', value: "to stay visible in searches." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Complete all profile sections for better matching." } 
                    ] }
                ]
            },
            // Section 12
            {
                title: "12. Long-Distance Dating",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Establish " }, 
                        { type: 'bold', value: "clear communication expectations " }, 
                        { type: 'text', value: "early on." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Plan regular " }, 
                        { type: 'bold', value: "video dates " }, 
                        { type: 'text', value: "to maintain connection." } 
                    ] }
                ]
            },
            // Section 13
            {
                title: "13. Dating After Breakup",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Give yourself " }, 
                        { type: 'bold', value: "adequate healing time " }, 
                        { type: 'text', value: "before jumping back in." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Be honest about your " }, 
                        { type: 'bold', value: "emotional availability." } 
                    ] }
                ]
            },
            // Section 14
            {
                title: "14. Age Gap Relationships",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Discuss " }, 
                        { type: 'bold', value: "life stage expectations " }, 
                        { type: 'text', value: "openly and early." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Be prepared to handle " }, 
                        { type: 'bold', value: "social perceptions " }, 
                        { type: 'text', value: "together." } 
                    ] }
                ]
            },
            // Section 15
            {
                title: "15. Cultural Differences",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Approach differences with " }, 
                        { type: 'bold', value: "curiosity not judgment." }, 
                        { type: 'text', value: " Ask questions to understand their perspective." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Be clear about your " }, 
                        { type: 'bold', value: "non-negotiables " }, 
                        { type: 'text', value: "early on." } 
                    ] }
                ]
            },
            // Section 16
            {
                title: "16. Dating with Kids",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Be upfront about your " }, 
                        { type: 'bold', value: "parental status " }, 
                        { type: 'text', value: "in your profile." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Establish " }, 
                        { type: 'bold', value: "clear boundaries " }, 
                        { type: 'text', value: "around introducing partners to children." } 
                    ] }
                ]
            },
            // Section 17
            {
                title: "17. Dating While Busy",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Schedule " }, 
                        { type: 'bold', value: "dedicated dating time " }, 
                        { type: 'text', value: "in your calendar." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Look for partners who understand your " }, 
                        { type: 'bold', value: "career commitments." } 
                    ] }
                ]
            },
            // Section 18
            {
                title: "18. Second Date Strategies",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Plan an activity that " }, 
                        { type: 'bold', value: "builds on your first date conversation." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Show you were listening by " }, 
                        { type: 'bold', value: "referencing something they mentioned." } 
                    ] }
                ]
            },
            // Section 19
            {
                title: "19. Dating Redefined",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Modern dating means " }, 
                        { type: 'bold', value: "defining your own rules " }, 
                        { type: 'text', value: "and timeline." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Don't compare your journey to " }, 
                        { type: 'bold', value: "others' highlight reels." } 
                    ] }
                ]
            },
            // Section 20
            {
                title: "20. Dating Mindset",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Approach dating with " }, 
                        { type: 'bold', value: "optimism and patience." }, 
                        { type: 'text', value: " Good things take time." } 
                    ] },
                    { parts: [ 
                        { type: 'text', value: "Enjoy the process of meeting new people." } 
                    ] }
                ]
            },
            // Bonus Section
            {
                title: "Bonus Tip",
                description: [
                    { parts: [ 
                        { type: 'text', value: "Have fun and be yourself - the right person will appreciate you!" } 
                    ] }
                ]
            }
        ]
    };

    const getTranslatedContent = () => {
        if (ready && isMounted) {
            return {
                headText: t('dating_tips.headText'),
                MainText: {
                    title: t('dating_tips.main.title'),
                    description: []
                },
                array: [
                    // 1
                    {
                        title: t('dating_tips.sections.1.title'),
                        description: [
                            { parts: [ { type: 'bold', value: t('dating_tips.sections.1.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.1.desc1.text') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.1.desc2') } ] }
                        ]
                    },
                    // 2
                    {
                        title: t('dating_tips.sections.2.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.2.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.2.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.2.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.2.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.2.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.2.desc2.text2') } ] }
                        ]
                    },
                    // 3
                    {
                        title: t('dating_tips.sections.3.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.3.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.3.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.3.desc1.text2') } ] },
                            { parts: [ { type: 'bold', value: t('dating_tips.sections.3.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.3.desc2.text') } ] }
                        ]
                    },
                    // 4
                    {
                        title: t('dating_tips.sections.4.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.4.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.4.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.4.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.4.desc2') } ] }
                        ]
                    },
                    // 5
                    {
                        title: t('dating_tips.sections.5.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.5.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.5.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.5.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.5.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.5.desc2.bold1') }, { type: 'text', value: t('dating_tips.sections.5.desc2.text2') }, { type: 'bold', value: t('dating_tips.sections.5.desc2.bold2') }, { type: 'text', value: t('dating_tips.sections.5.desc2.text3') } ] }
                        ]
                    },
                    // 6
                    {
                        title: t('dating_tips.sections.6.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.6.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.6.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.6.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.6.desc2') } ] }
                        ]
                    },
                    // 7
                    {
                        title: t('dating_tips.sections.7.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.7.desc1') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.7.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.7.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.7.desc2.text2') } ] }
                        ]
                    },
                    // 8
                    {
                        title: t('dating_tips.sections.8.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.8.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.8.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.8.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.8.desc2') } ] }
                        ]
                    },
                    // 9
                    {
                        title: t('dating_tips.sections.9.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.9.desc1') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.9.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.9.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.9.desc2.text2') } ] }
                        ]
                    },
                    // 10
                    {
                        title: t('dating_tips.sections.10.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.10.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.10.desc1.bold') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.10.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.10.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.10.desc2.text2') } ] }
                        ]
                    },
                    // 11
                    {
                        title: t('dating_tips.sections.11.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.11.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.11.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.11.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.11.desc2') } ] }
                        ]
                    },
                    // 12
                    {
                        title: t('dating_tips.sections.12.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.12.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.12.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.12.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.12.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.12.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.12.desc2.text2') } ] }
                        ]
                    },
                    // 13
                    {
                        title: t('dating_tips.sections.13.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.13.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.13.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.13.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.13.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.13.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.13.desc2.text2') } ] }
                        ]
                    },
                    // 14
                    {
                        title: t('dating_tips.sections.14.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.14.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.14.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.14.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.14.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.14.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.14.desc2.text2') } ] }
                        ]
                    },
                    // 15
                    {
                        title: t('dating_tips.sections.15.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.15.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.15.desc1.bold1') }, { type: 'text', value: t('dating_tips.sections.15.desc1.text2') }, { type: 'bold', value: t('dating_tips.sections.15.desc1.bold2') }, { type: 'text', value: t('dating_tips.sections.15.desc1.text3') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.15.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.15.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.15.desc2.text2') } ] }
                        ]
                    },
                    // 16
                    {
                        title: t('dating_tips.sections.16.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.16.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.16.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.16.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.16.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.16.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.16.desc2.text2') } ] }
                        ]
                    },
                    // 17
                    {
                        title: t('dating_tips.sections.17.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.17.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.17.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.17.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.17.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.17.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.17.desc2.text2') } ] }
                        ]
                    },
                    // 18
                    {
                        title: t('dating_tips.sections.18.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.18.desc1') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.18.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.18.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.18.desc2.text2') } ] }
                        ]
                    },
                    // 19
                    {
                        title: t('dating_tips.sections.19.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.19.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.19.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.19.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.19.desc2.text1') }, { type: 'bold', value: t('dating_tips.sections.19.desc2.bold') }, { type: 'text', value: t('dating_tips.sections.19.desc2.text2') } ] }
                        ]
                    },
                    // 20
                    {
                        title: t('dating_tips.sections.20.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.20.desc1.text1') }, { type: 'bold', value: t('dating_tips.sections.20.desc1.bold') }, { type: 'text', value: t('dating_tips.sections.20.desc1.text2') } ] },
                            { parts: [ { type: 'text', value: t('dating_tips.sections.20.desc2') } ] }
                        ]
                    },
                    // Bonus
                    {
                        title: t('dating_tips.sections.bonus.title'),
                        description: [
                            { parts: [ { type: 'text', value: t('dating_tips.sections.bonus.desc1') } ] }
                        ]
                    }
                ]
            };
        }
        return fallbackTerms;
    };

    const terms = getTranslatedContent();

    return (
        <PolicyLayout>
             <AccessibilityProvider>
                                        <AccessibilityWidget/>
            <div className="pt-[72px]" style={{ background: 'white' }}>
                <TeamsComp terms={terms} />
            </div>
            </AccessibilityProvider>
        </PolicyLayout>
    )
}