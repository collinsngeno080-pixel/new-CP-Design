import { useEffect } from 'react'
import Terms from './Terms'
import { updateSEO, SEO_CONFIGS, addStructuredData } from '@/lib/seo'

export default function PrivacyPage() {
    useEffect(() => {
        // Update meta tags for SEO
        updateSEO(SEO_CONFIGS.privacy);

        // Add WebPage structured data
        addStructuredData({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy Policy for College Produce and ExhibitPro",
            "url": "https://collegeproduce.com/privacy",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://collegeproduce.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Privacy",
                        "item": "https://collegeproduce.com/privacy"
                    }
                ]
            }
        });
    }, []);

    return <Terms />
}
