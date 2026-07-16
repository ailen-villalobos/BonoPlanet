// ============================================================
// VibeFast · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Estructura:
//   - app:      identidad del producto (nombre, descripción, dominio, color)
//   - features: toggles para encender/apagar funcionalidades
//   - ai:       configuración de OpenAI
//   - email:    configuración de Resend
//   - auth:     providers habilitados
//   - landing:  copy de la página pública
//   - pricing:  planes (si features.payments está activo)
//
// Tip Sem 1: empieza editando `app` y `landing.hero` con los datos de tu producto.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "Bono Planet",
    description:
      "Tecnología regenerativa para el cuidado del suelo. Bono Tabs nutre tus plantas de forma natural y sostenible.",
    domain: "vibefast.dev", // sin https://, sin www
    locale: "es", // "es" | "en"
    // URL pública: usa NEXT_PUBLIC_APP_URL en .env. En este config solo definimos el default.
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    // Paleta Bono Planet — config = fuente de verdad; layout.js inyecta las CSS vars.
    primary: "#2F5F3B",
    secondary: "#7E4B1F",
    accent: "#FFD238",
    warm: "#FBED8C",
    dark: "#1a2e1f",
    primaryContent: "#ffffff",
    secondaryContent: "#ffffff",
    accentContent: "#2F5F3B",
    // Tipografía: Namaku (títulos), Plus Jakarta Sans (cuerpo), KG Red Hands (subtítulos/botones)
    fonts: {
      heading: "Namaku",
      body: "Plus Jakarta Sans",
      accent: "KG Red Hands",
    },
    logoText: "Bono Planet",
    logoSrc: null,
    radius: "1.5rem",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: true, // Captura emails en landing — Sem 1
    googleAuth: true, // Login con Google — Sem 2
    emailLogin: false, // Magic link email — opcional
    aiChat: true, // Chat AI en /chat — Sem 3
    toolUse: true, // Tool use registry — Sem 4
    agents: true, // LangGraph agents — Sem 5
    mcp: true, // Servidor MCP en /api/mcp — Sem 5
    rag: false, // RAG con pgvector — opcional
    posthog: false, // Tracking — opcional
    resend: true, // Email — Sem 1+
    pricing: true, // Muestra la sección de precios en la landing (vitrina; el cobro real es `payments`)
    payments: false, // Stripe — opcional, fuera del temario
    hardware: false, // ESP-Claw bridge — Sem 8
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini", // default barato y rápido
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o", // los agentes razonan mejor con full gpt-4o
    embeddingModel: "text-embedding-3-small",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    // Asegúrate de tener el dominio verificado en Resend antes de cambiar `from`.
    // En desarrollo Resend permite enviar a tu propio correo desde `onboarding@resend.dev`.
    from: "VibeFast <onboarding@resend.dev>",
    replyTo: "hola@vibefast.dev",
    supportEmail: "soporte@vibefast.dev",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"], // se sincroniza con features.googleAuth / emailLogin
  },

  // -----------------------------------------------------------
  // Landing — todo el copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Beneficios", href: "#features" },
      { label: "Cómo funciona", href: "#problem" },
      { label: "Precios", href: "#pricing" },
      { label: "Preguntas", href: "#faq" },
    ],
    hero: {
      eyebrow: "Tecnología regenerativa para tus plantas",
      title: "Bono Tabs: fertiliza tus plantas en segundos, de forma limpia y sostenible.",
      subtitle:
        "En Bono Planet desarrollamos tecnologías de economía circular que transforman residuos orgánicos en soluciones regenerativas para el cuidado del suelo; Bono Tabs es nuestra primera innovación para nutrir tus plantas de forma natural.",
      cta: { label: "Quiero probar Bono Tabs", href: "#waitlist" },
      ctaSecondary: { label: "Ver cómo funciona", href: "#problem" },
    },
    problem: {
      eyebrow: "El reto",
      title: "El cuidado de plantas sigue siendo complicado, sucio y poco sostenible.",
      subtitle:
        "Fertilizantes líquidos, bolsas plásticas y fórmulas químicas que dañan el suelo. La innovación climática aún no llegó a tu maceta.",
      items: [
        {
          icon: "FlaskConical",
          title: "Química innecesaria",
          body: "La mayoría de fertilizantes usan compuestos sintéticos que alteran el equilibrio natural del suelo a largo plazo.",
        },
        {
          icon: "Trash2",
          title: "Residuos plásticos",
          body: "Envases de un solo uso que terminan en vertederos. El cuidado de plantas no debería generar más basura.",
        },
        {
          icon: "Clock",
          title: "Rutinas complicadas",
          body: "Medir, diluir, recordar fechas. Un proceso tedioso que hace que muchas personas abandonen sus plantas.",
        },
      ],
    },
    features: {
      eyebrow: "Beneficios",
      title: "Cuidado natural para tus plantas y el planeta.",
      subtitle: "Bono Tabs une economía circular y nutrición orgánica en un formato simple de usar.",
      items: [
        {
          icon: "Leaf",
          title: "100% natural",
          body: "Elaborado con materia orgánica recuperada para nutrir el suelo de manera sostenible.",
        },
        {
          icon: "Droplets",
          title: "Fácil de usar",
          body: "Coloca una tableta en la maceta cada dos meses y disfruta un cuidado sin complicaciones.",
        },
        {
          icon: "Recycle",
          title: "Economía circular",
          body: "Transformamos residuos orgánicos en soluciones regenerativas que benefician tanto a tus plantas como al planeta.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Todo lo que necesitas saber sobre Bono Tabs.",
      items: [
        {
          q: "¿Qué contiene una Bono Tab?",
          a: "Materia orgánica recuperada mediante procesos de economía circular, formulada para liberar nutrientes de forma lenta y constante durante dos meses.",
        },
        {
          q: "¿Cómo se usa?",
          a: "Coloca una tableta en la maceta, cúbrela ligeramente con sustrato y riega con normalidad. Sin medir, sin diluir, sin complicaciones.",
        },
        {
          q: "¿Es seguro para plantas de interior?",
          a: "Sí. Bono Tabs está diseñado para todo tipo de plantas en maceta, tanto de interior como de exterior, sin olores fuertes ni residuos.",
        },
        {
          q: "¿Cuándo estará disponible?",
          a: "Estamos en fase de lanzamiento. Únete al waitlist y sé de los primeros en probar Bono Tabs en México.",
        },
      ],
    },
    socialProof: {
      text: "Innovación mexicana para regenerar el suelo",
      logos: ["Economía circular", "Materia orgánica", "Cero plástico", "Hecho en México"],
    },
    testimonials: {
      eyebrow: "Primeras impresiones",
      title: "Quienes ya probaron Bono Tabs.",
      subtitle: "Testimonios de nuestro programa piloto con plantas de interior.",
      items: [
        {
          quote:
            "Nunca había mantenido una planta viva más de un mes. Con Bono Tabs solo puse la tableta y olvidé el tema. Mi monstera nunca se había visto tan verde.",
          author: "María González",
          role: "Diseñadora · CDMX",
        },
        {
          quote:
            "Lo que más me sorprendió fue lo limpio del proceso. Sin olores, sin bolsas de plástico, sin líquidos derramados. Se siente como un producto del futuro.",
          author: "Carlos Ruiz",
          role: "Arquitecto · Guadalajara",
        },
        {
          quote:
            "Como alguien que trabaja en sostenibilidad, valoro que realmente usen residuos orgánicos. No es greenwashing, es tecnología circular aplicada.",
          author: "Ana Torres",
          role: "Consultora ambiental · Monterrey",
        },
      ],
    },
    finalCta: {
      eyebrow: "Regenera tu suelo",
      title: "El futuro del cuidado de plantas empieza con una tableta.",
      subtitle:
        "Únete al waitlist y sé de los primeros en experimentar tecnología circular aplicada al hogar.",
      cta: { label: "Quiero probar Bono Tabs", href: "#waitlist" },
      ctaSecondary: { label: "Conocer beneficios", href: "#features" },
    },
    waitlist: {
      eyebrow: "Acceso anticipado",
      title: "Sé de los primeros en probar Bono Tabs.",
      subtitle: "Te avisamos cuando abramos pedidos en México. Sin spam, solo innovación.",
      successMessage: "¡Listo! Te avisamos en cuanto Bono Tabs esté disponible.",
      buttonLabel: "Quiero probar",
      placeholder: "tu@email.com",
    },
    footer: {
      tagline: "Tecnología regenerativa para el suelo. Innovación mexicana con impacto global.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Beneficios", href: "#features" },
            { label: "Cómo funciona", href: "#problem" },
            { label: "Precios", href: "#pricing" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Nuestra misión", href: "#problem" },
            { label: "Preguntas", href: "#faq" },
            { label: "Contacto", href: "mailto:hola@bonoplanet.mx" },
          ],
        },
        {
          title: "Síguenos",
          links: [
            { label: "Instagram", href: "https://instagram.com", external: true },
            { label: "LinkedIn", href: "https://linkedin.com", external: true },
          ],
        },
      ],
      links: [
        { label: "Preguntas", href: "#faq" },
        { label: "Waitlist", href: "#waitlist" },
      ],
    },
  },

  // -----------------------------------------------------------
  // Pricing — vitrina de planes.
  // Se muestra en la landing si features.pricing === true.
  // El cobro real (Stripe) depende de features.payments.
  // -----------------------------------------------------------
  pricing: {
    eyebrow: "Precios",
    title: "Nutrición premium, precio accesible.",
    subtitle: "Sin suscripciones. Sin sorpresas. Solo plantas más sanas.",
    plans: [
      {
        id: "starter",
        name: "Explorador",
        price: 149,
        currency: "MXN",
        interval: "paquete",
        description: "Para probar Bono Tabs en 2-3 macetas.",
        features: ["6 tabletas", "2 meses por tableta", "Envío incluido en México"],
        cta: "Unirme al waitlist",
      },
      {
        id: "pro",
        name: "Hogar verde",
        price: 399,
        currency: "MXN",
        interval: "paquete",
        description: "Para quienes quieren nutrir todo su hogar.",
        features: ["18 tabletas", "Ahorro del 25%", "Soporte prioritario", "Acceso anticipado"],
        cta: "Reservar mi paquete",
        highlighted: true,
        stripePriceId: "",
      },
    ],
  },
}

export default config
