const Header = () => {
  const keywords = [
    // Primary Identity & Roles
    'Amer Albadawi',
    'عامر البدوي',
    'Senior Software Engineer',
    'مهندس برمجيات أول',
    'Full Stack Engineer',
    'Full-Stack Developer',
    'Frontend Lead',
    'Mobile Application Developer',
    'Software Architect',
    // Core Tech Stack
    'React',
    'React Native',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'RxJS',
    'Redux',
    'Signals',
    'Micro-Frontends',
    'REST APIs',
    'GraphQL',
    'SQL',
    'PostgreSQL',
    'Git',
    'CI/CD',
    'Jest',
    // Domains & Companies
    'Telecom Software Development',
    'STC',
    'Saudi Telecom Company',
    'Jawwy',
    'WFMS ALMONJEZ',
    'Wipro',
    'Tata Consultancy Services',
    'Zain',
    // Location & Portfolio
    'Riyadh Saudi Arabia',
    'الرياض المملكة العربية السعودية',
    'Portfolio',
    'Software Engineer Resume',
    'Digital Resume',
    'CV',
    'Web Development Saudi Arabia',
  ].join(', ')

  return (
    <>
      <title>Amer Albadawi | Senior Software Engineer</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Amer Albadawi — Senior Software Engineer specializing in scalable full-stack architectures, modern frontend systems (React, Next.js, Angular, React Native), and high-performance digital solutions in Riyadh, Saudi Arabia."
      />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Amer Albadawi" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
      />

      <link rel="canonical" href="https://aalbadawi.github.io" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amer Albadawi" />
      <meta property="og:url" content="https://aalbadawi.github.io/" />
      <meta
        property="og:title"
        content="Amer Albadawi | Senior Software Engineer"
      />
      <meta
        property="og:description"
        content="Senior Software Engineer with 9+ years experience in Full-Stack, React, Next.js, Angular, and React Native architectures."
      />
      <meta
        property="og:image"
        content="https://aalbadawi.github.io/images/amer-pic.png"
      />
      <meta
        property="og:image:alt"
        content="Amer Albadawi — Senior Software Engineer"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ameralbadawi" />
      <meta name="twitter:creator" content="@ameralbadawi" />
      <meta name="twitter:url" content="https://aalbadawi.github.io/" />
      <meta
        name="twitter:title"
        content="Amer Albadawi | Senior Software Engineer"
      />
      <meta
        name="twitter:description"
        content="Senior Software Engineer with 9+ years experience in Full-Stack, React, Next.js, Angular, and React Native architectures."
      />
      <meta
        name="twitter:image"
        content="https://aalbadawi.github.io/images/amer-pic.png"
      />
      <meta name="twitter:image:alt" content="Amer Albadawi Logo" />

      {/* Mobile & Compatibility */}
      <meta name="MobileOptimized" content="width" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="x-default" href="https://aalbadawi.github.io/" />
      <link rel="alternate" hrefLang="en" href="https://aalbadawi.github.io" />
      <link rel="alternate" hrefLang="ar" href="https://aalbadawi.github.io" />

      {/* Favicons and Apple Touch Icons */}
      <link rel="icon" href="/images/logo/ab-logo.png" type="image/png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/ab-logo.png" />
      <meta name="msapplication-TileColor" content="#f97316" />
    </>
  )
}

export default Header

