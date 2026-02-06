export interface Prompt {
    category: 'work' | 'study' | 'code' | 'marketing' | 'design' | 'productivity' | 'writing' | 'business';
    title: { es: string; en: string };
    content: { es: string; en: string };
    model: string;
}

export const prompts: Prompt[] = [
    // --- CODING (Dev) ---
    {
        category: 'code',
        title: { es: 'Experto en Refactorización', en: 'Refactoring Expert' },
        content: {
            es: 'Actúa como un Arquitecto de Software Senior. Analiza el siguiente código para encontrar malos olores (code smells), problemas de seguridad y cuellos de botella de rendimiento. Proporciona una versión refactorizada siguiendo los principios SOLID y explica los cambios clave: [Pegar Código]',
            en: 'Act as a Senior Software Architect. Analyze the following code for code smells, security issues, and performance bottlenecks. Provide a refactored version following SOLID principles and explain the key changes: [Paste Code]'
        },
        model: 'Claude 3.5 Sonnet / V0'
    },
    {
        category: 'code',
        title: { es: 'Generador de Tests Unitarios', en: 'Unit Test Generator' },
        content: {
            es: 'Escribe pruebas unitarias completas para la siguiente función utilizando [Tu Framework de Tests, e.g., Jest/Pytest]. Asegúrate de cubrir casos borde, entradas inválidas y el camino feliz. Mochea cualquier dependencia externa.',
            en: 'Write comprehensive unit tests for the following function using [Your Test Framework, e.g., Jest/Pytest]. Ensure you cover edge cases, invalid inputs, and the happy path. Mock any external dependencies.'
        },
        model: 'DeepSeek-V3 / ChatGPT'
    },
    {
        category: 'code',
        title: { es: 'Explicación "Como si tuviera 5 años"', en: 'ELI5 Code Explanation' },
        content: {
            es: 'Explícame este fragmento de código complejo como si tuviera 5 años. Usa analogías del mundo real para describir cómo funcionan los bucles, variables y la lógica principal.',
            en: 'Explain this complex code snippet to me like I\'m 5 years old. Use real-world analogies to describe how the loops, variables, and main logic work.'
        },
        model: 'ChatGPT'
    },
    {
        category: 'code',
        title: { es: 'Documentación Automática', en: 'Auto Documentation' },
        content: {
            es: 'Genera documentación técnica en formato JSDoc/DocString para las siguientes funciones. Incluye descripción de parámetros, tipos de retorno y un ejemplo de uso para cada una.',
            en: 'Generate technical documentation in JSDoc/DocString format for the following functions. Include parameter descriptions, return types, and a usage example for each.'
        },
        model: 'Claude 3.5 Sonnet'
    },
    {
        category: 'code',
        title: { es: 'Buscador de Bugs Lógicos', en: 'Logical Bug Hunter' },
        content: {
            es: 'El siguiente código se ejecuta sin errores pero no da el resultado esperado. Encuentra el error lógico: [Describir comportamiento esperado] vs [Comportamiento real]. Código: [Pegar Código]',
            en: 'The following code runs without errors but does not give the expected result. Find the logical error: [Describe expected behavior] vs [Actual behavior]. Code: [Paste Code]'
        },
        model: 'DeepSeek-R1 / o1'
    },

    // --- WRITING (Escritura) ---
    {
        category: 'writing',
        title: { es: 'Editor de Estilo', en: 'Style Editor' },
        content: {
            es: 'Actúa como un editor profesional de libros. Revisa el siguiente texto para mejorar el flujo, eliminar la voz pasiva y enriquecer el vocabulario, manteniendo el tono original del autor. [Pegar Texto]',
            en: 'Act as a professional book editor. Review the following text to improve flow, eliminate passive voice, and enrich vocabulary, while maintaining the author\'s original tone. [Paste Text]'
        },
        model: 'Claude 3.5 Sonnet'
    },
    {
        category: 'writing',
        title: { es: 'Ganchos Virales (Hooks)', en: 'Viral Hooks' },
        content: {
            es: 'Genera 10 "ganchos" (hooks) de apertura irresistibles para un hilo de Twitter/LinkedIn sobre [Tema]. Deben despertar curiosidad, controversia o valor inmediato.',
            en: 'Generate 10 irresistible opening "hooks" for a Twitter/LinkedIn thread about [Topic]. They should spark curiosity, controversy, or immediate value.'
        },
        model: 'Claude 3.5 Haiku / ChatGPT'
    },
    {
        category: 'writing',
        title: { es: 'Reescritura SEO', en: 'SEO Rewrite' },
        content: {
            es: 'Reescribe el siguiente artículo de blog para optimizarlo para la palabra clave "[Palabra Clave]". Asegúrate de incluirla en el primer párrafo, H2s y de forma natural en el texto. Mantén la legibilidad alta.',
            en: 'Rewrite the following blog post to optimize it for the keyword "[Keyword]". Ensure it\'s included in the first paragraph, H2s, and naturally throughout the text. Keep readability high.'
        },
        model: 'Jasper / ChatGPT'
    },

    // --- PRODUCTIVITY (Productividad) ---
    {
        category: 'productivity',
        title: { es: 'Resumen Ejecutivo (Daily Brief)', en: 'Executive Daily Brief' },
        content: {
            es: 'Actúa como mi Jefe de Gabinete. Aquí están mis correos y notas de hoy: [Pegar Notas]. Resúmelo en: 1) 3 Prioridades Críticas, 2) Personas a contactar, 3) Cuellos de botella potenciales.',
            en: 'Act as my Chief of Staff. Here are my emails and notes for today: [Paste Notes]. Summarize this into: 1) 3 Critical Priorities, 2) People to contact, 3) Potential bottlenecks.'
        },
        model: 'Gemini 1.5 Pro'
    },
    {
        category: 'productivity',
        title: { es: 'Matriz de Eisenhower', en: 'Eisenhower Matrix' },
        content: {
            es: 'Tengo esta lista de tareas: [Lista]. Clasifícalas en la Matriz de Eisenhower (Urgente/Importante) y dime qué debo hacer ahora, qué agendar y qué delegar.',
            en: 'I have this list of tasks: [List]. Categorize them into the Eisenhower Matrix (Urgent/Important) and tell me what to do now, what to schedule, and what to delegate.'
        },
        model: 'ChatGPT'
    },
    {
        category: 'productivity',
        title: { es: 'Plan de Aprendizaje Acelerado', en: 'Accelerated Learning Plan' },
        content: {
            es: 'Quiero aprender [Habilidad, e.g., Machine Learning] en 4 semanas. Créame un plan de estudio intensivo día a día, centrado en el principio 80/20 (aprender lo más importante primero).',
            en: 'I want to learn [Skill, e.g., Machine Learning] in 4 weeks. Create a day-by-day intensive study plan for me, focused on the 80/20 principle (learn the most important things first).'
        },
        model: 'ChatGPT / Perplexity'
    },

    // --- DESIGN / ART (Midjourney/DALL-E) ---
    {
        category: 'design',
        title: { es: 'Fotografía Realista (Midjourney v6)', en: 'Realistic Photography (v6)' },
        content: {
            es: 'Cinematic shot, 35mm photograph of [Sujeto], natural lighting, depth of field, highly detailed, photorealistic, 8k, shot on Kodak Portra 400 --v 6.0 --style raw',
            en: 'Cinematic shot, 35mm photograph of [Subject], natural lighting, depth of field, highly detailed, photorealistic, 8k, shot on Kodak Portra 400 --v 6.0 --style raw'
        },
        model: 'Midjourney v6'
    },
    {
        category: 'design',
        title: { es: 'Diseño de Logo Minimalista', en: 'Minimalist Logo Design' },
        content: {
            es: 'Minimalist vector logo for a [Company Type] named "[Name]". Simple geometric shapes, flat design, negative space, professional, modern, white background --no text details --v 6.0',
            en: 'Minimalist vector logo for a [Company Type] named "[Name]". Simple geometric shapes, flat design, negative space, professional, modern, white background --no text details --v 6.0'
        },
        model: 'Midjourney / DALL-E 3'
    },
    {
        category: 'design',
        title: { es: 'UI/UX Dashboard Concept', en: 'UI/UX Dashboard Concept' },
        content: {
            es: 'Modern SaaS dashboard UI design for [Use Case]. Dark mode, glassmorphism elements, clean typography, vibrant accent colors, dribbble style, high fidelity --ar 16:9',
            en: 'Modern SaaS dashboard UI design for [Use Case]. Dark mode, glassmorphism elements, clean typography, vibrant accent colors, dribbble style, high fidelity --ar 16:9'
        },
        model: 'Midjourney / v0'
    },

    // --- BUSINESS (Negocios) ---
    {
        category: 'business',
        title: { es: 'Análisis FODA (SWOT)', en: 'SWOT Analysis' },
        content: {
            es: 'Realiza un análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas) para [Empresa/Idea]. Céntrate en factores de mercado actuales y competidores potenciales.',
            en: 'Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for [Company/Idea]. Focus on current market factors and potential competitors.'
        },
        model: 'ChatGPT / Claude'
    },
    {
        category: 'business',
        title: { es: 'Generador de Modelo de Negocio', en: 'Business Model Canvas' },
        content: {
            es: 'Ayúdame a rellenar el Business Model Canvas para [Idea de Negocio]. Define propuesta de valor, segmentos de clientes, fuentes de ingresos y estructura de costes.',
            en: 'Help me fill out the Business Model Canvas for [Business Idea]. Define value proposition, customer segments, revenue streams, and cost structure.'
        },
        model: 'ChatGPT'
    },
    {
        category: 'business',
        title: { es: 'Simulador de Negociación', en: 'Negotiation Simulator' },
        content: {
            es: 'Actúa como un cliente difícil que quiere bajar el precio de mi servicio. Yo intentaré venderte el valor. Responde con objeciones realistas y evalúa mis respuestas después de 3 intercambios.',
            en: 'Act as a difficult client who wants to lower the price of my service. I will try to sell you on value. Respond with realistic objections and evaluate my responses after 3 exchanges.'
        },
        model: 'Claude 3.5 Sonnet'
    },
    // --- WORK (Trabajo) ---
    {
        category: 'work',
        title: { es: 'Asistente de Correos Difíciles', en: 'Difficult Email Assistant' },
        content: {
            es: 'Actúa como un experto en comunicación corporativa. Ayúdame a redactar un correo para [destinatario] declinando su solicitud de [solicitud] pero manteniendo una buena relación. El tono debe ser profesional y empático.',
            en: 'Act like a corporate communication expert. Help me draft an email to [recipient] declining their request for [request] but maintaining a good relationship. The tone should be professional and empathetic.'
        },
        model: 'ChatGPT / Claude'
    },
    {
        category: 'work',
        title: { es: 'Acta de Reunión Automática', en: 'Auto-Meeting Minutes' },
        content: {
            es: 'Aquí están mis notas desordenadas de la reunión: [Pegar Notas]. Transfórmalas en un acta de reunión profesional con: 1) Resumen Ejecutivo, 2) Decisiones Clave, 3) Elementos de Acción (con responsables).',
            en: 'Here are my messy meeting notes: [Paste Notes]. Transform them into professional meeting minutes with: 1) Executive Summary, 2) Key Decisions, 3) Action Items (with owners).'
        },
        model: 'ChatGPT'
    },
    {
        category: 'work',
        title: { es: 'Presentación Persuasiva', en: 'Persuasive Presentation' },
        content: {
            es: 'Crea un esquema para una presentación de 10 diapositivas para convencer a [Audiencia] de adoptar [Propuesta]. Usa la estructura: Problema, Solución, Beneficios, Prueba Social, Llamada a la Acción.',
            en: 'Create an outline for a 10-slide presentation to convince [Audience] to adopt [Proposal]. Use the structure: Problem, Solution, Benefits, Social Proof, Call to Action.'
        },
        model: 'Claude 3.5 Sonnet'
    },

    // --- STUDY (Estudio) ---
    {
        category: 'study',
        title: { es: 'Tutor Socrático', en: 'Socratic Tutor' },
        content: {
            es: 'Quiero aprender sobre [Tema]. No me des la respuesta directa. Hazme preguntas que guíen mi razonamiento para llegar a la conclusión por mí mismo. Empieza con una pregunta simple.',
            en: 'I want to learn about [Topic]. Do not give me the direct answer. Ask me questions that guide my reasoning to reach the conclusion myself. Start with a simple question.'
        },
        model: 'ChatGPT'
    },
    {
        category: 'study',
        title: { es: 'Resumidor de Papers Académicos', en: 'Academic Paper Summarizer' },
        content: {
            es: 'Resume el siguiente paper académico para un estudiante universitario. Destaca: Hipótesis principal, Metodología usada, Resultados clave y Conclusiones. [Pegar Texto]',
            en: 'Summarize the following academic paper for a university student. Highlight: Main Hypothesis, Methodology used, Key Results, and Conclusions. [Paste Text]'
        },
        model: 'Claude 3.5 Sonnet'
    },
    {
        category: 'study',
        title: { es: 'Generador de Flashcards', en: 'Flashcard Generator' },
        content: {
            es: 'Crea 10 tarjetas de estudio (flashcards) sobre [Tema] en formato Pregunta/Respuesta. Enfócate en los conceptos más difíciles y definiciones clave.',
            en: 'Create 10 flashcards about [Topic] in Question/Answer format. Focus on the most difficult concepts and key definitions.'
        },
        model: 'ChatGPT'
    },

    // --- MARKETING (Marketing) ---
    {
        category: 'marketing',
        title: { es: 'Calendario de Contenidos', en: 'Content Calendar' },
        content: {
            es: 'Crea un calendario de contenidos de 1 semana para una marca de [Industria] en [Red Social]. El objetivo es [Objetivo]. Incluye ideas de copy, formato (video/imagen) y hora de publicación sugerida.',
            en: 'Create a 1-week content calendar for a [Industry] brand on [Social Network]. The goal is [Goal]. Include copy ideas, format (video/image) and suggested posting time.'
        },
        model: 'ChatGPT / Jasper'
    },
    {
        category: 'marketing',
        title: { es: 'Generador de Hooks Virales', en: 'Viral Hook Generator' },
        content: {
            es: 'Escribe 5 ganchos (hooks) visuales y de texto para un video de TikTok/Reels sobre [Producto]. Deben captar la atención en los primeros 3 segundos.',
            en: 'Write 5 visual and text hooks for a TikTok/Reels video about [Product]. They must grab attention in the first 3 seconds.'
        },
        model: 'Claude 3.5 Sonnet'
    },
    {
        category: 'marketing',
        title: { es: 'Copywriting PAS', en: 'PAS Copywriting' },
        content: {
            es: 'Escribe un copy de ventas para [Producto] usando el marco PAS (Problema, Agitación, Solución). Enfócate en los puntos de dolor de [Cliente Ideal].',
            en: 'Write sales copy for [Product] using the PAS (Problem, Agitation, Solution) framework. Focus on the pain points of [Ideal Customer].'
        },
        model: 'Jasper / ChatGPT'
    }
];
