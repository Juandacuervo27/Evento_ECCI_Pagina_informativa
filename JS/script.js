document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  const header = document.querySelector('header');
  const langLinks = document.querySelectorAll('.lang-link');

  const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

  const translations = {
    [normalizeText('Inicio')]: 'Home',
    [normalizeText('Sobre ECCI')]: 'About ECCI',
    [normalizeText('Glosario')]: 'Glossary',
    [normalizeText('Nosotros')]: 'About Us',
    [normalizeText('Encuentro Interinstitucional')]: 'Interinstitutional Meeting',
    [normalizeText('El Universo de los Colores')]: 'The Universe of Colors',
    [normalizeText('Nuestra experiencia formativa del SENA CMTC en la Universidad ECCI')]: 'Our formative experience of SENA CMTC at ECCI University',
    [normalizeText('Conocer la experiencia')]: 'Discover the experience',
    [normalizeText('Propósito del Sitio')]: 'Website Purpose',
    [normalizeText('Como aprendices del SENA CMTC invitados por la Universidad ECCI, creamos este sitio para documentar lo aprendido en la conferencia de Sara Viloria y compartir recursos prácticos que conecten la teoría del color con proyectos reales.')]: 'As apprentices of SENA CMTC invited by ECCI University, we created this site to document what we learned in Sara Viloria\'s conference and share practical resources that connect color theory with real projects.',
    [normalizeText('¿Por qué lo hicimos?')]: 'Why did we do it?',
    [normalizeText('Registrar la experiencia, aplicar conceptos de color en nuestros desarrollos y ofrecer material útil para otros estudiantes y docentes.')]: 'Record the experience, apply color concepts in our developments, and offer useful material for other students and teachers.',
    [normalizeText('Objetivos')]: 'Objectives',
    [normalizeText('Documentar las ideas clave de la conferencia.')]: 'Document the conference\'s key ideas.',
    [normalizeText('Traducir conceptos de color a prácticas de diseño y CSS.')]: 'Translate color concepts into design and CSS practices.',
    [normalizeText('Compartir recursos y ejemplos para seguir aprendiendo.')]: 'Share resources and examples to keep learning.',
    [normalizeText('Ir a la biografía')]: 'Go to the biography',
    [normalizeText('Una Ponencia Inspiradora')]: 'An Inspiring Lecture',
    [normalizeText('Tuvimos el honor de asistir como invitados a la conferencia dictada por la reconocida pintora, poeta y escritora')]: 'We had the honor of attending as guests the lecture given by the renowned painter, poet, and writer',
    [normalizeText('A través de su mirada única, exploramos cómo el color trasciende lo visual para convertirse en un lenguaje emocional, psicológico y narrativo. Un puente perfecto entre la sensibilidad del arte y la estructura del desarrollo de software.')]: 'Through her unique perspective, we explored how color transcends the visual to become an emotional, psychological, and narrative language. A perfect bridge between the sensitivity of art and the structure of software development.',
    [normalizeText('Sara Viloria desde la mirada de un estudiante SENA')]: 'Sara Viloria from a SENA student\'s perspective',
    [normalizeText('Como aprendices del SENA CMTC, descubrimos cómo su voz artístico-didáctica nos conecta con el diseño, el color y la programación.')]: 'As apprentices of SENA CMTC, we discovered how her artistic-didactic voice connects us with design, color, and programming.',
    [normalizeText('Su historia nos inspira')]: 'Her story inspires us',
    [normalizeText('Para nosotros, Sara Viloria es más que una artista: es una creadora que transforma el color en significado. Su manera de hablar de sensibilidad, contraste y emoción nos hizo ver que un buen diseño web también nace de una visión humana.')]: 'For us, Sara Viloria is more than an artist: she is a creator who transforms color into meaning. Her way of speaking about sensitivity, contrast, and emotion made us see that good web design also arises from a human vision.',
    [normalizeText('Desde la percepción de un estudiante de Análisis y Desarrollo de Software, su conferencia nos recordó que la interfaz de usuario no solo debe funcionar, sino también transmitir, conmover y conectar.')]: 'From the perspective of a Software Analysis and Development student, her lecture reminded us that the user interface must not only work, but also convey, move, and connect.',
    [normalizeText('Aplicamos sus enseñanzas integrando estética y técnica: interfaces atractivas, accesibles y coherentes con el mensaje que queremos transmitir.')]: 'We applied her teachings by integrating aesthetics and technique: interfaces that are attractive, accessible, and consistent with the message we want to convey.',
    [normalizeText('Artista visual con enfoque en color y narrativa.')]: 'Visual artist focused on color and narrative.',
    [normalizeText('Poeta que usa el arte como puente hacia la experiencia.')]: 'Poet who uses art as a bridge to experience.',
    [normalizeText('Ejemplo de cómo la creatividad puede inspirar proyectos técnicos.')]: 'Example of how creativity can inspire technical projects.',
    [normalizeText('Video recomendado')]: 'Recommended video',
    [normalizeText('Enlaces para seguir aprendiendo')]: 'Links to keep learning',
    [normalizeText('Buscar más sobre Sara Viloria')]: 'Search more about Sara Viloria',
    [normalizeText('Ver entrevistas y charlas en YouTube')]: 'Watch interviews and talks on YouTube',
    [normalizeText('Profundizar en teoría del color')]: 'Delve into color theory',
    [normalizeText('Estos recursos nos ayudan a aplicar lo aprendido en proyectos y ejercicios prácticos del SENA.')]: 'These resources help us apply what we learned in projects and practical SENA exercises.',
    [normalizeText('Ejes Centrales del Encuentro')]: 'Core Axes of the Meeting',
    [normalizeText('Los tres pilares cromáticos que transformarán nuestra forma de maquetar y diseñar.')]: 'The three chromatic pillars that will transform our way of layout and design.',
    [normalizeText('Psicología del Color')]: 'Color Psychology',
    [normalizeText('Análisis del impacto emocional y las tendencias cromáticas discutidas durante el encuentro interinstitucional. Cómo cada tono evoca estados mentales específicos.')]: 'Analysis of the emotional impact and chromatic trends discussed during the interinstitutional meeting. How each tone evokes specific mental states.',
    [normalizeText('Identidad de Marca')]: 'Brand Identity',
    [normalizeText('Cómo las marcas aplican paletas estratégicas para conectar de forma directa con su público objetivo, construyendo consistencia visual y confianza.')]: 'How brands apply strategic palettes to connect directly with their target audience, building visual consistency and trust.',
    [normalizeText('Innovación y Diseño')]: 'Innovation and Design',
    [normalizeText('Herramientas y tecnologías modernas presentadas para el desarrollo y optimización de interfaces visuales interactivas y accesibles.')]: 'Modern tools and technologies presented for the development and optimization of interactive, accessible visual interfaces.',
    [normalizeText('Galería del Evento')]: 'Event Gallery',
    [normalizeText('Momentos capturados durante nuestra experiencia formativa.')]: 'Moments captured during our formative experience.',
    [normalizeText('¿Listo para profundizar en el espectro visual?')]: 'Ready to dive deeper into the visual spectrum?',
    [normalizeText('Hemos preparado bitácoras detalladas, galerías del evento y la documentación técnica de cómo aplicamos estos conceptos en el código.')]: 'We have prepared detailed logs, event galleries, and technical documentation of how we applied these concepts in code.',
    [normalizeText('Ver ECCI y Galería')]: 'See ECCI and Gallery',
    [normalizeText('Explorar al Equipo')]: 'Explore the Team',
    [normalizeText('Sobre la Universidad ECCI')]: 'About ECCI University',
    [normalizeText('Un campus creativo que impulsa la capacitación digital y la colaboración con SENA CMTC.')]: 'A creative campus that promotes digital training and collaboration with SENA CMTC.',
    [normalizeText('¿Qué es la Universidad ECCI?')]: 'What is ECCI University?',
    [normalizeText('La Universidad ECCI es una institución de educación superior de gran trayectoria en Colombia, reconocida por su fuerte enfoque tecnológico, práctico y de innovación. Es un ecosistema académico que se caracteriza por impulsar el desarrollo técnico y profesional, conectando directamente a los estudiantes con las demandas de la industria digital actual.')]: 'ECCI University is a higher education institution with a long tradition in Colombia, recognized for its strong technological, practical, and innovation focus. It is an academic ecosystem characterized by promoting technical and professional development, directly connecting students with the demands of today\'s digital industry.',
    [normalizeText('Insertar Foto: Fachada Sede Centro')]: 'Insert Photo: Central Campus Facade',
    [normalizeText('Insertar Foto: Instalaciones Interiores')]: 'Insert Photo: Interior Facilities',
    [normalizeText('Sede Centro: Innovación en el Corazón de Bogotá')]: 'Central Campus: Innovation in the Heart of Bogotá',
    [normalizeText('Ubicada en un punto neurálgico e histórico de la capital, la Sede Centro de la ECCI combina la esencia de la arquitectura urbana con modernos laboratorios de cómputo, talleres interactivos y espacios de co-working. Este campus es el núcleo donde confluyen las facultades de ingeniería y diseño, sirviendo como escenario ideal para el desarrollo de eventos tecnológicos interinstitucionales.')]: 'Located in a neuralgic and historic point of the capital, ECCI\'s Central Campus combines the essence of urban architecture with modern computer labs, interactive workshops, and co-working spaces. This campus is the core where the engineering and design faculties converge, serving as the ideal setting for the development of interinstitutional technological events.',
    [normalizeText('Nuestra Experiencia como Comunidad SENA')]: 'Our Experience as a SENA Community',
    [normalizeText('La visita fortaleció nuestros lazos con la ECCI y mostró cómo la formación técnica complementa la creatividad académica, especialmente en diseño y desarrollo de interfaces. Compartimos metodologías y aprendizajes que nos inspiran a mejorar proyectos reales.')]: 'The visit strengthened our ties with ECCI and showed how technical training complements academic creativity, especially in interface design and development. We shared methodologies and learnings that inspire us to improve real projects.',
    [normalizeText('Insertar Foto: Recibimiento / Apertura')]: 'Insert Photo: Reception / Opening',
    [normalizeText('Insertar Foto: Evento de Diseño y Código')]: 'Insert Photo: Design and Code Event',
    [normalizeText('Insertar Foto: Grupo SENA en ECCI')]: 'Insert Photo: SENA Group at ECCI',
    [normalizeText('Galería de la Universidad ECCI')]: 'ECCI University Gallery',
    [normalizeText('Ideas y métodos sobre el manejo del color en medios digitales y la experiencia visual.')]: 'Ideas and methods on handling color in digital media and the visual experience.',
    [normalizeText('Una Ponencia Magistral')]: 'A Masterful Lecture',
    [normalizeText('Tuvimos el privilegio de asistir a la conferencia impartida por')]: 'We had the privilege of attending the lecture given by',
    [normalizeText(', reconocida pintora, poeta y escritora. Su perspectiva multidisciplinaria nos ofreció un enfoque único, cruzando las fronteras del arte clásico, la literatura y el diseño digital para entender el impacto real del color en las interfaces y la experiencia humana.')]: ', renowned painter, poet, and writer. Her multidisciplinary perspective offered us a unique approach, crossing the boundaries of classic art, literature, and digital design to understand the real impact of color on interfaces and human experience.',
    [normalizeText('Teoría e Historia de los Colores')]: 'Color Theory and History',
    [normalizeText('La ponencia inició con un viaje evolutivo sobre cómo la humanidad ha interpretado el espectro cromático. Desde los pigmentos naturales del arte rupestre hasta la síntesis aditiva y sustractiva moderna. Sara nos desglosó las bases técnicas de la teoría del color, recordándonos que cada tono que usamos en el frontend hereda un trasfondo histórico cultural profundo.')]: 'The lecture began with an evolutionary journey on how humanity has interpreted the chromatic spectrum. From the natural pigments of cave art to modern additive and subtractive synthesis. Sara broke down the technical foundations of color theory for us, reminding us that every tone we use in the frontend inherits a deep cultural and historical background.',
    [normalizeText('Foto: Explicación de Teoría e Historia')]: 'Photo: Theory and History Explanation',
    [normalizeText('Psicología del Color y Experiencia Visual')]: 'Color Psychology and Visual Experience',
    [normalizeText('Más allá de la estética, el color es un disparador de emociones y comportamientos. Analizamos cómo el cerebro procesa los estímulos cromáticos y cómo esto define la usabilidad y la accesibilidad. Comprender la psicología del color nos permite, como desarrolladores y diseñadores, guiar la atención del usuario de manera intuitiva y orgánica.')]: 'Beyond aesthetics, color is a trigger for emotions and behaviors. We analyzed how the brain processes chromatic stimuli and how this defines usability and accessibility. Understanding color psychology allows us, as developers and designers, to guide user attention intuitively and organically.',
    [normalizeText('Foto: Diapositivas de Psicología del Color')]: 'Photo: Color Psychology Slides',
    [normalizeText('Combinaciones Cromáticas y Armonías')]: 'Chromatic Combinations and Harmonies',
    [normalizeText('Sara nos enseñó métodos prácticos para dominar el círculo cromático, explorando armonías análogas, complementarias y triadas. Aprendimos a balancear contrastes agresivos sin perder la elegancia visual, una habilidad crucial para estructurar hojas de estilo (CSS) limpias, legibles y con un balance visual óptimo.')]: 'Sara taught us practical methods to master the color wheel, exploring analogous, complementary, and triadic harmonies. We learned to balance aggressive contrasts without losing visual elegance, a crucial skill for structuring clean, readable CSS stylesheets with optimal visual balance.',
    [normalizeText('Foto: Ejemplos de Combinaciones')]: 'Photo: Examples of Combinations',
    [normalizeText('La Moda en el Color y Tendencias Digitales')]: 'Fashion in Color and Digital Trends',
    [normalizeText('Para cerrar, la conferencia abordó cómo las tendencias del color son cíclicas y están fuertemente influenciadas por la moda, el contexto social y la tecnología. Entender estas dinámicas nos ayuda a diseñar interfaces que no solo sean funcionales hoy, sino que se mantengan vigentes y atractivas ante las corrientes del diseño contemporáneo.')]: 'To conclude, the lecture addressed how color trends are cyclical and strongly influenced by fashion, social context, and technology. Understanding these dynamics helps us design interfaces that are not only functional today, but remain relevant and attractive amid contemporary design currents.',
    [normalizeText('Foto: Cierre del Evento y Tendencias')]: 'Photo: Event Closing and Trends',
    [normalizeText('Galería de la Conferencia de Sara Viloria')]: 'Gallery of Sara Viloria\'s Conference',
    [normalizeText('Glosario Visual')]: 'Visual Glossary',
    [normalizeText('Términos esenciales para dominar color, contraste y accesibilidad en diseño web.')]: 'Essential terms to master color, contrast, and accessibility in web design.',
    [normalizeText('El Arsenal Técnico del Diseñador Frontend')]: 'The Frontend Designer\'s Technical Arsenal',
    [normalizeText('El código y el diseño se hablan a través de conceptos precisos. Domina el lenguaje visual que separa a un maquetador novato de un desarrollador experto en interfaces interactivas.')]: 'Code and design speak to each other through precise concepts. Master the visual language that separates a novice layout designer from an expert interactive interface developer.',
    [normalizeText('Color')]: 'Color',
    [normalizeText('RGB vs. CMYK')]: 'RGB vs. CMYK',
    [normalizeText('¿Por qué el código rompe tus colores impresos? Descubre la física de la luz digital frente a los pigmentos físicos.')]: 'Why does code break your printed colors? Discover the physics of digital light versus physical pigments.',
    [normalizeText('Estándar')]: 'Standard',
    [normalizeText('Normas WCAG')]: 'WCAG Standards',
    [normalizeText('El contraste no es moda, es ley. Explora las reglas de accesibilidad indispensables para interfaces globales.')]: 'Contrast is not a trend, it is law. Explore the essential accessibility rules for global interfaces.',
    [normalizeText('UI/UX')]: 'UI/UX',
    [normalizeText('Contraste Armónico')]: 'Harmonic Contrast',
    [normalizeText('La sutil ciencia detrás de por qué unos degradados cansan la vista y otros atrapan al usuario por horas.')]: 'The subtle science behind why some gradients tire the eye and others captivate the user for hours.',
    [normalizeText('30 Conceptos Clave')]: '30 Key Concepts',
    [normalizeText('¿Listo para dominar el diseño digital?')]: 'Ready to master digital design?',
    [normalizeText('Explora nuestro glosario completo e interactivo. Términos explicados de forma rápida, visual y aplicados directamente a tus hojas de estilo CSS.')]: 'Explore our complete and interactive glossary. Terms explained quickly, visually, and applied directly to your CSS stylesheets.',
    [normalizeText('Explorar Glosario Completo')]: 'Explore the Complete Glossary',
    [normalizeText('Equipo SENA CMTC')]: 'SENA CMTC Team',
    [normalizeText('Nosotros desarrollamos esta plataforma para compartir la experiencia y la creatividad de la jornada.')]: 'We developed this platform to share the experience and creativity of the event.',
    [normalizeText('Orgullosamente SENA CMTC')]: 'Proudly SENA CMTC',
    [normalizeText('Somos el equipo de futuros tecnólogos en')]: 'We are the team of future technologists in',
    [normalizeText('Análisis y Desarrollo de Software')]: 'Analysis and Software Development',
    [normalizeText('del Centro de Manufactura en Textiles y Cuero (CMTC). Más que compañeros de ficha, somos un grupo de desarrolladores apasionados por crear soluciones digitales visuales y eficientes. Fuimos los invitados especiales en esta jornada de intercambio de saberes, llevando el sello de nuestra formación técnica a escenarios académicos de alto nivel.')]: 'from the Textile and Leather Manufacturing Center (CMTC). More than classmates, we are a group of passionate developers creating efficient visual digital solutions. We were the special guests in this knowledge exchange event, bringing the mark of our technical training to high-level academic settings.',
    [normalizeText('Foto: Nuestro equipo/ficha en el evento')]: 'Photo: Our team/class at the event',
    [normalizeText('Nuestra Identidad: Aprender Haciendo')]: 'Our Identity: Learning by Doing',
    [normalizeText('Para nosotros, el')]: 'For us, the',
    [normalizeText('es sinónimo de práctica real y transformación. Nuestra formación no se queda en la teoría de un tablero; se vive tirando líneas de código, estructurando bases de datos, resolviendo conflictos en Git y diseñando interfaces interactivas. Esta mentalidad ágil y orientada a proyectos es la que nos impulsa a asumir retos tecnológicos y a destacar en eventos colaborativos interinstitucionales.')]: 'is synonymous with real practice and transformation. Our training does not stay in whiteboard theory; it is lived by writing lines of code, structuring databases, resolving Git conflicts, and designing interactive interfaces. This agile, project-oriented mindset is what drives us to take on technological challenges and stand out in collaborative interinstitutional events.',
    [normalizeText('Foto: En plena jornada de desarrollo / Trabajo en equipo')]: 'Photo: In the middle of a development day / Teamwork',
    [normalizeText('Detrás de esta Plataforma')]: 'Behind this Platform',
    [normalizeText('Este sitio web es el resultado directo de lo que vivimos. Diseñamos, maquetamos y desarrollamos este espacio en un tiempo récord para documentar de forma interactiva nuestra visita a la ECCI y las valiosas lecciones sobre la teoría del color de Sara Viloria. Desde los estilos CSS modernos en modo oscuro hasta la arquitectura responsiva, cada línea fue escrita por nosotros para demostrar el nivel técnico que alcanzamos en el CMTC.')]: 'This website is the direct result of what we experienced. We designed, laid out, and developed this space in record time to interactively document our visit to ECCI and the valuable lessons about Sara Viloria\'s color theory. From modern dark-mode CSS styles to responsive architecture, every line was written by us to demonstrate the technical level we reached at CMTC.',
    [normalizeText('Foto: Captura o detalle de la mesa de código / Detalles del proyecto')]: 'Photo: Screenshot or detail of the code desk / Project details',
    [normalizeText('Galería del Equipo SENA CMTC')]: 'SENA CMTC Team Gallery',
    [normalizeText('Secciones')]: 'Sections',
    [normalizeText('Contacto')]: 'Contact',
    [normalizeText('Plataforma educativa colaborativa construida para documentar el encuentro entre SENA CMTC y Universidad ECCI.')]: 'Collaborative educational platform built to document the meeting between SENA CMTC and ECCI University.',
    [normalizeText('Diseño: SENA CMTC')]: 'Design: SENA CMTC',
    [normalizeText('Última actualización:')]: 'Last updated:',
    [normalizeText('© 2026 - SENA CMTC & Universidad ECCI. Todos los derechos reservados.')]: '© 2026 - SENA CMTC & ECCI University. All rights reserved.',
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([spanish, english]) => [normalizeText(english), normalizeText(spanish)])
  );

  const getTextNodes = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentNode;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest('script,style')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    return nodes;
  };

  const translatePage = (lang) => {
    getTextNodes().forEach((node) => {
      const original = normalizeText(node.nodeValue);
      const target = lang === 'en' ? translations[original] : reverseTranslations[original];
      if (target) {
        const prefix = node.nodeValue.match(/^\s*/)[0] || '';
        const suffix = node.nodeValue.match(/\s*$/)[0] || '';
        node.nodeValue = `${prefix}${target}${suffix}`;
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('siteLang', lang);
    langLinks.forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
  };

  const setLanguage = (lang) => {
    if (!['es', 'en'].includes(lang)) lang = 'es';
    translatePage(lang);
  };

  const currentYearEl = document.getElementById('current-year');
  const footerUpdatedEl = document.getElementById('footer-updated');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
  if (footerUpdatedEl) footerUpdatedEl.textContent = new Date(document.lastModified).toLocaleDateString();

  langLinks.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  const initialLang = localStorage.getItem('siteLang') || 'es';
  setLanguage(initialLang);

  const updateHeaderOnScroll = () => header.classList.toggle('header-scrolled', window.scrollY > 40);

  function animateVisibleSections() {
    const targets = document.querySelectorAll('.page-section, .hero, .topic-card, .gallery-section');
    targets.forEach((el) => {
      if (el.classList.contains('animate-fade-in')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
        el.classList.add('animate-fade-in');
      }
    });
  }

  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.page-section, .hero, .topic-card, .gallery-section').forEach((el) => {
    sectionObserver.observe(el);
  });

  const setActiveTab = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    tabLinks.forEach((link) => {
      const active = link.dataset.value === id;
      link.classList.toggle('active', active);
      active ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
    });

    tabContents.forEach((content) => content.classList.toggle('active', content.id === id));
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Trigger a quick check for visible sections (handles fast tab switches)
    requestAnimationFrame(animateVisibleSections);
  };

  tabLinks.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    setActiveTab(link.dataset.value);
  }));

  window.switchTab = setActiveTab;
  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll();

  document.querySelectorAll('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => setActiveTab(button.dataset.tab));
  });

  const initialHash = window.location.hash.slice(1);
  if (initialHash && document.getElementById(initialHash)) {
    setActiveTab(initialHash);
  }
});