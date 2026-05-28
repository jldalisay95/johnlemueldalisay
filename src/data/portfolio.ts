export type IconKey =
  | "activity"
  | "ai"
  | "analytics"
  | "automation"
  | "book"
  | "briefcase"
  | "database"
  | "download"
  | "external"
  | "github"
  | "globe"
  | "graduation"
  | "heart"
  | "linkedin"
  | "mail"
  | "network"
  | "research"
  | "shield"
  | "target"
  | "users";

export type VisibilityTag = "Public" | "Limited public info" | "Internal" | "Public links available";

export type LinkItem = {
  label: string;
  href: string;
};

export type ActionItem = LinkItem & {
  icon: IconKey;
  variant: "primary" | "secondary" | "ghost";
  note?: string;
};

export type FeaturedWorkItem = {
  title: string;
  shortTitle?: string;
  category: string;
  description: string;
  role?: string;
  links?: LinkItem[];
  icon: IconKey;
};

export type WhatIDoItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export type ProjectItem = {
  title: string;
  category: string;
  role: string;
  description: string;
  tools: string[];
  links: LinkItem[];
  status: string;
  sourceNote: string;
  visibility: VisibilityTag;
};

export type DashboardItem = {
  title: string;
  url: string;
  type: string;
  description: string;
  tools: string[];
  privacyNote: string;
};

export type PublicationItem = {
  title: string;
  journal: string;
  doi: string;
  url: string;
  description: string;
};

export type ArticleItem = {
  title: string;
  platform: string;
  url: string;
  description: string;
  tags: string[];
};

