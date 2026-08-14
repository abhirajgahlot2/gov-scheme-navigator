/**
 * Translation strings for English and Hindi.
 * Add new keys here as needed — all UI text lives in one place.
 */

const translations = {
    en: {
        // Header
        productName: "Government Scheme Navigator",

        // Navigation
        navHome: "Home",
        navAbout: "About Us",
        navSources: "Sources",

        // Home – Hero
        heroHeading1: "Discover government schemes",
        heroHeading2: "made for your situation.",
        heroSubheading:
            "Tell us about yourself, your needs, and your circumstances. We will find relevant schemes and explain how to apply.",

        // SearchBox
        searchPlaceholder:
            "Example: I'm a 32-year-old farmer from Gujarat. I own 2 acres of land, earn around ₹2 lakh per year, and need financial assistance for farming.",
        searchHint:
            "Include details such as your location, occupation, approximate income, age, and what kind of assistance you need.",
        searchButton: "Find Relevant Schemes",
        searchButtonLoading: "Searching...",
        tryAnExample: "Try an example:",

        // Example prompts
        exampleFarmer: "Farmer seeking agricultural support",
        exampleFarmerText:
            "I am a 32-year-old farmer from Gujarat. I own 2 acres of land, earn around ₹2 lakh per year, and need financial assistance for farming and crop insurance.",
        exampleStudent: "Student seeking education support",
        exampleStudentText:
            "I am an 18-year-old student from a rural area in Bihar from a family that has an annual income below ₹1 lakh. I am looking for scholarships and financial support to continue my higher education.",
        exampleWoman: "Woman looking to start a business",
        exampleWomanText:
            "I am a 28-year-old woman from Maharashtra. I want to start a small tailoring business but do not have the capital. I am looking for loans or grants specifically for women entrepreneurs.",
        exampleSenior: "Senior citizen seeking welfare benefits",
        exampleSeniorText:
            "I am a 65-year-old retired government employee from Rajasthan. I live alone and am looking for welfare benefits, pension schemes, or health coverage for senior citizens.",

        // Loading
        loadingText: "Finding schemes that may be relevant to you...",
        loadingSubtext: "Searching across government welfare programmes",

        // Results
        resultsTitle: "Relevant Schemes",
        resultsSubtitle:
            "Based on the information you provided, here are the schemes we found. Click on a scheme to see more details.",
        yourQuery: "Your query:",
        searchAgain: "Search Again",
        searchAnother: "Search for another situation",

        // SchemeCard
        matchYes: "Yes",
        matchNo: "No",
        sectionReason: "Why this may be relevant",
        sectionEligibility: "Eligibility criteria",
        sectionBenefits: "Benefits",
        sectionApplication: "How to apply",
        viewSource: "View Official Government Source",

        // Empty
        emptyTitle: "No relevant schemes found.",
        emptyBody:
            "Try adding more information about your occupation, location, approximate income, age, or the type of assistance you need.",
        tryAgainP: "Please write in a meaningful format and Try Again",

        // Home Features
        featureSecurityTitle: "Data Privacy First",
        featureSecurityDesc: "We do not store your personal information. Your query is used strictly to find relevant schemes temporarily.",
        featureSpeedTitle: "Comprehensive Database",
        featureSpeedDesc: "We scan through hundreds of active schemes spanning both State and Central government ministries.",
        featureLocalTitle: "Multilingual Support",
        featureLocalDesc: "Accessible layout designed for users searching natively in English or Hindi.",

        // Error
        errorTitle: "We couldn't retrieve schemes right now.",
        errorBody:
            "Please try again in a moment. If the problem persists, check your internet connection.",
        tryAgain: "Try Again",

        // About
        aboutTitle: "About Us",
        aboutSubtitle:
            "Government Scheme Navigator is a hackathon project built to simplify access to government welfare schemes across India.",
        aboutMissionTitle: "Our Mission",
        aboutMission1:
            "India has hundreds of government welfare schemes across central and state governments. Many eligible citizens miss out simply because they are unaware of these programmes or find the application process confusing. We built this tool to bridge that gap.",
        aboutMission2:
            "Describe your situation in plain language and we will match you with relevant schemes, explain why each one applies, and guide you on how to apply.",
        aboutHowTitle: "How It Works",
        aboutStep1Title: "Describe Your Situation",
        aboutStep1Text:
            "Enter details about your age, occupation, income, location, and the type of assistance you need.",
        aboutStep2Title: "We Search and Analyse",
        aboutStep2Text:
            "Our system searches through government scheme databases and uses AI to match schemes to your situation.",
        aboutStep3Title: "View Your Results",
        aboutStep3Text:
            "See relevant schemes with eligibility criteria, benefits, and direct links to official government sources.",
        aboutWhoTitle: "Who We Help",
        aboutTeamTitle: "The Team",
        aboutTeamText:
            "This project was built by a 4-member team during a 6-hour college hackathon. Our goal is to make government welfare information accessible to every citizen, regardless of their technical literacy.",
        aboutDisclaimerTitle: "Disclaimer",
        aboutDisclaimerText:
            "This tool is for informational purposes only. Always verify eligibility and application details with official government websites. We do not guarantee scheme availability or eligibility verification.",

        // Sources
        sourcesTitle: "Sources",
        sourcesSubtitle:
            "These are the official government websites and portals we reference to find scheme information. All data is sourced from government publications.",
        visitWebsite: "Visit Website",
    },

    hi: {
        productName: "सरकारी योजना नेविगेटर",

        navHome: "होम",
        navAbout: "हमारे बारे में",
        navSources: "स्रोत",

        heroHeading1: "सरकारी योजनाओं की खोज करें",
        heroHeading2: "जो आपकी स्थिति के लिए बनी हैं।",
        heroSubheading:
            "अपने बारे में, अपनी ज़रूरतों और परिस्थितियों के बारे में बताएं। हम संबंधित योजनाएं ढूंढेंगे और आवेदन करने का तरीका बताएंगे।",

        searchPlaceholder:
            "उदाहरण: मैं गुजरात का 32 वर्षीय किसान हूं। मेरे पास 2 एकड़ ज़मीन है, सालाना आय लगभग ₹2 लाख है, और मुझे खेती के लिए आर्थिक सहायता चाहिए।",
        searchHint:
            "अपना स्थान, व्यवसाय, अनुमानित आय, उम्र और किस प्रकार की सहायता चाहिए, ये विवरण शामिल करें।",
        searchButton: "संबंधित योजनाएं खोजें",
        searchButtonLoading: "खोज रहे हैं...",
        tryAnExample: "एक उदाहरण आज़माएं:",

        exampleFarmer: "कृषि सहायता चाहने वाला किसान",
        exampleFarmerText:
            "मैं गुजरात का 32 वर्षीय किसान हूं। मेरे पास 2 एकड़ ज़मीन है, सालाना आय लगभग ₹2 लाख है, और मुझे खेती और फसल बीमा के लिए आर्थिक सहायता चाहिए।",
        exampleStudent: "शिक्षा सहायता चाहने वाला छात्र",
        exampleStudentText:
            "मैं बिहार के ग्रामीण क्षेत्र से 18 वर्षीय छात्र हूं, मेरे परिवार की वार्षिक आय ₹1 लाख से कम है। मैं उच्च शिक्षा के लिए छात्रवृत्ति और आर्थिक सहायता ढूंढ रहा हूं।",
        exampleWoman: "व्यवसाय शुरू करने वाली महिला",
        exampleWomanText:
            "मैं महाराष्ट्र की 28 वर्षीय महिला हूं। मैं एक छोटा सिलाई व्यवसाय शुरू करना चाहती हूं लेकिन पूंजी नहीं है। मैं महिला उद्यमियों के लिए ऋण या अनुदान ढूंढ रही हूं।",
        exampleSenior: "कल्याण लाभ चाहने वाले वरिष्ठ नागरिक",
        exampleSeniorText:
            "मैं राजस्थान का 65 वर्षीय सेवानिवृत्त सरकारी कर्मचारी हूं। मैं अकेला रहता हूं और कल्याण लाभ, पेंशन योजनाएं या वरिष्ठ नागरिकों के लिए स्वास्थ्य कवरेज ढूंढ रहा हूं।",

        loadingText: "आपके लिए संबंधित योजनाएं ढूंढ रहे हैं...",
        loadingSubtext: "सरकारी कल्याण कार्यक्रमों में खोज रहे हैं",

        resultsTitle: "संबंधित योजनाएं",
        resultsSubtitle:
            "आपके द्वारा दी गई जानकारी के आधार पर, ये योजनाएं मिलीं। विवरण देखने के लिए किसी योजना पर क्लिक करें।",
        yourQuery: "आपका प्रश्न:",
        searchAgain: "फिर से खोजें",
        searchAnother: "किसी और स्थिति के लिए खोजें",

        matchYes: "हां",
        matchNo: "नहीं",
        sectionReason: "यह क्यों प्रासंगिक हो सकता है",
        sectionEligibility: "पात्रता मानदंड",
        sectionBenefits: "लाभ",
        sectionApplication: "आवेदन कैसे करें",
        viewSource: "आधिकारिक सरकारी स्रोत देखें",

        emptyTitle: "कोई संबंधित योजना नहीं मिली।",
        emptyBody:
            "अपने व्यवसाय, स्थान, अनुमानित आय, उम्र या आवश्यक सहायता के प्रकार के बारे में अधिक जानकारी जोड़ने का प्रयास करें।",
        tryAgainP: "कृपया एक सार्थक प्रारूप में लिखें और पुनः प्रयास करें",

        featureSecurityTitle: "डेटा गोपनीयता सर्वोपरि",
        featureSecurityDesc: "हम आपकी व्यक्तिगत जानकारी संग्रहीत नहीं करते हैं। आपकी क्वेरी का उपयोग पूरी तरह से अस्थायी रूप से प्रासंगिक योजनाएं खोजने के लिए किया जाता है।",
        featureSpeedTitle: "व्यापक डेटाबेस",
        featureSpeedDesc: "हम राज्य और केंद्र सरकार के मंत्रालयों तक फैली सैकड़ों सक्रिय योजनाओं को स्कैन करते हैं।",
        featureLocalTitle: "बहुभाषी समर्थन",
        featureLocalDesc: "अंग्रेजी या हिंदी में मूल रूप से खोज करने वाले उपयोगकर्ताओं के लिए डिज़ाइन किया गया सुलभ लेआउट।",

        errorTitle: "अभी योजनाएं प्राप्त नहीं हो सकीं।",
        errorBody:
            "कृपया थोड़ी देर बाद पुनः प्रयास करें। यदि समस्या बनी रहे तो अपना इंटरनेट कनेक्शन जांचें।",
        tryAgain: "पुनः प्रयास करें",

        aboutTitle: "हमारे बारे में",
        aboutSubtitle:
            "सरकारी योजना नेविगेटर एक हैकथॉन प्रोजेक्ट है जो भारत भर में सरकारी कल्याण योजनाओं तक पहुंच को सरल बनाने के लिए बनाया गया है।",
        aboutMissionTitle: "हमारा मिशन",
        aboutMission1:
            "भारत में केंद्र और राज्य सरकारों की सैकड़ों कल्याण योजनाएं हैं। कई पात्र नागरिक इन कार्यक्रमों से अनजान होने या आवेदन प्रक्रिया जटिल लगने के कारण लाभ से वंचित रह जाते हैं। हमने इस अंतर को पाटने के लिए यह टूल बनाया है।",
        aboutMission2:
            "अपनी स्थिति सरल भाषा में बताएं और हम संबंधित योजनाओं से मिलान करेंगे, बताएंगे कि प्रत्येक क्यों लागू होती है, और आवेदन करने में मार्गदर्शन करेंगे।",
        aboutHowTitle: "यह कैसे काम करता है",
        aboutStep1Title: "अपनी स्थिति बताएं",
        aboutStep1Text:
            "अपनी उम्र, व्यवसाय, आय, स्थान और आवश्यक सहायता के प्रकार का विवरण दर्ज करें।",
        aboutStep2Title: "हम खोज और विश्लेषण करते हैं",
        aboutStep2Text:
            "हमारा सिस्टम सरकारी योजना डेटाबेस में खोज करता है और AI का उपयोग करके योजनाओं को आपकी स्थिति से मिलाता है।",
        aboutStep3Title: "अपने परिणाम देखें",
        aboutStep3Text:
            "पात्रता मानदंड, लाभ और आधिकारिक सरकारी स्रोतों के सीधे लिंक के साथ संबंधित योजनाएं देखें।",
        aboutWhoTitle: "हम किसकी मदद करते हैं",
        aboutTeamTitle: "हमारी टीम",
        aboutTeamText:
            "यह प्रोजेक्ट 6 घंटे के कॉलेज हैकथॉन में 4 सदस्यों की टीम द्वारा बनाया गया था। हमारा लक्ष्य सरकारी कल्याण जानकारी को हर नागरिक के लिए सुलभ बनाना है।",
        aboutDisclaimerTitle: "अस्वीकरण",
        aboutDisclaimerText:
            "यह टूल केवल सूचनात्मक उद्देश्यों के लिए है। हमेशा आधिकारिक सरकारी वेबसाइटों से पात्रता और आवेदन विवरण सत्यापित करें।",

        sourcesTitle: "स्रोत",
        sourcesSubtitle:
            "ये आधिकारिक सरकारी वेबसाइटें और पोर्टल हैं जिनसे हम योजना की जानकारी लेते हैं। सभी डेटा सरकारी प्रकाशनों से प्राप्त होता है।",
        visitWebsite: "वेबसाइट देखें",
    },
};

export default translations;
