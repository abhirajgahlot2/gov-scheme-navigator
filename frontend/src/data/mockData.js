/**
 * Mock data with keyword-based filtering and gibberish detection.
 * When the backend is ready, swap in searchSchemes from services/api.js.
 */

const ALL_SCHEMES = [
    {
        name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
        match: "High",
        reason:
            "You mentioned that you are a farmer. PM-KISAN provides direct income support to small and marginal farmer families across India. Based on the details you shared, this scheme may be applicable to your situation.",
        eligibility: [
            "Small and marginal farmers with cultivable land up to 2 hectares.",
            "Requires valid land holding papers in the farmer's name.",
            "Excludes institutional landholders, government employees above a certain income, and income tax payers."
        ],
        benefits:
            "Rs 6,000 per year transferred directly to the bank account in three equal installments of Rs 2,000 every four months.",
        application:
            "Apply through the PM-KISAN portal (pmkisan.gov.in), the Common Service Centre (CSC), or through the local Patwari / Revenue Officer. Aadhaar card, land records, and bank account details required.",
        source: "https://pmkisan.gov.in",
        keywords: ["farmer", "farming", "agriculture", "agricultural", "kisan", "crop", "land", "cultivat", "rural"],
    },
    {
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        match: "High",
        reason:
            "As a farmer, you may be vulnerable to crop loss due to natural calamities, pests, or diseases. PMFBY is designed specifically to provide financial support to farmers who suffer crop loss or damage.",
        eligibility: [
            "All farmers growing notified crops in notified areas.",
            "Compulsory for loanee farmers and voluntary for non-loanee farmers.",
            "Own-cultivators, sharecroppers, and tenant farmers are also eligible."
        ],
        benefits:
            "Insurance coverage for crop loss due to non-preventable natural risks. Premium is heavily subsidised — farmers pay only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial and horticultural crops.",
        application:
            "Apply through your nearest bank branch, Common Service Centre, or directly on the PMFBY portal. Application window is typically before the sowing season.",
        source: "https://pmfby.gov.in",
        keywords: ["farmer", "farming", "agriculture", "agricultural", "crop", "insurance", "fasal", "bima", "land"],
    },
    {
        name: "Kisan Credit Card (KCC) Scheme",
        match: "Medium",
        reason:
            "Based on farming and financial needs, the Kisan Credit Card scheme provides flexible, timely credit access for agricultural needs including cultivation expenses and post-harvest costs.",
        eligibility: [
            "All farmers — individual or joint borrowers who are owner-cultivators.",
            "Tenant farmers, oral lessees, and sharecroppers.",
            "Self-help groups (SHGs) or Joint Liability Groups (JLGs) of farmers."
        ],
        benefits:
            "Flexible revolving credit facility. Short-term credit for crop cultivation, post-harvest expenses, and farm asset maintenance. Interest rate can be as low as 4% per annum for timely repayment.",
        application:
            "Apply at any bank branch, Regional Rural Bank, or Cooperative Bank. You will need land records, identity proof, address proof, and passport-size photographs.",
        source: "https://www.nabard.org/content1.aspx?id=572",
        keywords: ["farmer", "farming", "agriculture", "credit", "loan", "financial", "kisan", "land"],
    },
    {
        name: "National Scholarship Portal",
        match: "High",
        reason:
            "You mentioned being a student or seeking education support. The National Scholarship Portal consolidates scholarships from multiple ministries for students from various backgrounds.",
        eligibility: [
            "Students belonging to SC, ST, OBC, Minority, and EWS categories.",
            "Specific scholarships have different income ceilings (usually under Rs 2.5L to Rs 8L familial income).",
            "Must be enrolled in a recognized institution with minimum required academic scores."
        ],
        benefits:
            "Scholarships covering tuition fees, maintenance allowance, and other academic expenses. Amount varies by scheme — ranges from Rs 1,000 to Rs 2,00,000 per year depending on the scholarship and course.",
        application:
            "Apply online at scholarships.gov.in. One-time registration required. Upload academic certificates, income certificate, and bank details. Apply within the announced deadline each academic year.",
        source: "https://scholarships.gov.in",
        keywords: ["student", "education", "scholarship", "college", "school", "study", "university", "degree", "tuition", "academic"],
    },
    {
        name: "PM Vidyalaxmi Scheme",
        match: "High",
        reason:
            "If you are a student looking for financial support for higher education, PM Vidyalaxmi provides education loans with interest subvention for students from economically weaker sections.",
        eligibility: [
            "Students admitted to quality higher education institutions.",
            "Must have secured admission in recognized institution with NAAC / NBA accreditation.",
            "Applicable for students where family income is below specified thresholds for interest subvention."
        ],
        benefits:
            "Education loans up to Rs 10 lakh with full interest subvention during the study period and a moratorium period. No collateral required for loans up to Rs 7.5 lakh.",
        application:
            "Apply through the PM Vidyalaxmi portal or participating banks. Submit admission letter, academic records, family income certificate, and Aadhaar-linked bank account.",
        source: "https://www.pmvidyalaxmi.gov.in",
        keywords: ["student", "education", "loan", "college", "university", "study", "higher education", "degree"],
    },
    {
        name: "PM Mudra Yojana (PMMY)",
        match: "High",
        reason:
            "You mentioned wanting to start or grow a business. PM Mudra Yojana provides micro loans to small and micro enterprises without requiring collateral, supporting entrepreneurs and self-employed individuals.",
        eligibility: [
            "Non-corporate, non-farm small/micro enterprises.",
            "Individuals wanting to start or expand manufacturing, trading, or services sector activities.",
            "Requires a viable business plan, but no collateral is needed."
        ],
        benefits:
            "Loans in three categories — Shishu (up to Rs 50,000), Kishore (Rs 50,000 to Rs 5 lakh), and Tarun (Rs 5 lakh to Rs 10 lakh). Low interest rates and no processing fees.",
        application:
            "Apply at any bank branch, NBFC, MFI, or online through the Mudra portal. Submit business plan, identity proof, address proof, and photographs.",
        source: "https://www.mudra.org.in",
        keywords: ["business", "entrepreneur", "self-employed", "start", "shop", "enterprise", "loan", "capital", "woman", "women"],
    },
    {
        name: "Stand-Up India Scheme",
        match: "High",
        reason:
            "If you are a woman or belong to SC/ST category and wish to start an enterprise, Stand-Up India facilitates bank loans between Rs 10 lakh and Rs 1 crore for setting up a greenfield enterprise.",
        eligibility: [
            "SC/ST and women entrepreneurs.",
            "Must be above 18 years of age.",
            "The loan is for greenfield enterprises only (first-time venture).",
            "In non-individual enterprises, at least 51% shareholding must be held by SC/ST or woman entrepreneur."
        ],
        benefits:
            "Bank loans between Rs 10 lakh and Rs 1 crore. Composite loan covering term loan and working capital. Repayment period up to 7 years with a maximum moratorium period of 18 months.",
        application:
            "Apply through the Stand-Up India portal (standupmitra.in) or at any bank branch. Submit project report, identity proof, caste/category certificate if applicable, and address proof.",
        source: "https://www.standupmitra.in",
        keywords: ["woman", "women", "business", "enterprise", "sc", "st", "startup", "entrepreneur"],
    },
    {
        name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        match: "High",
        reason:
            "You mentioned being a pregnant or lactating woman. PMMVY provides cash incentive to pregnant women and lactating mothers for the first living child to meet enhanced nutritional needs and partially compensate for wage loss.",
        eligibility: [
            "Pregnant women and lactating mothers for the first living child.",
            "Excludes those in regular employment with the Central or State Government or PSU.",
            "Age of the mother must be 19 years or above."
        ],
        benefits:
            "Rs 5,000 in three installments — Rs 1,000 after early registration, Rs 2,000 after 6 months of pregnancy, and Rs 2,000 after child registration and first cycle of vaccination.",
        application:
            "Register at the nearest Anganwadi Centre (AWC) or approved health facility. Submit MCP card, identity proof, and bank account details.",
        source: "https://pmmvy.wcd.gov.in",
        keywords: ["woman", "women", "pregnant", "mother", "maternity", "child", "baby", "lactating"],
    },
    {
        name: "PM Awas Yojana – Gramin (PMAY-G)",
        match: "Medium",
        reason:
            "If you do not have a pucca (permanent) house in a rural area, PMAY-G provides financial assistance for building a new house.",
        eligibility: [
            "Houseless families and families living in kutcha or dilapidated houses in rural areas.",
            "Priority is given to SC/ST, minorities, differently abled persons, and women-headed households.",
            "Must be listed under the SECC 2011 housing deprivation parameters."
        ],
        benefits:
            "Rs 1.20 lakh financial assistance (plain areas) or Rs 1.30 lakh (hilly / NE areas) for construction. Additional funding may be available under convergence with MGNREGS.",
        application:
            "Beneficiary selection is from the SECC 2011 list determined by the Gram Panchayat. Contact your Gram Panchayat or Block Development Officer.",
        source: "https://pmayg.nic.in",
        keywords: ["house", "housing", "home", "rural", "shelter", "construction", "awas"],
    },
    {
        name: "Ayushman Bharat (PMJAY)",
        match: "High",
        reason:
            "You mentioned needing health coverage or medical assistance. Ayushman Bharat provides health insurance cover of Rs 5 lakh per family per year for secondary and tertiary care hospitalization.",
        eligibility: [
            "Families identified based on deprivation and occupational criteria of SECC 2011 in rural areas.",
            "Specific occupational categories in urban areas (e.g. domestic workers, street vendors).",
            "No cap on family size or age."
        ],
        benefits:
            "Health insurance cover of Rs 5 lakh per family per year. Covers pre and post-hospitalization expenses. Cashless and paperless access at empanelled hospitals.",
        application:
            "Check eligibility at mera.pmjay.gov.in or by calling the helpline 14555. Visit any empanelled hospital or Common Service Centre with your Aadhaar card to get your e-card.",
        source: "https://pmjay.gov.in",
        keywords: ["health", "medical", "hospital", "treatment", "insurance", "doctor", "illness", "disease", "senior", "elderly", "old age"],
    },
    {
        name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
        match: "High",
        reason:
            "You mentioned being a senior citizen or needing old age support. IGNOAPS provides monthly pension to elderly persons living below the poverty line.",
        eligibility: [
            "Indian citizens aged 60 years and above.",
            "Must be destitute and living below the poverty line.",
            "Must be listed in the BPL list of the State Government / UT Administration."
        ],
        benefits:
            "Rs 200 per month (age 60–79 years) and Rs 500 per month (age 80 years and above) from Central Government. Many states add supplementary amounts ranging from Rs 200 to Rs 2,000.",
        application:
            "Apply through the Gram Panchayat (rural) or Urban Local Body (urban). Submit age proof, BPL certificate, identity proof, and bank account details.",
        source: "https://nsap.nic.in",
        keywords: ["senior", "elderly", "old", "pension", "retired", "age", "60", "65", "70", "welfare"],
    },
    {
        name: "MGNREGA (Mahatma Gandhi National Rural Employment Guarantee)",
        match: "Medium",
        reason:
            "If you live in a rural area and need employment or wage support, MGNREGA guarantees 100 days of wage employment per year to every rural household whose adult members volunteer to do unskilled manual work.",
        eligibility: [
            "Any adult member of a rural household.",
            "Willing to do unskilled manual work.",
            "Must reside in the local Gram Panchayat where they apply."
        ],
        benefits:
            "100 days of guaranteed wage employment per financial year. Wages are state-specific, typically Rs 200-350 per day. Unemployment allowance if work is not provided within 15 days.",
        application:
            "Register at your nearest Gram Panchayat. Submit a photograph and identity proof to obtain a Job Card. Then apply for work in writing or orally.",
        source: "https://nrega.nic.in",
        keywords: ["rural", "employment", "job", "work", "labour", "wage", "unskilled", "poor", "village"],
    },
];

