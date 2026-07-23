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
      "Bono Tabs: tableta de abono natural para plantas de interior. Nutrición lenta, retención de agua y materia orgánica recuperada.",
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
    wordmark: "BONO PLANET",
    logoSrc: "/logo.png",
    radius: "1.5rem",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: false,
    googleAuth: true, // Login con Google — Sem 2
    emailLogin: false, // Magic link email — opcional
    aiChat: true, // Chat AI en /chat — Sem 3
    toolUse: true, // Tool use registry — Sem 4
    agents: true, // LangGraph agents — Sem 5
    mcp: true, // Servidor MCP en /api/mcp — Sem 5
    rag: false, // RAG con pgvector — opcional
    posthog: false, // Tracking — opcional
    resend: true, // Email — Sem 1+
    pricing: false, // Vitrina desactivada — compra vía Mercado Libre
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
    shop: {
      label: "COMPRA AQUÍ",
      href: "https://listado.mercadolibre.com.mx/_CustId_1325577279?item_id=MLM1856844773&category_id=MLM442408&seller_id=1325577279&client=recoview-selleritems&recos_listing=true",
    },
    nav: [
      { label: "Beneficios", href: "#features" },
      { label: "Cómo funciona", href: "#how-it-works" },
      { label: "Bono Planet", href: "#about" },
      { label: "Preguntas", href: "#faq" },
    ],
    hero: {
      title: "Bono Tabs",
      tagline: "Lo que tu planta necesita en una tableta compacta.",
      description:
        "Bono Tabs es una tableta de abono natural para plantas de interior, elaborada a partir de residuos orgánicos recuperados. Nutre tus plantas y ayuda a retener agua para mantener un sustrato saludable durante más tiempo.",
      benefits: [
        { icon: "Leaf", text: "Nutrición de liberación lenta." },
        { icon: "Droplets", text: "Retiene hasta 3 veces su peso en agua." },
        { icon: "Recycle", text: "Elaborada con residuos orgánicos recuperados." },
        { icon: "Flower2", text: "Ideal para macetas y plantas de interior." },
      ],
    },
    features: {
      eyebrow: "Beneficios",
      title: "Cuatro razones para elegir Bono Tabs.",
      items: [
        {
          icon: "Leaf",
          title: "Nutrición lenta",
          body: "Libera nutrientes de forma constante durante hasta dos meses.",
        },
        {
          icon: "Droplets",
          title: "Retención de agua",
          body: "Absorbe hasta 3× su peso en agua y mantiene el sustrato húmedo por más tiempo.",
        },
        {
          icon: "Recycle",
          title: "Materia orgánica recuperada",
          body: "Elaborada con residuos orgánicos transformados en abono natural.",
        },
        {
          icon: "Flower2",
          title: "Para tu hogar",
          body: "Diseñada para macetas y plantas de interior. Sin medir, sin diluir.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Tres pasos. Cero complicaciones.",
      steps: [
        {
          icon: "PackageOpen",
          title: "Retira la envoltura",
          body: "Quita el empaque de tu Bono Tab antes de usarla.",
        },
        {
          icon: "Hand",
          title: "Desmorona la tableta",
          body: "Desmorónala por encima de la tierra de tu planta.",
        },
        {
          icon: "Droplets",
          title: "Riega y disfruta",
          body: "Riega con normalidad y disfruta la nutrición durante 2 meses.",
        },
      ],
      note: "Notarás que la tierra permanece húmeda por más tiempo.",
    },
    emotional: {
      title: "No tienes mala mano.",
      tagline: "Solo te falta Bono Tabs.",
      body: "Una tableta diseñada para nutrir tus plantas durante hasta dos meses mientras ayuda a conservar la humedad del sustrato.",
    },
    circularEconomy: {
      eyebrow: "Economía circular",
      title: "De residuo a nutriente.",
      description:
        "Transformamos residuos orgánicos en soluciones regenerativas para el cuidado del suelo.",
      flow: [
        {
          icon: "Trash2",
          title: "Residuos orgánicos",
          body: "Representan casi el 50% de los desechos en nuestro estado.",
        },
        {
          icon: "Recycle",
          title: "Bono Planet",
          body: "Recolectamos residuos y los procesamos.",
        },
        {
          icon: "CircleDot",
          title: "Bono Tabs",
          body: "Nuestro primer producto.",
        },
        {
          icon: "Flower2",
          title: "Tus plantas",
          body: "Se benefician de los nutrientes que aportan Bono Tabs.",
        },
        {
          icon: "Sprout",
          title: "Un suelo más saludable",
          body: "Soñamos con que nuestros productos no solo nutran tus macetas, sino algún día jardines enteros y el campo mexicano.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre Bono Planet",
      title: "Tecnología ambiental hecha en México.",
      body: "Somos una startup de tecnología climática que transforma residuos orgánicos en productos regenerativos. Bono Tabs es el primer paso: nutrición natural y retención de agua para tus plantas de interior.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo esencial sobre Bono Tabs.",
      items: [
        {
          q: "¿Qué es Bono Tabs?",
          a: "Una tableta de abono natural para plantas de interior, hecha con materia orgánica recuperada. Nutre y ayuda a retener agua en el sustrato.",
        },
        {
          q: "¿Cómo se usa?",
          a: "Retira la envoltura, desmorona la tableta sobre la tierra de tu planta y riega con normalidad. La nutrición dura hasta dos meses.",
        },
        {
          q: "¿Retiene agua de verdad?",
          a: "Sí. Bono Tabs puede absorber hasta 3 veces su peso en agua, ayudando a mantener el sustrato húmedo por más tiempo.",
        },
        {
          q: "¿Dónde puedo comprarla?",
          a: "En nuestra tienda oficial de Mercado Libre. Haz clic en «COMPRA AQUÍ» en cualquier sección de esta página.",
        },
      ],
    },
    finalCta: {
      title: "Tus plantas lo merecen.",
      subtitle: "Consigue Bono Tabs hoy en Mercado Libre.",
      signup: {
        title: "Regístrate para recibir descuentos especiales",
        placeholder: "Ingresa tu email aquí",
        buttonLabel: "Registrarme",
        successMessage: "¡Listo! Te avisaremos con descuentos exclusivos.",
      },
    },
    footer: {
      tagline: "Tecnología de economía circular para regenerar el suelo. Innovación mexicana.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Beneficios", href: "#features" },
            { label: "Cómo funciona", href: "#how-it-works" },
            { label: "Comprar", href: "https://listado.mercadolibre.com.mx/_CustId_1325577279?item_id=MLM1856844773&category_id=MLM442408&seller_id=1325577279&client=recoview-selleritems&recos_listing=true", external: true },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Bono Planet", href: "#about" },
            { label: "Economía circular", href: "#circular" },
            { label: "Preguntas", href: "#faq" },
          ],
        },
        {
          title: "Comprar",
          links: [
            {
              label: "Mercado Libre",
              href: "https://listado.mercadolibre.com.mx/_CustId_1325577279?item_id=MLM1856844773&category_id=MLM442408&seller_id=1325577279&client=recoview-selleritems&recos_listing=true",
              external: true,
            },
            { label: "Contacto", href: "mailto:hola@bonoplanet.mx" },
          ],
        },
      ],
      links: [{ label: "Preguntas", href: "#faq" }],
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