export type PresentationItem = {
  title: string;
  type: string;
  event: string;
  location?: string;
  date: string;
  link: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

export type CommunityItem = {
  title: string;
  description: string;
};

export const portfolio = {
  personalInfo: {
    name: "John Lemuel M. Dalisay",
    shortName: "John Lemuel Dalisay",
    positioning: "Digital Health | Health Information Systems | Data Analytics | Monitoring & Evaluation | Interoperability",
    heroSubheadline: "Digital Health | Public Health Data | Health Information Systems | M&E | Interoperability",
    location: "Koronadal City, South Cotabato, Philippines",
    email: "jldalisay95@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/johnlemueldalisay",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Tats9cUAAAAJ",
    githubUrl: "https://github.com/jldalisay95",
    resumeUrl: `${import.meta.env.BASE_URL}John_Lemuel_Dalisay_Resume.pdf`,
    siteUrl: "https://jldalisay95.github.io/johnlemueldalisay/",
    canonicalUrl: "https://jldalisay95.github.io/johnlemueldalisay/",
  },
  hero: {
    headline: "John Lemuel M. Dalisay",
    statement: "Building practical digital health and data systems for public health impact.",
    intro:
      "I work at the intersection of local public health systems, digital health implementation, data analytics, monitoring and evaluation, and health interoperability. My work focuses on turning routine health data, reporting workflows, and digital systems into tools for decision-making, coordination, and better public service.",
    profileSummary:
      "Digital health, public health data, and monitoring and evaluation professional with more than seven years of experience in government health systems, health information systems, analytics, and capacity building.",
    actions: [
      { label: "View My Work", href: "#featured-work", icon: "briefcase", variant: "primary" },
      {
        label: "Download Resume",
        href: `${import.meta.env.BASE_URL}John_Lemuel_Dalisay_Resume.pdf`,
        icon: "download",
        variant: "secondary",
        note: "Public resume version. Full CV available upon request.",
      },
      { label: "Contact Me", href: "#contact", icon: "mail", variant: "ghost" },
    ] satisfies ActionItem[],
    secondaryLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/johnlemueldalisay" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=Tats9cUAAAAJ" },
      { label: "GitHub", href: "https://github.com/jldalisay95" },
      { label: "PeReF FHIR IG", href: "https://build.fhir.org/ig/ph-ereferral-organization/ph-ereferral/" },
    ] satisfies LinkItem[],
    focusAreas: [
      "Local government digital health implementation",
      "Routine public health reporting and analytics",
      "Monitoring, evaluation, learning, and evidence use",
      "FHIR, eReferral, SMART Guidelines, and DAK alignment",
    ],
  },
  featuredWork: [
    {
      title: "South Cotabato One Health Information System",
      shortTitle: "SCOHIS",
      category: "Digital Health System",
      description:
        "Local health information system work supporting UHC-oriented health data capture, reporting, analytics, and evidence use in South Cotabato.",
      role:
        "Product/program ownership, health information system support, implementation coordination, reporting workflows, and analytics use.",
      links: [{ label: "Public link", href: "https://uhc.south-cotabato.com/Home" }],
      icon: "heart",
    },
    {
      title: "Barangay FHSIS M1 Data Consolidation Tool",
      category: "Public Health Reporting / M&E",
      description:
        "An MS Excel macro-based tool developed to improve Barangay M1 FHSIS data consolidation by reducing manual consolidation work from around two weeks to approximately five minutes.",
      role: "Designed and developed the Excel VBA macro workflow for consolidating Barangay M1 FHSIS reports and supporting faster routine public health reporting.",
      links: [{ label: "Limited public information", href: "[None]" }],
      icon: "database",
    },
    {
      title: "Philippine eReferral / PeReF FHIR Implementation Guide",
      category: "Interoperability / FHIR",
      description:
        "Community-driven work on eReferral, FHIR profiling, referral workflows, minimum data elements, and SMART Guidelines / DAK-to-IG alignment.",
      links: [
        { label: "FHIR IG", href: "https://build.fhir.org/ig/ph-ereferral-organization/ph-ereferral/" },
        { label: "Repository", href: "https://github.com/ph-ereferral-organization/ph-ereferral" },
      ],
      icon: "network",
    },
    {
      title: "Public Health Dashboards and Analytics",
      category: "Health Data Visualization",
      description:
        "Dashboards and analytical outputs for mortality, morbidity, immunization, oral health, COVID-19, and other public health priorities.",
      role: "Dashboard development, analytics, reporting automation, and decision-support visualization.",
      links: [{ label: "Dashboard section", href: "#dashboards" }],
      icon: "analytics",
    },
  ] satisfies FeaturedWorkItem[],
  whatIDo: [
    {
      title: "Digital Health Implementation",
      description: "Translating public health workflows into practical digital systems and adoption support.",
      icon: "heart",
    },
    {
      title: "Health Information Systems",
      description: "Supporting reporting, records, workflow design, and routine health data operations.",
      icon: "database",
    },
    {
      title: "Public Health Data Analytics",
      description: "Building dashboards and analytical outputs for monitoring and local decision-making.",
      icon: "analytics",
    },
    {
      title: "Monitoring, Evaluation, and Learning",
      description: "Working with indicators, reporting systems, evidence use, and learning-oriented M&E.",
      icon: "target",
    },
    {
      title: "FHIR and Interoperability",
      description: "Contributing to eReferral, FHIR profiling, and SMART Guidelines / DAK alignment work.",
      icon: "network",
    },
    {
      title: "Implementation Research",
      description: "Connecting local health systems practice with research questions and documentation.",
      icon: "research",
    },
    {
      title: "Knowledge Management",
      description: "Supporting documentation, coaching, technical writing, and reusable learning products.",
      icon: "book",
    },
    {
      title: "Data Analytics Coaching",
      description: "Helping public health teams strengthen data literacy, tools, and applied analytics practice.",
      icon: "users",
    },
  ] satisfies WhatIDoItem[],
  projects: [
    {
      title: "South Cotabato One Health Information System",
      category: "Digital Health System",
      role:
        "Product/program ownership, health information system support, implementation coordination, reporting workflows, and analytics use.",
      description:
        "A local digital health system initiative supporting UHC-aligned health information management, reporting workflows, and analytics use in South Cotabato.",
      tools: [""],
      links: [{ label: "Public link", href: "https://uhc.south-cotabato.com/Home" }],
      status: "On-going",
      sourceNote: "Based on provided profile information; public details are limited.",
      visibility: "Limited public info",
    },
    {
      title: "FHSIS Modernization",
      category: "Public Health Reporting / M&E",
      role: "FHSIS process improvement, automation, dashboarding, and data quality support.",
      description:
        "Routine public health reporting modernization work focused on automated consolidation, database-oriented reporting, dashboarding, and improved use of data beyond compliance submission.",
      tools: ["Excel VBA", "KoboToolbox", "Google Apps Script", "Looker Studio", "Tableau", "Python", "R"],
      links: [{ label: "Public link", href: "[INSERT PUBLIC LINK IF AVAILABLE]" }],
      status: "[INSERT STATUS]",
      sourceNote: "Based on information provided for this portfolio upgrade.",
      visibility: "Limited public info",
    },
    {
      title: "PeReF / Philippine eReferral FHIR Implementation Guide",
      category: "Interoperability / FHIR",
      role: "IG Product Owner",
      description:
        "Community-driven work on eReferral, FHIR profiling, referral workflows, minimum data elements, and SMART Guidelines / DAK-to-IG alignment.",
      tools: ["FHIR", "Implementation Guide", "GitHub", "SMART Guidelines / DAK concepts"],
      links: [
        { label: "FHIR IG", href: "https://build.fhir.org/ig/ph-ereferral-organization/ph-ereferral/" },
        { label: "GitHub repository", href: "https://github.com/ph-ereferral-organization/ph-ereferral" },
      ],
      status: "On-going",
      sourceNote: "Public links provided by the profile owner.",
      visibility: "Public",
    },
    {
      title: "Public Health Dashboards",
      category: "Health Data Visualization",
      role: "Dashboard development, analytics, reporting automation, and decision-support visualization.",
      description:
        "Dashboards and analytical outputs for mortality, morbidity, immunization, oral health, COVID-19, and other public health priorities.",
      tools: ["Looker Studio", "Tableau", "Flourish", "Python", "R", "KoboToolbox"],
      links: [
        { label: "Provincial Mortality Reporting", href: "https://bit.ly/socotmortality" },
        { label: "Provincial Morbidity Reporting", href: "https://bit.ly/socotmorbidity" },
        { label: "Provincial Oral Healthcare Reporting", href: "https://bit.ly/fhsisdentalsocot" },
        { label: "Chikiting Ligtas 2023 Reporting", href: "https://bit.ly/socotchikiting" },
        { label: "Provincial COVID-19 Dashboard", href: "https://bit.ly/covid19sox" },
      ],
      status: "On-going",
      sourceNote: "Public dashboard links provided by the profile owner; verify public sharing before publishing.",
      visibility: "Public links available",
    },
  ] satisfies ProjectItem[],
  dashboards: [
    {
      title: "Provincial Mortality Reporting",
      url: "https://bit.ly/socotmortality",
      type: "Public Health Dashboard",
      description: "Dashboard for mortality reporting and local public health monitoring.",
      tools: ["Looker Studio", "Public health reporting"],
      privacyNote: "Public link",
    },
    {
      title: "Provincial Morbidity Reporting",
      url: "https://bit.ly/socotmorbidity",
      type: "Public Health Dashboard",
      description: "Dashboard for morbidity reporting, disease trends, and local health data use.",
      tools: ["Looker Studio", "Public health reporting"],
      privacyNote: "Public link",
    },
    {
      title: "Provincial Oral Healthcare Reporting",
      url: "https://bit.ly/fhsisdentalsocot",
      type: "Public Health Dashboard",
      description: "Dashboard for oral healthcare service reporting and monitoring.",
      tools: ["Looker Studio", "Public health reporting"],
      privacyNote: "Public link",
    },
    {
      title: "Chikiting Ligtas 2023 Reporting",
      url: "https://bit.ly/socotchikiting",
      type: "Immunization / Campaign Dashboard",
      description: "Dashboard for Chikiting Ligtas reporting and vaccination campaign monitoring.",
      tools: ["Looker Studio", "Campaign monitoring"],
      privacyNote: "Public link",
    },
    {
      title: "Provincial COVID-19 Dashboard",
      url: "https://bit.ly/covid19sox",
      type: "COVID-19 Response Dashboard",
      description: "Dashboard supporting COVID-19 situational awareness and public health response.",
      tools: ["Dashboarding", "COVID-19 reporting"],
      privacyNote: "Public link",
    },
  ] satisfies DashboardItem[],
  publications: [
    {
      title: "Optimal vaccination control for COVID-19 in a metapopulation model: a case of the Philippines",
      journal: "Frontiers in Applied Mathematics and Statistics",
      doi: "10.3389/fams.2023.1154634",
      url: "https://www.frontiersin.org/journals/applied-mathematics-and-statistics/articles/10.3389/fams.2023.1154634/full",
      description:
        "A mathematical modeling and optimal control study on COVID-19 vaccination allocation in the Philippines.",
    },
  ] satisfies PublicationItem[],
  articles: [
    {
      title:
        "Unlocking the Power of Google Looker Studio for Public Health Reporting: South Cotabato’s Journey to Universal Health Care",
      platform: "LinkedIn Article",
      url:
        "https://www.linkedin.com/pulse/unlocking-power-google-looker-studio-public-health-south-dalisay-xv7yc",
      description:
        "A public LinkedIn article on using Google Looker Studio for public health reporting, including mortality, morbidity, oral health, and Universal Health Care data use in South Cotabato.",
      tags: ["Looker Studio", "Public Health Dashboards", "UHC", "Data Use"],
    },
    {
      title:
        "Philippines’ Digital Health Maturity: A Mixed Bag of Progress and Challenges",
      platform: "LinkedIn Post",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7388799535009095680/",
      description:
        "Reflection on the Philippines’ digital health maturity using the Global Digital Health Monitor 2024–2025, highlighting gaps in governance, workforce readiness, master patient index, AI regulation, patient feedback, and implementation capacity.",
      tags: ["Digital Health", "UHC", "Interoperability", "Philippines", "Data for Health"],
    },
    {
      title:
        "FHIR in the Philippines: Governance, Funding, and Mandates for Success",
      platform: "LinkedIn Post",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7371691933657808896/",
      description:
        "Public post discussing FHIR adoption in the Philippines, with emphasis on governance, IG approval, versioning, compliance, procurement, funding, implementation support, and conformance testing.",
      tags: ["FHIR", "Interoperability", "Digital Health", "Health Data Governance"],
    },
    {
      title:
        "Digital Health Implementation Workshop for Local Government Units",
      platform: "LinkedIn Post",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7135880346281156608/",
      description:
        "Reflection on a Digital Health Implementation Workshop for LGUs, covering integrated and interoperable health information systems, eHealth planning, FHIR, ICT infrastructure, and LGU collaboration for Universal Health Care.",
      tags: ["Digital Health", "Local Government", "UHC", "FHIR", "Health Information Systems"],
    },
    {
      title:
        "One Health Information System Progress: e-Referral, Family Planning, and NCD Modules",
      platform: "LinkedIn Post",
      url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7085803245054410752/",
      description:
        "Public update on progress in the One Health Information System, including completion of an e-Referral system and planned modules for Family Planning and non-communicable diseases, including mental health.",
      tags: ["SCOHIS", "eReferral", "UHC", "Health Information Systems", "LocalGov"],
    },
    {
      title:
        "South Cotabato Barangay Health Scorecard Manual for 2023",
      platform: "LinkedIn Post",
      url:
        "https://www.linkedin.com/posts/johnlemueldalisay_publichealth-healthcareinnovation-communityhealth-activity-7194535767954583553-bds6",
      description:
        "Public post sharing the completion of the South Cotabato Barangay Health Scorecard Manual for 2023, highlighting barangay-level health assessment, Universal Health Care alignment, and local health service improvement.",
      tags: ["Health Scorecard", "Barangay Health", "UHC", "Public Health", "South Cotabato"],
    },
  ] satisfies ArticleItem[],
  presentations: [
    {
      title: "South Cotabato Province-Wide Health System and Referral Manual",
      type: "Oral Presentation",
      event: "Joint Conference & Symposium on Health",
      location: "Davao City / Acacia Hotel Davao",
      date: "November 13-14, 2024",
      link: "[INSERT LINK IF AVAILABLE]",
    },
    {
      title:
        "Integrating Local Health Systems in South Cotabato: Learning by Doing through the Conduct of Implementation Research",
      type: "Oral Presentation",
      event: "Mindanao Inter-Regional Family Planning and Population and Development Conference",
      date: "June 18-20, 2024",
      link: "[INSERT LINK IF AVAILABLE]",
    },
    {
      title:
        "South Cotabato Integrated Provincial Health Office Interactive COVID-19 Dashboard: A Multilevel Approach to Data Visualization and Its Challenges",
      type: "Presentation",
      event: "12th PARSSU International Conference-Workshop",
      date: "June 11-14, 2023",
      link: "[INSERT LINK IF AVAILABLE]",
    },
  ] satisfies PresentationItem[],
  skills: [
    {
      title: "Digital Health and Interoperability",
      items: [
        "FHIR",
        "eReferral workflows",
        "SMART Guidelines / DAK concepts",
        "Health data governance",
        "System integration",
        "Health information systems",
      ],
    },
    {
      title: "Data Analytics and Visualization",
      items: ["R", "Python", "SPSS", "Tableau", "Looker Studio", "Flourish", "Dashboards", "Epidemiologic data analysis"],
    },
    {
      title: "Automation and Systems",
      items: [
        "Excel VBA",
        "Google Apps Script",
        "KoboToolbox",
        "Database-oriented reporting workflows",
        "Google Sheets",
        "Microsoft Excel",
      ],
    },
    {
      title: "Public Health, M&E, and Research",
      items: [
        "FHSIS",
        "UHC implementation monitoring",
        "Results frameworks",
        "Indicator design",
        "Implementation research",
        "Reporting systems",
        "Evidence use",
      ],
    },
    {
      title: "Product and Project Delivery",
      items: [
        "Product/program ownership",
        "User requirements",
        "Workflow analysis",
        "Stakeholder coordination",
        "Sprint-based delivery",
        "Acceptance criteria",
        "Documentation",
      ],
    },
    {
      title: "Capacity Building",
      items: ["Training design", "Coaching", "Facilitation", "Mentoring", "Technical writing", "Knowledge management", "REAP support"],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      period: "April 2025 - June 2025",
      title: "Independent Consultant / Data Analytics Coach",
      organization: "Australia Awards (DFAT), DevConsult Inc., Ronan Analytics",
      description: "Data analytics coaching and capacity-building support for public health and development-oriented learning.",
      tags: ["Data analytics coaching", "Capacity building", "Consulting"],
    },
    {
      period: "September 2022 - Present",
      title: "Project Evaluation Officer II / Health Information System Support Cluster Lead",
      organization: "Integrated Provincial Health Office, Provincial Government of South Cotabato",
      description:
        "Health information system support, public health reporting, analytics, monitoring and evaluation, and digital health implementation work.",
      tags: ["Health information systems", "M&E", "Digital health"],
    },
    {
      period: "March 2019 - September 2022",
      title: "Statistician I",
      organization: "Integrated Provincial Health Office, Provincial Government of South Cotabato",
      description: "Public health statistics, reporting, analytics, and routine health data support.",
      tags: ["Statistics", "Reporting", "Public health data"],
    },
    {
      period: "June 2018 - March 2019",
      title: "Science Research Specialist",
      organization: "Philippine Science High School - SOCCSKSARGEN Region Campus",
      description: "Science research support in an educational and research-oriented environment.",
      tags: ["Research", "Science education", "Documentation"],
    },
    {
      period: "July 2016 - May 2018",
      title: "Special Science Teacher I",
      organization: "Philippine Science High School - SOCCSKSARGEN Region Campus",
      description: "Science teaching and mentoring role.",
      tags: ["Teaching", "Mentoring", "Science"],
    },
  ] satisfies TimelineItem[],
  training: [
    {
      title: "Australia Awards Short Course data analytics coaching support",
      description: "Capacity-building support connected to public health data analytics learning.",
    },
    {
      title: "Knowledge management and data analytics coaching",
      description: "Coaching and facilitation around data use, analytics workflows, and knowledge products.",
    },
    {
      title: "WHO SMART Guidelines / Digital Adaptation Kit alignment",
      description: "Learning and applied work connected to SMART Guidelines and DAK-to-implementation-guide alignment.",
    },
  ] satisfies CommunityItem[],
  community: [
    {
      title: "FHIR and interoperability community participation",
      description: "Participation in PeReF / Philippine eReferral FHIR Implementation Guide work and related interoperability discussions.",
    },
    {
      title: "Implementation research and M&E practice",
      description: "Work connected to monitoring, evaluation, learning, implementation research, and evidence use in public health systems.",
    },
    {
      title: "Speaking and presentations",
      description: "Public health systems, referral workflows, implementation research, and COVID-19 dashboard presentations listed above.",
    },
  ] satisfies CommunityItem[],
  contactLinks: [
    { label: "Email", href: "mailto:jldalisay95@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/johnlemueldalisay" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=Tats9cUAAAAJ" },
    { label: "GitHub", href: "https://github.com/jldalisay95" },
    { label: "PeReF FHIR IG", href: "https://build.fhir.org/ig/ph-ereferral-organization/ph-ereferral/" },
    { label: "PeReF GitHub Repository", href: "https://github.com/ph-ereferral-organization/ph-ereferral" },
    {
      label: "Frontiers Publication",
      href: "https://www.frontiersin.org/journals/applied-mathematics-and-statistics/articles/10.3389/fams.2023.1154634/full",
    },
  ] satisfies LinkItem[],
};