// Common dictionary of recognizable real words to detect gibberish
const COMMON_WORDS = [
    "i", "am", "a", "my", "is", "need", "looking", "for", "help", "from",
    "want", "to", "start", "business", "farmer", "student", "woman", "senior",
    "years", "old", "income", "money", "loan", "scholarship", "health", "medical",
    "house", "home", "agriculture", "job", "work", "rural", "urban", "with",
    "the", "and", "in", "of", "to", "have", "but", "not", "no", "yes", "please",
    "can", "you", "find", "scheme", "schemes", "government", "support", "financial"
];

function isGibberish(query) {
    // If the query is super short and has no spaces, likely gibberish (e.g. "asdfgh")
    const words = query.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(w => w.length > 0);
    if (words.length === 0) return true;

    // If a significant portion of words are over 15 chars, it's likely keyboard smashing
    const avgLength = words.reduce((sum, w) => sum + w.length, 0) / words.length;
    const longWords = words.filter(w => w.length > 15).length;
    if (longWords > 0 || avgLength > 10) return true;

    // Let's check how many known words/keywords are in the query
    let knownCount = 0;
    for (const word of words) {
        if (COMMON_WORDS.includes(word) || ALL_SCHEMES.some(s => s.keywords.includes(word))) {
            knownCount++;
        }
    }

    // If we found basically zero recognizable words in a decent sized text, call it gibberish
    if (words.length > 2 && knownCount === 0) {
        return true;
    }

    return false;
}

/**
 * Filters schemes based on keywords found in the user's query.
 * Returns matching schemes, or empty array if gibberish.
 */
function filterSchemes(query) {
    if (isGibberish(query)) {
        return []; // Return empty results to prompt user to re-input
    }

    const lowerQuery = query.toLowerCase();

    // Score each scheme by how many keyword matches it has
    const scored = ALL_SCHEMES.map((scheme) => {
        const matchCount = scheme.keywords.filter((kw) => lowerQuery.includes(kw)).length;
        return { scheme, matchCount };
    });

    // Filter to schemes that have at least one keyword match
    const matched = scored
        .filter((s) => s.matchCount > 0)
        .sort((a, b) => b.matchCount - a.matchCount)
        .map((s) => {
            // Remove internal keywords field before returning
            const { keywords, ...schemeData } = s.scheme;
            return schemeData;
        });

    if (matched.length > 0) {
        return matched;
    }

    // Fallback: return empty array if no match (will trigger NO SCHEMES state) or 
    // we can keep returning top 3 if we want to guess. The prompt said "show no schemes if search has random letters or words"
    // which we handled with isGibberish. If they write perfectly valid english like "I like pizza", it's not gibberish 
    // but matches no keywords. For now, let's just return empty array for NO matching keywords to be safe and encourage better input.
    return [];
}

/**
 * Simulates the backend API call with filtering based on query content.
 * @param {string} query
 * @returns {Promise<{ schemes: Array }>}
 */
export async function mockSearchSchemes(query) {
    await new Promise((resolve) => setTimeout(resolve, 1800));

    const schemes = filterSchemes(query);
    return { schemes };
}
