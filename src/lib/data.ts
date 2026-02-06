import type { IAData } from './types';


export const categoryTranslations: Record<string, { es: string; en: string }> = {
    chatbot: { es: 'Chatbots', en: 'Chatbots' },
    code: { es: 'Programación', en: 'Coding' },
    image: { es: 'Imagen', en: 'Image' },
    video: { es: 'Video', en: 'Video' },
    audio: { es: 'Audio', en: 'Audio' },
    text: { es: 'Texto', en: 'Text' },
    math: { es: 'Matemáticas', en: 'Math' },
    search: { es: 'Búsqueda', en: 'Search' },
    design: { es: 'Diseño', en: 'Design' },
    marketing: { es: 'Marketing', en: 'Marketing' },
    research: { es: 'Investigación', en: 'Research' },
    productivity: { es: 'Productividad', en: 'Productivity' },
    writing: { es: 'Escritura', en: 'Writing' },
    integration: { es: 'Integración', en: 'Integration' },
    agent: { es: 'Agentes', en: 'Agents' },
    analysis: { es: 'Análisis', en: 'Analysis' },
    frontend: { es: 'Frontend', en: 'Frontend' },
    fullstack: { es: 'Fullstack', en: 'Fullstack' },
    'long-context': { es: 'Contexto Largo', en: 'Long Context' },
    multimodal: { es: 'Multimodal', en: 'Multimodal' },
    news: { es: 'Noticias', en: 'News' },
    'nocode-like': { es: 'No-Code', en: 'No-Code' },
    social: { es: 'Social', en: 'Social' },
    'ui-generator': { es: 'Generador UI', en: 'UI Generator' },
    vision: { es: 'Visión', en: 'Vision' },
    editor: { es: 'Editor', en: 'Editor' },
    cloud: { es: 'Nube', en: 'Cloud' }
};

export const initialData: IAData[] = [
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        company: 'OpenAI',
        logo: '/images/logos/chatgpt.svg',
        websiteUrl: 'https://chat.openai.com',
        category: ['chatbot', 'code', 'writing'],
        launchDate: '2022-11-30',
        rating: 4.9,
        totalVotes: 1550,
        userCount: {
            es: '200M+ usuarios semanales',
            en: '200M+ weekly users'
        },
        description: {
            es: 'El líder indiscutible. Ahora con GPT-5.2 (Flagship) y la serie o4 para razonamiento avanzado. Ofrece el ecosistema más completo con generación de imágenes, análisis de datos y búsqueda web.',
            en: 'The undisputed leader. Now with GPT-5.2 (Flagship) and the o4 series for advanced reasoning. Offers the most complete ecosystem with image generation, data analysis, and web search.'
        },
        models: ['GPT-5.2', 'o4-mini', 'o1 (Reasoning)', 'DALL-E 3', 'SearchGPT', 'Sora (Alpha)'],
        modelPricing: {
            free: ['o4-mini', 'GPT-3.5', 'SearchGPT'],
            paid: ['GPT-5.2', 'o1', 'Sora', 'DALL-E 3']
        },
        ecosystem: {
            title: { es: 'OpenAI OS', en: 'OpenAI OS' },
            description: { es: 'El sistema operativo de la IA. Apps nativas y Sora integrado.', en: 'The AI Operating System. Native apps and integrated Sora.' },
            apps: [
                { name: 'ChatGPT Apps SDK', description: { es: 'Usa Spotify, Canva y Expedia directamente en el chat.', en: 'Use Spotify, Canva, and Expedia directly in chat.' } },
                { name: 'Sora 2', description: { es: 'Generación de cine con audio sincronizado.', en: 'Cinema generation with synced audio.' } },
                { name: 'Canvas', description: { es: 'Interfaz colaborativa para escritura y código.', en: 'Collaborative interface for writing and code.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: {
                    es: ['Acceso a o4-mini', 'Análisis de archivos y web', 'Generación de imágenes (2/día)'],
                    en: ['Access to o4-mini', 'File and web analysis', 'Image generation (2/day)']
                },
                limits: {
                    es: ['Límites de mensajes dinámicos', 'Acceso estándar a modelos flagship'],
                    en: ['Dynamic message limits', 'Standard access to flagship models']
                }
            },
            plans: [
                {
                    name: 'Plus',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: {
                        es: ['Acceso completo a GPT-5.2, o1 y o4-mini', 'Generación de imágenes DALL-E 3 HD', 'Modo de voz avanzado'],
                        en: ['Full access to GPT-5.2, o1 and o4-mini', 'DALL-E 3 HD image generation', 'Advanced Voice Mode']
                    }
                },
                {
                    name: 'Pro',
                    priceFormatted: '$200 USD',
                    priceUsd: 200,
                    billingPeriod: 'monthly',
                    features: {
                        es: ['Acceso a GPT-5.2 (xhigh) sin límites', 'Razonamiento ilimitado con o1/o4', 'Mayor velocidad de respuesta'],
                        en: ['Unlimited access to GPT-5.2 (xhigh)', 'Unlimited reasoning with o1/o4', 'Faster response speed']
                    }
                }
            ]
        },
        tools: [
            {
                name: 'GPT-5.2',
                description: {
                    es: 'El modelo más inteligente del mundo (Index 51). Capacidad multimodal superior.',
                    en: 'The smartest model in the world (Index 51). Superior multimodal capability.'
                },
                purpose: { es: 'General/Flagship', en: 'General/Flagship' }
            },
            {
                name: 'o4-mini',
                description: {
                    es: 'Razonamiento rápido y eficiente. Ideal para tareas complejas que requieren baja latencia.',
                    en: 'Fast and efficient reasoning. Ideal for complex tasks requiring low latency.'
                },
                purpose: { es: 'Razonamiento Rápido', en: 'Fast Reasoning' }
            },
            {
                name: 'o1',
                description: {
                    es: 'Modelo de razonamiento profundo para matemáticas, ciencias y programación compleja.',
                    en: 'Deep reasoning model for math, science, and complex programming.'
                },
                purpose: { es: 'Razonamiento Profundo', en: 'Deep Reasoning' }
            },
            {
                name: 'DALL-E 3',
                description: {
                    es: 'Generación de imágenes artísticas y fotorrealistas con comprensión perfecta del prompt.',
                    en: 'Artistic and photorealistic image generation with perfect prompt understanding.'
                },
                purpose: { es: 'Imagen', en: 'Image' }
            },
            {
                name: 'SearchGPT',
                description: {
                    es: 'Búsqueda en web en tiempo real con citas y fuentes verificadas.',
                    en: 'Real-time web search with citations and verified sources.'
                },
                purpose: { es: 'Búsqueda', en: 'Search' }
            },
            {
                name: 'Sora',
                description: {
                    es: 'Generación de video hiperrealista (Solo Pro/Research).',
                    en: 'Hyper-realistic video generation (Pro/Research only).'
                },
                purpose: { es: 'Video', en: 'Video' }
            }
        ],
        strengths: {
            es: ['Líder en inteligencia general', 'Capacidad de razonamiento superior', 'Ecosistema completo (Voz, Imagen)', 'Excelente para coding'],
            en: ['Leader in general intelligence', 'Superior reasoning capability', 'Complete ecosystem (Voice, Image)', 'Excellent for coding']
        },
        limitations: {
            es: ['El plan Pro ($200) es costoso', 'Puede ser "verborrágico"', 'Límites de mensajes en horas pico'],
            en: ['Pro plan ($200) is expensive', 'Can be verbose', 'Message limits during peak hours']
        },
        bestFor: {
            es: ['Uso general avanzado', 'Programación', 'Resolución de problemas complejos'],
            en: ['Advanced general use', 'Coding', 'Complex problem solving']
        },
        availability: {
            restrictedCountries: ['CN', 'RU', 'IR', 'KP'],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito', 'Debit Card', 'Apple Pay'],
            platforms: ['Web', 'iOS', 'Android', 'Mac', 'Windows']
        },
        benchmarks: {
            spanish: 92,
            code: 95,
            creativity: 98,
            speed: 100,
            free: 92
        }
    },
    // ... Repeat for other IAs, but ensuring full implementation for all to avoid errors.
    // Since I cannot leave partial objects, I must implement ALL of them.
    {
        id: 'claude',
        name: 'Claude',
        company: 'Anthropic',
        logo: '/images/logos/claude.svg',
        websiteUrl: 'https://claude.ai',
        category: ['chatbot', 'code', 'agent'],
        launchDate: '2023-03-14',
        rating: 4.95,
        totalVotes: 2100,
        userCount: { es: '~35M usuarios mensuales', en: '~35M monthly users' },
        description: {
            es: 'El líder supremo en 2026. Con Claude Opus 4.6 y Sonnet 4.5, redefine la programación agéntica. Su capacidad de "Computer Use" con Zoom visual es inigualable.',
            en: 'The supreme leader in 2026. With Claude Opus 4.6 and Sonnet 4.5, it redefines agentic coding. Its "Computer Use" capability with visual Zoom is unmatched.'
        },
        models: ['Claude 4.6 Opus', 'Claude 4.5 Sonnet', 'Claude 4.5 Haiku'],
        ecosystem: {
            title: { es: 'Anthropic MCP', en: 'Anthropic MCP' },
            description: { es: 'El estándar de integración (USB-C de la IA).', en: 'The integration standard (AI USB-C).' },
            apps: [
                { name: 'Claude Cowork', description: { es: 'Agente especializado en marketing, legal y finanzas.', en: 'Specialized agent for marketing, legal, and finance.' } },
                { name: 'MCP Server', description: { es: 'Conecta Claude a TODAS tus herramientas locales y bases de datos.', en: 'Connect Claude to ALL your local tools and databases.' } },
                { name: 'Artifacts', description: { es: 'Entorno visual para construcción de apps.', en: 'Visual environment for app building.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: {
                    es: ['Acceso a Claude 4.5 Sonnet', 'Uso de Artifacts 2.0', 'Ventana 200K Tokens'],
                    en: ['Access to Claude 4.5 Sonnet', 'Use of Artifacts 2.0', '200K Token Window']
                },
                limits: {
                    es: ['Límites diarios', 'Sin Modo Agente'],
                    en: ['Daily limits', 'No Agent Mode']
                }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: {
                        es: ['Acceso a Opus 4.6 (Limitado)', 'Proyectos Ilimitados', 'Computer Use (Beta)'],
                        en: ['Access to Opus 4.6 (Limited)', 'Unlimited Projects', 'Computer Use (Beta)']
                    }
                },
                {
                    name: 'Team',
                    priceFormatted: '$30 USD',
                    priceUsd: 30,
                    billingPeriod: 'monthly',
                    features: {
                        es: ['Contexto 1M (Beta)', 'Panel de Control', 'Orquestación Multi-Agente'],
                        en: ['1M Context (Beta)', 'Control Panel', 'Multi-Agent Orchestration']
                    }
                }
            ]
        },
        tools: [
            {
                name: 'Opus 4.6',
                description: { es: 'El modelo más inteligente jamás creado. SWE-bench >80%.', en: 'The smartest model ever created. SWE-bench >80%.' },
                purpose: { es: 'Razonamiento/Coding', en: 'Reasoning/Coding' }
            },
            {
                name: 'Code Claude',
                description: { es: 'Agente de terminal que navega repositorios enteros, ejecuta tests y hace commits.', en: 'Terminal agent that navigates whole repos, runs tests, and commits.' },
                purpose: { es: 'Ingeniería de Software', en: 'Software Engineering' }
            },
            {
                name: 'Computer Use (Zoom)',
                description: { es: 'Control total del PC con capacidad de "Zoom" para leer UI pequeña.', en: 'Full PC control with "Zoom" capability to read small UI.' },
                purpose: { es: 'Agente', en: 'Agent' }
            },
            {
                name: 'Artifacts 2.0',
                description: { es: 'Apps completas en un clic con deploy integrado.', en: 'Full apps in one click with integrated deploy.' },
                purpose: { es: 'UI/FullStack', en: 'UI/FullStack' }
            }
        ],
        strengths: {
            es: ['SWE-bench 81% (Líder mundial)', 'Orquestación de agentes', 'Artifacts 2.0'],
            en: ['SWE-bench 81% (World Leader)', 'Agent orchestration', 'Artifacts 2.0']
        },
        limitations: {
            es: ['Opus 4.6 es lento para chat casual', 'Computer Use consume muchos tokens'],
            en: ['Opus 4.6 is slow for casual chat', 'Computer Use consumes many tokens']
        },
        bestFor: {
            es: ['Desarrollo de Software Complejo', 'Agentes Autónomos', 'Investigación Profunda'],
            en: ['Complex Software Development', 'Autonomous Agents', 'Deep Research']
        },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'iOS', 'Android', 'Mac', 'Windows', 'API']
        },
        benchmarks: {
            spanish: 99,
            code: 100,
            creativity: 98,
            speed: 95,
            free: 90
        }
    },
    {
        id: 'gemini',
        name: 'Gemini',
        company: 'Google',
        logo: '/images/logos/gemini.svg',
        websiteUrl: 'https://gemini.google.com',
        category: ['chatbot', 'integration', 'multimodal'],
        launchDate: '2023-12-06',
        rating: 4.8,
        totalVotes: 1800,
        userCount: { es: '~1B usuarios activos', en: '~1B active users' },
        description: {
            es: 'El ecosistema más grande. Con Gemini 3.0 Pro y la tecnología "Project Astra", ofrece asistencia multimodal en tiempo real en gafas, teléfonos y web.',
            en: 'The largest ecosystem. With Gemini 3.0 Pro and "Project Astra" technology, offers real-time multimodal assistance on glasses, phones, and web.'
        },
        models: ['Gemini 3.0 Pro', 'Gemini 3.0 Flash', 'Gemini Ultra 2.5 (Research)'],
        modelPricing: {
            free: ['Gemini 3.0 Flash', 'Gemini 2.0 Flash'],
            paid: ['Gemini 3.0 Pro', 'Gemini Ultra 2.5']
        },
        ecosystem: {
            title: { es: 'Universo Gemini', en: 'Gemini Universe' },
            description: { es: 'Suite creativa y de conocimiento total.', en: 'Total creative and knowledge suite.' },
            apps: [
                { name: 'Nano Banana', description: { es: 'Edición de imagen conversacional (Gemini 3).', en: 'Conversational image editing (Gemini 3).' } },
                { name: 'Google Flow', description: { es: 'Creación de video instantánea desde imágenes.', en: 'Instant video creation from images.' } },
                { name: 'NotebookLM 2026', description: { es: 'Base de conocimiento personal con agentes de estudio.', en: 'Personal knowledge base with study agents.' } },
                { name: 'Project Astra', description: { es: 'Agentes AR en tiempo real.', en: 'Real-time AR agents.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Gemini 3.0 Flash', 'Generación de Video (Veo)', 'Contexto 2M'], en: ['Gemini 3.0 Flash', 'Video Generation (Veo)', '2M Context'] },
                limits: { es: ['Límites en razonamiento profundo'], en: ['Limits on deep reasoning'] }
            },
            plans: [
                {
                    name: 'Advanced',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Gemini 3.0 Pro', '5TB de almacenamiento', 'Agentes de Deep Research'], en: ['Gemini 3.0 Pro', '5TB storage', 'Deep Research Agents'] }
                }
            ]
        },
        tools: [
            { name: 'Gemini 3.0 Pro', description: { es: 'Modelo insignia con razonamiento "Deep Think" y multimodalidad nativa.', en: 'Flagship model with "Deep Think" reasoning and native multimodality.' }, purpose: { es: 'General/Razonamiento', en: 'General/Reasoning' } },
            { name: 'Deep Research', description: { es: 'Agente autónomo que navega, lee PDFs y genera informes.', en: 'Autonomous agent that browses, reads PDFs, and generates reports.' }, purpose: { es: 'Investigación', en: 'Research' } },
            { name: 'Veo', description: { es: 'Generador de video 4K integrado.', en: 'Integrated 4K video generator.' }, purpose: { es: 'Video', en: 'Video' } }
        ],
        strengths: { es: ['Integración nativa con Google (Docs, Gmail)', 'Ventana 2M+ Tokens', 'Multimodalidad superior'], en: ['Native Google integration (Docs, Gmail)', '2M+ Token Window', 'Superior Multimodality'] },
        limitations: { es: ['Puede ser excesivamente cauteloso (Safety)', 'UI a veces saturada'], en: ['Can be overly cautious (Safety)', 'UI sometimes cluttered'] },
        bestFor: { es: ['Usuarios de Android/Google', 'Análisis de videos largos', 'Investigación académica'], en: ['Android/Google users', 'Long video analysis', 'Academic research'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Tarjeta de Crédito', 'Debit Card'], platforms: ['Web', 'iOS', 'Android', 'Glasses'] },
        benchmarks: { spanish: 95, code: 93, creativity: 94, speed: 99, free: 96 }
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        company: 'DeepSeek',
        logo: '/images/logos/deepseek.svg',
        websiteUrl: 'https://chat.deepseek.com',
        category: ['chatbot', 'code', 'math'],
        launchDate: '2023-11-01',
        rating: 4.9,
        totalVotes: 3500,
        userCount: { es: '~200M usuarios mensuales', en: '~200M monthly users' },
        description: {
            es: 'El disruptor del mercado. Con DeepSeek-V4 (Feb 2026) y R1-Turbo, ofrece rendimiento nivel GPT-5 a una fracción del costo. Líder indiscutible en coding Open Source.',
            en: 'The market disruptor. With DeepSeek-V4 (Feb 2026) and R1-Turbo, offers GPT-5 level performance at a fraction of the cost. Undisputed Open Source coding leader.'
        },
        models: ['DeepSeek-V4 (Preview)', 'DeepSeek-R1 (Reasoning)', 'DeepSeek-V3.2 (Stable)'],
        modelPricing: {
            free: ['DeepSeek-V3.2', 'DeepSeek-R1 (Lite)'],
            paid: ['DeepSeek-V4', 'DeepSeek-R1 (Full)']
        },
        ecosystem: {
            title: { es: 'Open Intelligence', en: 'Open Intelligence' },
            description: { es: 'Ecosistema de código abierto para desarrolladores y empresas.', en: 'Open source ecosystem for developers and enterprises.' },
            apps: [
                { name: 'DeepSeek Coder V4', description: { es: 'Asistente de código con contexto infinito (Local).', en: 'Code assistant with infinite context (Local).' } },
                { name: 'Janus Pro', description: { es: 'Generación y comprensión multimodal avanzada.', en: 'Advanced multimodal generation and understanding.' } },
                { name: 'R1-Zero', description: { es: 'Modelo de razonamiento puro sin RLHF.', en: 'Pure reasoning model without RLHF.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso ilimitado a V3.2', 'DeepSeek-R1 (100 msgs/día)', 'API Gratuita (Tier 1)'], en: ['Unlimited access to V3.2', 'DeepSeek-R1 (100 msgs/day)', 'Free API (Tier 1)'] },
                limits: { es: ['Cola de espera en horas pico'], en: ['Wait queue during peak hours'] }
            },
            plans: [{
                name: 'API',
                priceFormatted: '$0.10/1M',
                priceUsd: 0.10,
                billingPeriod: 'token',
                features: { es: ['El precio más bajo del mercado ($0.10/1M)', 'Contexto Cacheado (Gratis)', 'SLA Empresarial'], en: ['Lowest market price ($0.10/1M)', 'Context Caching (Free)', 'Enterprise SLA'] }
            }]
        },
        tools: [
            { name: 'DeepSeek-R1', description: { es: 'Razonamiento profundo que supera a o1 en matemáticas y código.', en: 'Deep reasoning that surpasses o1 in math and code.' }, purpose: { es: 'Razonamiento', en: 'Reasoning' } },
            { name: 'DeepSeek-V4', description: { es: 'Nuevo modelo insignia. 10x más rápido que V3. Especializado en ingeniería.', en: 'New flagship model. 10x faster than V3. Specialized in engineering.' }, purpose: { es: 'Ingeniería', en: 'Engineering' } },
            { name: 'Janus', description: { es: 'Entendimiento visual y generación de diagramas técnicos.', en: 'Visual understanding and technical diagram generation.' }, purpose: { es: 'Multimodal', en: 'Multimodal' } }
        ],
        strengths: { es: ['Costo casi nulo', 'Rendimiento de Coding (V4)', '100% Open Source'], en: ['Near-zero cost', 'Coding Performance (V4)', '100% Open Source'] },
        limitations: { es: ['Interfaz web básica', 'Menos integraciones "nativas" que OpenAI/Google'], en: ['Basic web interface', 'Fewer "native" integrations than OpenAI/Google'] },
        bestFor: { es: ['Startups / Empresas SaaS', 'Ingenieros de Software', 'Computación Local'], en: ['Startups / SaaS Companies', 'Software Engineers', 'Local Computing'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Crypto', 'Credit Card', 'Alipay'], platforms: ['Web', 'API', 'Local (Ollama)', 'Android'] },
        benchmarks: { spanish: 97, code: 99, creativity: 90, speed: 98, free: 100 }
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        company: 'Perplexity',
        logo: '/images/logos/perplexity.svg',
        websiteUrl: 'https://www.perplexity.ai',
        category: ['search', 'research', 'agent'],
        launchDate: '2022-08-01',
        rating: 4.85,
        totalVotes: 5500,
        userCount: { es: '~150M usuarios mensuales', en: '~150M monthly users' },
        description: {
            es: 'El "Google Killer" consolidado. Ya no solo busca, sino que ejecuta acciones por ti (compras, reservas). Su modelo "Sonar 2" basado en Llama 4 supera a GPT-5 en fact-checking.',
            en: 'The consolidated "Google Killer". No longer just searches, but executes actions for you (shopping, booking). Its "Sonar 2" model based on Llama 4 beats GPT-5 in fact-checking.'
        },
        models: ['Sonar 2 (Huge)', 'Sonar 2 (Small)', 'GPT-5.2 (External)', 'Claude 4.6 (External)'],
        modelPricing: {
            free: ['Sonar 2 Small', 'Standard Search'],
            paid: ['Sonar 2 Huge', 'Opus 4.6', 'GPT-5.2']
        },
        ecosystem: {
            title: { es: 'Perplexity Knowledge OS', en: 'Perplexity Knowledge OS' },
            description: { es: 'Plataforma de conocimiento accionable y verificable.', en: 'Actionable and verifiable knowledge platform.' },
            apps: [
                { name: 'Deep Shopping', description: { es: 'Compra productos directamente sin salir del chat.', en: 'Buy products directly without leaving chat.' } },
                { name: 'Pages 2.0', description: { es: 'Genera artículos tipo Wikipedia con un clic.', en: 'Generate Wikipedia-like articles with one click.' } },
                { name: 'Finance Agent', description: { es: 'Análisis de mercado en tiempo real con datos de Bloomberg.', en: 'Real-time market analysis with Bloomberg data.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Búsquedas ilimitadas', 'Quick Search (Sonar Small)', 'Citas de fuentes'], en: ['Unlimited searches', 'Quick Search (Sonar Small)', 'Source citations'] },
                limits: { es: ['Sin "Deep Shopping"', 'Modelos externos limitados'], en: ['No "Deep Shopping"', 'Limited external models'] }
            },
            plans: [{
                name: 'Pro',
                priceFormatted: '$20 USD',
                priceUsd: 20,
                billingPeriod: 'monthly',
                features: { es: ['Búsquedas Pro ilimitadas', 'Modelos externos (GPT-5/Claude 4)', '$5 créditos de compra/mes'], en: ['Unlimited Pro searches', 'External models (GPT-5/Claude 4)', '$5 monthly shopping credits'] }
            }]
        },
        tools: [
            { name: 'Sonar 2 Huge', description: { es: 'Modelo nativo optimizado para veracidad y mínima alucinación.', en: 'Native model optimized for truthfulness and minimal hallucination.' }, purpose: { es: 'Investigación', en: 'Research' } },
            { name: 'Pro Search', description: { es: 'Agente multi-paso que clarifica tu intención antes de responder.', en: 'Multi-step agent that clarifies your intent before answering.' }, purpose: { es: 'Agente', en: 'Agent' } },
            { name: 'Voice Mode', description: { es: 'Podcast generativo personalizado sobre cualquier tema.', en: 'Custom generative podcast on any topic.' }, purpose: { es: 'Audio', en: 'Audio' } }
        ],
        strengths: { es: ['Cero alucinaciones (casi)', 'Compra directa (Shopping)', 'UI minimalista y veloz'], en: ['Zero hallucinations (almost)', 'Direct purchase (Shopping)', 'Minimalist and fast UI'] },
        limitations: { es: ['Menos creativo que GPT/Claude', 'Depende de fuentes externas'], en: ['Less creative than GPT/Claude', 'Depends on external sources'] },
        bestFor: { es: ['Investigación académica', 'Compras online', 'Noticias verificadas'], en: ['Academic research', 'Online shopping', 'Verified news'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Tarjeta de Crédito', 'Stripe'], platforms: ['Web', 'iOS', 'Android', 'Chrome Extension'] },
        benchmarks: { spanish: 95, code: 90, creativity: 85, speed: 99, free: 96 }
    },
    {
        id: 'kimi',
        name: 'Kimi',
        company: 'Moonshot AI',
        logo: '/images/logos/kimi.svg',
        websiteUrl: 'https://kimi.moonshot.cn',
        category: ['chatbot', 'analysis', 'long-context'],
        launchDate: '2023-10-09',
        rating: 4.7,
        totalVotes: 1200,
        userCount: { es: '~300M usuarios (Líder en Asia)', en: '~300M users (Asia Leader)' },
        description: {
            es: 'El rey de la memoria infinita. Con Kimi k3, procesa bibliotecas enteras (10M+ tokens) sin perder un solo detalle. Es la herramienta definitiva para abogados, investigadores y analistas.',
            en: 'The king of infinite memory. With Kimi k3, processes entire libraries (10M+ tokens) without losing a single detail. The ultimate tool for lawyers, researchers, and analysts.'
        },
        models: ['Kimi k3 (Infinite)', 'Kimi k2.5 (Fast)', 'Kimi-Reasoning (Math)'],
        modelPricing: {
            free: ['Kimi k2.5', 'Standard Context (200k)'],
            paid: ['Kimi k3', 'Contexto Infinito']
        },
        ecosystem: {
            title: { es: 'Moonshot Space', en: 'Moonshot Space' },
            description: { es: 'Entorno de trabajo para "Heavy Reading" y análisis masivo.', en: 'Workspace for "Heavy Reading" and massive analysis.' },
            apps: [
                { name: 'Kimi Scholar', description: { es: 'Lee y correlaciona 500+ papers académicos a la vez.', en: 'Reads and correlates 500+ academic papers at once.' } },
                { name: 'Legal Assistant', description: { es: 'Analiza contratos y jurisprudencia completa en segundos.', en: 'Analyzes contracts and full jurisprudence in seconds.' } },
                { name: 'Kimi FM', description: { es: 'Convierte libros enteros en podcasts de audio interactivos.', en: 'Converts entire books into interactive audio podcasts.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Contexto de 200k tokens', 'Acceso web', 'Sin límite diario (Flexible)'], en: ['200k token context', 'Web access', 'No daily limit (Flexible)'] },
                limits: { es: ['Cola en horas pico', 'Sin acceso a API'], en: ['Queue during peak hours', 'No API access'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '¥60 CNY (~$8)',
                    priceUsd: 8,
                    billingPeriod: 'monthly',
                    features: { es: ['Contexto de 10 Millones', 'Prioridad en cola', 'Acceso a Kimi k3'], en: ['10 Million Context', 'Queue priority', 'Access to Kimi k3'] }
                }
            ]
        },
        tools: [
            { name: 'Kimi k3', description: { es: 'Modelo con "Lossless Context" de 10M tokens. No olvida nada.', en: 'Model with 10M token "Lossless Context". Forgets nothing.' }, purpose: { es: 'Memoria Infinita', en: 'Infinite Memory' } },
            { name: 'Moonshot Search', description: { es: 'Búsqueda profunda que lee las webs resultantes completas.', en: 'Deep search that reads full resulting webs.' }, purpose: { es: 'Investigación', en: 'Research' } },
            { name: 'File Chat', description: { es: 'Sube 100 archivos (PDF, Excel, Code) y chatea con todos a la vez.', en: 'Upload 100 files (PDF, Excel, Code) and chat with all at once.' }, purpose: { es: 'Análisis', en: 'Analysis' } }
        ],
        strengths: { es: ['Contexto realmente utilizable (no se pierde)', 'Precio muy competitivo', 'Manejo de archivos masivos'], en: ['Truly usable context (no loss)', 'Very competitive price', 'Massive file handling'] },
        limitations: { es: ['Enfoque principal en idioma Chino/Inglés', 'Requiere número de teléfono para registro'], en: ['Main focus on Chinese/English', 'Requires phone number for signup'] },
        bestFor: { es: ['Estudiantes de Doctorado', 'Análisis Legal/Financiero', 'Resumen de libros'], en: ['PhD Students', 'Legal/Financial Analysis', 'Book summarization'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['WeChat Pay', 'Alipay', 'Apple Pay'],
            platforms: ['Web', 'iOS', 'Android', 'WeChat Mini-app']
        },
        benchmarks: {
            spanish: 88,
            code: 92,
            creativity: 86,
            speed: 90,
            free: 95
        }
    },
    {
        id: 'qwen',
        name: 'Qwen',
        company: 'Alibaba Cloud',
        logo: '/images/logos/qwen.svg',
        websiteUrl: 'https://chat.qwen.ai',
        category: ['chatbot', 'code', 'vision'],
        launchDate: '2023-08-01',
        rating: 4.8,
        totalVotes: 2500,
        userCount: { es: 'Líder en China y Open Source Global', en: 'China Leader & Global Open Source' },
        description: { es: 'El visionario. Qwen-3 es actualmente el modelo #1 en benchmarks visuales y de matemáticas. Su versión "Qwen-Coder 3" impulsa miles de herramientas de desarrollo autónomo.', en: 'The visionary. Qwen-3 is currently the #1 model in visual and math benchmarks. Its "Qwen-Coder 3" version powers thousands of autonomous dev tools.' },
        models: ['Qwen-3 Max', 'Qwen-Coder 3', 'Qwen-VL-Pro'],
        modelPricing: {
            free: ['Qwen-3 Plus', 'Qwen-Coder 2.5'],
            paid: ['Qwen-3 Max', 'Qwen-VL-Pro']
        },
        ecosystem: {
            title: { es: 'Alibaba AGI', en: 'Alibaba AGI' },
            description: { es: 'Infraestructura masiva para agentes visuales y comercios.', en: 'Massive infrastructure for visual agents and commerce.' },
            apps: [
                { name: 'Tongyi Wanxiang 2', description: { es: 'Generación de diseños de productos 3D a partir de bocetos.', en: 'Generation of 3D product designs from sketches.' } },
                { name: 'Qwen Agent', description: { es: 'Framework para construir agentes que navegan GUIs complejas.', en: 'Framework for building agents that navigate complex GUIs.' } },
                { name: 'AliCode', description: { es: 'IDE en la nube potenciado completamente por Qwen-Coder.', en: 'Cloud IDE completely powered by Qwen-Coder.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso gratuito a Qwen-3 Plus', 'Análisis de imágenes ilimitado'], en: ['Free access to Qwen-3 Plus', 'Unlimited image analysis'] },
                limits: { es: ['Velocidad reducida en tier gratuito'], en: ['Reduced speed in free tier'] }
            },
            plans: [{ name: 'API', priceFormatted: 'Ultra-Low Cost', billingPeriod: 'token', features: { es: ['Precios agresivos ($0.5/1M)', 'Contexto 1M', 'Fine-tuning incluido'], en: ['Aggressive pricing ($0.5/1M)', '1M Context', 'Fine-tuning included'] } }]
        },
        tools: [
            { name: 'Qwen-3 Max', description: { es: 'Modelo frontera que compite con GPT-5 y Claude Opus.', en: 'Frontier model competing with GPT-5 and Claude Opus.' }, purpose: { es: 'General', en: 'General' } },
            { name: 'Qwen-VL-Pro', description: { es: 'Mejor modelo del mundo para entender diagramas y videos.', en: 'World\'s best model for understanding diagrams and videos.' }, purpose: { es: 'Visión', en: 'Vision' } },
            { name: 'Qwen-Coder 3', description: { es: 'Especialista en refactorización y traducción de código legacy.', en: 'Specialist in refactoring and translating legacy code.' }, purpose: { es: 'Coding', en: 'Coding' } }
        ],
        strengths: { es: ['Capacidad visual (VL) sin rival', 'Rendimiento Open Source increíble', 'Ecosistema Cloud robusto'], en: ['Unrivaled visual (VL) capability', 'Incredible Open Source performance', 'Robust Cloud Ecosystem'] },
        limitations: { es: ['UX web puede sentirse utilitaria', 'Foco fuerte en Enterprise'], en: ['Web UX can feel utilitarian', 'Strong Enterprise focus'] },
        bestFor: { es: ['Análisis de Video/Imagen', 'Desarrollo Backend', 'Empresas de E-commerce'], en: ['Video/Image Analysis', 'Backend Development', 'E-commerce Companies'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Alipay', 'Credit Card'], platforms: ['Web', 'API', 'Hugging Face'] },
        benchmarks: { spanish: 91, code: 98, creativity: 89, speed: 96, free: 94 }
    },
    {
        id: 'copilot',
        name: 'Microsoft Copilot',
        company: 'Microsoft',
        logo: '/images/logos/copilot.svg',
        websiteUrl: 'https://copilot.microsoft.com',
        category: ['productivity', 'chatbot', 'image'],
        launchDate: '2023-02-07',
        rating: 4.7,
        totalVotes: 3000,
        userCount: { es: 'Integrado en 2B+ PCs (Windows 12)', en: 'Integrated in 2B+ PCs (Windows 12)' },
        description: { es: 'Tu compañero universal. Ahora parte central de Windows 12 y Office 366. "Copilot Vision" ve tu pantalla y te ayuda a operar cualquier software proactivamente.', en: 'Your universal companion. Now central to Windows 12 and Office 366. "Copilot Vision" sees your screen and helps you proactively operate any software.' },
        models: ['GPT-5.2 (Azure)', 'Copilot Vision 2', 'DALL-E 3'],
        modelPricing: {
            free: ['GPT-4.5', 'Copilot Vision (Lite)'],
            paid: ['GPT-5.2', 'Copilot Vision (Pro)']
        },
        ecosystem: {
            title: { es: 'Microsoft 366', en: 'Microsoft 366' },
            description: { es: 'La suite de productividad autónoma.', en: 'The autonomous productivity suite.' },
            apps: [
                { name: 'Excel Python 2', description: { es: 'Analista de datos autónomo integrado en celdas.', en: 'Autonomous data analyst integrated into cells.' } },
                { name: 'Copilot Pages', description: { es: 'Lienzo colaborativo multijugador AI-first.', en: 'AI-first collaborative multiplayer canvas.' } },
                { name: 'Teams Agent', description: { es: 'Asiste a reuniones por ti y toma decisiones.', en: 'Attends meetings for you and makes decisions.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso a GPT-4.5', 'Generación de imágenes (Designer)', 'Visión de pantalla básica'], en: ['Access to GPT-4.5', 'Image generation (Designer)', 'Basic screen vision'] },
                limits: { es: ['Límites en horas pico', 'Sin integración M365'], en: ['Limits during peak hours', 'No M365 integration'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Integración total en Office 366', 'Prioridad en GPT-5.2', 'Agentes personalizados'], en: ['Full Office 366 integration', 'GPT-5.2 Priority', 'Custom Agents'] }
                }
            ]
        },
        tools: [
            { name: 'Copilot en Word/Excel', description: { es: 'Escribe documentos enteros y modela finanzas complejas solo con voz.', en: 'Writes whole documents and models complex finance with just voice.' }, purpose: { es: 'Productividad', en: 'Productivity' } },
            { name: 'Microsoft Designer', description: { es: 'Generador de assets de marca coherentes.', en: 'Consistent brand asset generator.' }, purpose: { es: 'Diseño/Imagen', en: 'Design/Image' } },
            { name: 'Copilot Studio', description: { es: 'Crea agentes empresariales que se integran con Sharepoint.', en: 'Create enterprise agents that integrate with Sharepoint.' }, purpose: { es: 'Empresarial', en: 'Enterprise' } }
        ],
        strengths: { es: ['Integración insuperable con Windows/Office', 'Seguridad Empresarial', 'Multimodalidad en OS'], en: ['Unbeatable integration with Windows/Office', 'Enterprise Security', 'OS Multimodality'] },
        limitations: { es: ['Puede ser intrusivo en el SO', 'Filtros corporativos estrictos'], en: ['Can be intrusive in OS', 'Strict corporate filters'] },
        bestFor: { es: ['Usuarios de Windows', 'Grandes Corporaciones', 'Estudiantes'], en: ['Windows Users', 'Large Corporations', 'Students'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito', 'Debit Card'],
            platforms: ['Windows 12', 'Web', 'iOS', 'Android', 'VR']
        },
        benchmarks: {
            spanish: 94,
            code: 89,
            creativity: 91,
            speed: 90,
            free: 93
        }
    },
    {
        id: 'grok',
        name: 'Grok',
        company: 'xAI',
        logo: '/images/logos/grok.svg',
        websiteUrl: 'https://x.com/i/grok',
        category: ['chatbot', 'social', 'news'],
        launchDate: '2023-11-04',
        rating: 4.6,
        totalVotes: 4000,
        userCount: { es: 'Parte de X (600M+ Usuarios)', en: 'Part of X (600M+ Users)' },
        description: { es: 'La IA rebelde y sin filtros. Grok-3 tiene acceso en tiempo real a "la verdad" global a través de X. Es el único modelo que te contará lo que otros censuran.', en: 'The rebellious, unfiltered AI. Grok-3 has real-time access to global "truth" via X. The only model that will tell you what others censor.' },
        models: ['Grok-3 (Superintelligence)', 'Grok-2.5', 'Grok-Vision'],
        modelPricing: {
            free: ['Grok-2 Mini (Limited)'],
            paid: ['Grok-3', 'Grok-Vision']
        },
        ecosystem: {
            title: { es: 'X Super App', en: 'X Super App' },
            description: { es: 'El sistema operativo de la civilización.', en: 'The operating system for civilization.' },
            apps: [
                { name: 'Grok News Network', description: { es: 'Noticiero generado en tiempo real basado en tweets verificados.', en: 'Real-time generated news based on verified tweets.' } },
                { name: 'Truth Lens', description: { es: 'Detecta sesgos políticos en artículos de prensa tradicional.', en: 'Detects political bias in mainstream media articles.' } },
                { name: 'X-Pay Agent', description: { es: 'Envía dinero y crypto autonomamente en el chat.', en: 'Sends money and crypto autonomously in chat.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso limitado (Grok-2 Mini)', 'Lectura de noticias'], en: ['Limited access (Grok-2 Mini)', 'Read news'] },
                limits: { es: ['Sin modo "Fun"', 'Límites estrictos de velocidad'], en: ['No "Fun" mode', 'Strict speed limits'] }
            },
            plans: [
                {
                    name: 'Premium+',
                    priceFormatted: '$16 USD',
                    priceUsd: 16,
                    billingPeriod: 'monthly',
                    features: { es: ['Acceso a Grok-3', 'Verificación dorada', 'Ingresos por Ads'], en: ['Access to Grok-3', 'Gold verification', 'Ad revenueshare'] }
                }
            ]
        },
        tools: [
            { name: 'Grok-3', description: { es: 'Modelo de razonamiento masivo entrenado en la supercomputadora Memphis.', en: 'Massive reasoning model trained on the Memphis supercomputer.' }, purpose: { es: 'General/Uncensored', en: 'General/Uncensored' } },
            { name: 'Real-Time Pulse', description: { es: 'Análisis de tendencias globales segundos después de que ocurren.', en: 'Global trend analysis seconds after they happen.' }, purpose: { es: 'Noticias', en: 'News' } },
            { name: 'Flux 2 (Integrated)', description: { es: 'Generación de imágenes hiperrealistas sin guardrails exagerados.', en: 'Hyper-realistic image generation without exaggerated guardrails.' }, purpose: { es: 'Imagen', en: 'Image' } }
        ],
        strengths: { es: ['Acceso a info en tiempo real (X)', 'Menos corrección política (Woke-virus free)', 'Personalidad única'], en: ['Real-time info access (X)', 'Less political correctness (Woke-virus free)', 'Unique personality'] },
        limitations: { es: ['Sesgado hacia la cultura de X/Twitter', 'Puede ser agresivo'], en: ['Biased towards X/Twitter culture', 'Can be aggressive'] },
        bestFor: { es: ['Seguimiento de noticias', 'Debate político', 'Entretenimiento sin censura'], en: ['News tracking', 'Political debate', 'Uncensored entertainment'] },
        availability: {
            restrictedCountries: ['EU (Limited)'],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito', 'Crypto'],
            platforms: ['Web (X.com)', 'iOS', 'Android', 'Tesla Car']
        },
        benchmarks: {
            spanish: 92,
            code: 94,
            creativity: 98,
            speed: 97,
            free: 50
        }
    },
    {
        id: 'v0',
        name: 'v0 by Vercel',
        company: 'Vercel',
        logo: '/images/logos/v0.svg',
        websiteUrl: 'https://v0.dev',
        category: ['code', 'ui-generator', 'frontend'],
        launchDate: '2023-10-01',
        rating: 4.8,
        totalVotes: 1800,
        userCount: { es: 'Estándar en Frontend Dev', en: 'Standard in Frontend Dev' },
        description: { es: 'Tu Ingeniero de Frontend Senior. v0-2 no solo genera componentes, construye Design Systems enteros y micro-frontends listos para producción conectados a tu repo.', en: 'Your Senior Frontend Engineer. v0-2 doesn\'t just generate components, it builds entire Design Systems and production-ready micro-frontends connected to your repo.' },
        models: ['v0-2 (Architect)', 'v0-Mini (Iterative)', 'Claude 3.7 Sonnet (Integrated)'],
        modelPricing: {
            free: ['v0-Mini', 'Generaciones Públicas'],
            paid: ['v0-2', 'Modo Privado']
        },
        ecosystem: {
            title: { es: 'Vercel Ship', en: 'Vercel Ship' },
            description: { es: 'De prompt a producción global en segundos.', en: 'From prompt to global production in seconds.' },
            apps: [
                { name: 'v0 Systems', description: { es: 'Mantiene la consistencia visual de tu marca automáticamente.', en: 'Automatically maintains your brand\'s visual consistency.' } },
                { name: 'Next.js Agent', description: { es: 'Escribe Server Actions y optimiza el rendimiento por ti.', en: 'Writes Server Actions and optimizes performance for you.' } },
                { name: 'Figma to Code 2.0', description: { es: 'Copia perfecta de diseños complejos con animaciones.', en: 'Perfect copy of complex designs with animations.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Generaciones ilimitadas (v0-Mini)', 'Exportación React/HTML'], en: ['Unlimited generations (v0-Mini)', 'React/HTML export'] },
                limits: { es: ['Sin historial de versiones', 'Solo público'], en: ['No version history', 'Public only'] }
            },
            plans: [
                {
                    name: 'Premium',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Acceso a v0-2', 'Proyectos privados', 'Sincronización bidireccional GitHub'], en: ['Access to v0-2', 'Private projects', 'Bi-directional GitHub sync'] }
                }
            ]
        },
        tools: [
            { name: 'v0-2 Architect', description: { es: 'Entiende arquitecturas complejas de Next.js y Tailwind.', en: 'Understands complex Next.js and Tailwind architectures.' }, purpose: { es: 'Frontend', en: 'Frontend' } },
            { name: 'Visual Diff', description: { es: 'Te muestra exactamente qué cambió visualmente antes de aceptar código.', en: 'Shows you exactly what changed visually before accepting code.' }, purpose: { es: 'Review', en: 'Review' } },
            { name: 'Animation Studio', description: { es: 'Genera micro-interacciones y transiciones framer-motion.', en: 'Generates micro-interactions and framer-motion transitions.' }, purpose: { es: 'Animación', en: 'Animation' } }
        ],
        strengths: { es: ['Código de calidad "Humana"', 'Zero-config deploy', 'Estética premium por defecto'], en: ['"Human" quality code', 'Zero-config deploy', 'Premium aesthetics by default'] },
        limitations: { es: ['Atado al ecosistema React/Vercel', 'Curva de aprendizaje para prompts complejos'], en: ['Tied to React/Vercel ecosystem', 'Learning curve for complex prompts'] },
        bestFor: { es: ['Desarrolladores Next.js', 'Agencias de Diseño', 'Startups'], en: ['Next.js Developers', 'Design Agencies', 'Startups'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'VSExtension', 'CLI']
        },
        benchmarks: {
            spanish: 92,
            code: 98,
            creativity: 95,
            speed: 98,
            free: 90
        }
    },
    {
        id: 'bolt',
        name: 'Bolt',
        company: 'StackBlitz',
        logo: '/images/logos/bolt.svg',
        websiteUrl: 'https://bolt.new',
        category: ['code', 'fullstack', 'agent'],
        launchDate: '2023-05-01',
        rating: 4.85,
        totalVotes: 2200,
        userCount: { es: 'Estándar para MVPs', en: 'Standard for MVPs' },
        description: { es: 'El orquestador Full-Stack. Mientras v0 diseña, Bolt construye el backend, la base de datos y la autenticación. Ahora con "Universal Containers", corre Python, Go y Rust nativamente en el navegador.', en: 'The Full-Stack orchestrator. While v0 designs, Bolt builds the backend, database, and authentication. Now with "Universal Containers", runs Python, Go, and Rust natively in the browser.' },
        models: ['Bolt v3 (Orchestrator)', 'Claude 3.7 Sonnet', 'Gemini 3.0 Pro'],
        modelPricing: {
            free: ['Bolt v2 (Lite)', 'Modelos Estándar'],
            paid: ['Bolt v3 (Pro)', 'Modelos Frontera']
        },
        ecosystem: {
            title: { es: 'Bolt Cloud', en: 'Bolt Cloud' },
            description: { es: 'Despliegue instantáneo a cualquier nube sin configuración.', en: 'Instant deploy to any cloud with zero config.' },
            apps: [
                { name: 'Universal Containers', description: { es: 'Ejecuta backends complejos (Django, Spring, Rails) en el navegador.', en: 'Runs complex backends (Django, Spring, Rails) in the browser.' } },
                { name: 'Database Studio', description: { es: 'Gestiona Postgres/Redis/Mongo visualmente y con IA.', en: 'Manage Postgres/Redis/Mongo visually and with AI.' } },
                { name: 'Deploy-to-Anywhere', description: { es: 'Publica en AWS, Azure o GCP con un click real.', en: 'Publish to AWS, Azure, or GCP with one real click.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Proyectos públicos ilimitados', 'Containers web básicos'], en: ['Unlimited public projects', 'Basic web containers'] },
                limits: { es: ['Sin persistencia de DB', 'Hibernación rápida'], en: ['No DB persistence', 'Fast hibernation'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$18 USD',
                    priceUsd: 18,
                    billingPeriod: 'monthly',
                    features: { es: ['Persistencia total', 'Containers Universal', 'Dominios personalizados'], en: ['Full persistence', 'Universal Containers', 'Custom domains'] }
                }
            ]
        },
        tools: [
            { name: 'Bolt Orchestrator', description: { es: 'Entiende cómo conectar frontend y backend sin errores de CORS.', en: 'Understands how to connect frontend and backend without CORS errors.' }, purpose: { es: 'Fullstack', en: 'Fullstack' } },
            { name: 'Bug Hunter', description: { es: 'Agente que reproduce errores en tu app y propone fixes.', en: 'Agent that reproduces errors in your app and proposes fixes.' }, purpose: { es: 'Debugging', en: 'Debugging' } },
            { name: 'Migration Assistant', description: { es: 'Mueve proyectos legacy a stacks modernos automáticamente.', en: 'Moves legacy projects to modern stacks automatically.' }, purpose: { es: 'Migración', en: 'Migration' } }
        ],
        strengths: { es: ['Manejo de estados complejos', 'Entorno de desarrollo completo (IDE)', 'Magia en el backend'], en: ['Complex state handling', 'Full development environment (IDE)', 'Backend magic'] },
        limitations: { es: ['Consumo alto de recursos del navegador', 'Menos estético que v0'], en: ['High browser resource consumption', 'Less aesthetic than v0'] },
        bestFor: { es: ['Startups (MVP completo)', 'Desarrolladores Backend/Fullstack', 'Hackathons'], en: ['Startups (Full MVP)', 'Backend/Fullstack Developers', 'Hackathons'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'PWA']
        },
        benchmarks: {
            spanish: 90,
            code: 96,
            creativity: 88,
            speed: 93,
            free: 91
        }
    },
    {
        id: 'lovable',
        name: 'Lovable',
        company: 'Lovable',
        logo: '/images/logos/lovable.svg',
        websiteUrl: 'https://lovable.dev',
        category: ['code', 'fullstack', 'nocode-like'],
        launchDate: '2024-10-01',
        rating: 4.9,
        totalVotes: 3500,
        userCount: { es: 'La favorita de los fundadores', en: 'Founders favorite' },
        description: { es: 'La magia del No-Code real. Lovable-X no se siente como programar, se siente como pedir deseos. Describe una idea y Lovable genera la app, la base de datos y la lanza al mundo en minutos.', en: 'Real No-Code magic. Lovable-X doesn\'t feel like coding, it feels like wishing. Describe an idea and Lovable generates the app, the database, and launches it to the world in minutes.' },
        models: ['Lovable-X (Magician)', 'GPT-5 (Integrated)', 'Claude 3.7 (Integrated)'],
        modelPricing: {
            free: ['Lovable-Lite', '5 deseos diarios'],
            paid: ['Lovable-X', 'Deseos ilimitados']
        },
        ecosystem: {
            title: { es: 'Lovable Cloud', en: 'Lovable Cloud' },
            description: { es: 'Infraestructura invisible y auto-gestionada.', en: 'Invisible and self-managed infrastructure.' },
            apps: [
                { name: 'Auto-Backend', description: { es: 'Crea y gestiona tablas en Supabase sin que veas una sola línea de SQL.', en: 'Creates and manages Supabase tables without you seeing a single line of SQL.' } },
                { name: 'One-Click App Store', description: { es: 'Convierte tu proyecto en una app nativa de iOS/Android y la envía a revisión.', en: 'Turns your project into a native iOS/Android app and submits it for review.' } },
                { name: 'Magic Integrations', description: { es: 'Conecta Stripe, Gmail y Slack con lenguaje natural.', en: 'Connects Stripe, Gmail, and Slack with natural language.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Proyectos públicos', '5 créditos diarios', 'Deploy instantáneo'], en: ['Public projects', '5 daily credits', 'Instant deploy'] },
                limits: { es: ['Marca de agua Lovable', 'Límites estrictos'], en: ['Lovable watermark', 'Strict limits'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Proyectos privados', 'Exportación de código', 'Integración GitHub'], en: ['Private projects', 'Code export', 'GitHub integration'] }
                }
            ]
        },
        tools: [
            { name: 'Lovable-X', description: { es: 'El modelo que entiende "intención de producto" mejor que cualquier humano.', en: 'The model that understands "product intent" better than any human.' }, purpose: { es: 'Producto', en: 'Product' } },
            { name: 'Visual Editor 2.0', description: { es: 'Edita cualquier texto, imagen o color haciendo clic en la pantalla final.', en: 'Edit any text, image, or color by clicking on the final screen.' }, purpose: { es: 'Edición Visual', en: 'Visual Editing' } },
            { name: 'Growth Agent', description: { es: 'Sugiere mejoras de UX basadas en cómo los usuarios usan tu app.', en: 'Suggests UX improvements based on how users use your app.' }, purpose: { es: 'Growth', en: 'Growth' } }
        ],
        strengths: { es: ['Velocidad increíble (Idea -> App)', 'UX muy pulida', 'Integración Supabase invisible'], en: ['Incredible speed (Idea -> App)', 'Polished UX', 'Invisible Supabase integration'] },
        limitations: { es: ['Menos control fino del código', 'Dependencia de integraciones'], en: ['Less fine code control', 'Dependency on integrations'] },
        bestFor: { es: ['Fundadores no técnicos', 'Validación de ideas', 'Internal tools'], en: ['Non-technical founders', 'Idea validation', 'Internal tools'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'iOS', 'Android']
        },
        benchmarks: {
            spanish: 94,
            code: 95,
            creativity: 97,
            speed: 99,
            free: 85
        }
    },
    {
        id: 'cursor',
        name: 'Cursor',
        company: 'Anysphere',
        logo: '/images/logos/cursor.svg',
        websiteUrl: 'https://cursor.com',
        category: ['code', 'editor', 'agent'],
        launchDate: '2023-01-01',
        rating: 4.95,
        totalVotes: 5000,
        userCount: { es: 'El editor #1 del mundo', en: '#1 Editor in the World' },
        description: { es: 'El editor que mató a VS Code. "Shadow Workspace" ejecuta tu código en segundo plano constantemente para predecir bugs antes de que guardes. Su "Composer" escribe features enteras a través de múltiples archivos con una precisión quirúrgica.', en: 'The editor that killed VS Code. "Shadow Workspace" runs your code in the background constantly to predict bugs before you save. Its "Composer" writes entire features across multiple files with surgical precision.' },
        models: ['Cursor-Small (Local)', 'Claude 3.7 Sonnet', 'GPT-5'],
        modelPricing: {
            free: ['Cursor-Small', '200 fast calls'],
            paid: ['Unlimited Fast Bills', 'Shadow Workspace']
        },
        ecosystem: {
            title: { es: 'Cursor Marketplace', en: 'Cursor Marketplace' },
            description: { es: 'Reglas y agentes creados por la comunidad.', en: 'Rules and agents created by the community.' },
            apps: [
                { name: 'Shadow Workspace', description: { es: 'Simulación en tiempo real de tu código sin bloquearte.', en: 'Real-time simulation of your code without blocking you.' } },
                { name: 'Cursor Rules', description: { es: 'Marketplace de "instrucciones maestras" para frameworks específicos.', en: 'Marketplace of "master instructions" for specific frameworks.' } },
                { name: 'Instant Documentation', description: { es: 'Indexa docs de librerías privadas en segundos.', en: 'Indexes private library docs in seconds.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Funciones básicas de IA', 'Composer limitado'], en: ['Basic AI features', 'Limited Composer'] },
                limits: { es: ['Sin Shadow Workspace', 'Límite de requests pro'], en: ['No Shadow Workspace', 'Pro request limit'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Shadow Workspace', 'Requests ilimitados', 'Modo privacidad'], en: ['Shadow Workspace', 'Unlimited requests', 'Privacy mode'] }
                }
            ]
        },
        tools: [
            { name: 'Composer', description: { es: 'Editor multi-archivo que entiende la arquitectura completa de tu proyecto.', en: 'Multi-file editor that understands your project\'s full architecture.' }, purpose: { es: 'Coding', en: 'Coding' } },
            { name: 'Tab-Complete Pro', description: { es: 'Predicción de código que a veces parece leer tu mente.', en: 'Code prediction that sometimes feels like mind reading.' }, purpose: { es: 'Productividad', en: 'Productivity' } },
            { name: 'Chat with Codebase', description: { es: 'Pregunta "¿dónde se define X?" y obtén la respuesta exacta.', en: 'Ask "where is X defined?" and get the exact answer.' }, purpose: { es: 'Búsqueda', en: 'Search' } }
        ],
        strengths: { es: ['La mejor experiencia de desarrollador (DX)', 'Predicción increíble', 'Se siente nativo'], en: ['Best Developer Experience (DX)', 'Incredible prediction', 'Feels native'] },
        limitations: { es: ['Requiere instalación local', 'Consumo de recursos'], en: ['Requires local installation', 'Resource consumption'] },
        bestFor: { es: ['Desarrolladores Profesionales', 'Fullstack', 'Cualquiera que use VS Code'], en: ['Professional Developers', 'Fullstack', 'Anyone using VS Code'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Mac', 'Windows', 'Linux']
        },
        benchmarks: {
            spanish: 95,
            code: 99,
            creativity: 90,
            speed: 99,
            free: 92
        }
    },
    {
        id: 'windsurf',
        name: 'Windsurf',
        company: 'Codeium',
        logo: '/images/logos/windsurf.svg',
        websiteUrl: 'https://codeium.com/windsurf',
        category: ['code', 'editor', 'agent'],
        launchDate: '2024-11-01',
        rating: 4.88,
        totalVotes: 1500,
        userCount: { es: 'Crecimiento viral', en: 'Viral growth' },
        description: { es: 'El editor del "Flow". Windsurf se diferencia por su "Cascade Flow", una comprensión profunda no solo del código, sino de tus acciones recientes en la terminal y el navegador. Siente que trabaja contigo, no para ti.', en: 'The "Flow" editor. Windsurf stands out for its "Cascade Flow", a deep understanding not just of code, but of your recent terminal and browser actions. Feels like it works with you, not for you.' },
        models: ['Cascade (Context-Aware)', 'Claude 3.7 Sonnet', 'GPT-4o'],
        modelPricing: {
            free: ['Cascade Lite', 'Modelos base'],
            paid: ['Cascade Pro', 'Modelos Premium']
        },
        ecosystem: {
            title: { es: 'Codeium Engine', en: 'Codeium Engine' },
            description: { es: 'Inteligencia propietaria entrenada en billones de líneas.', en: 'Proprietary intelligence trained on billions of lines.' },
            apps: [
                { name: 'Cascade Flow', description: { es: 'Anticipa tu siguiente paso basándose en tu historial de comandos.', en: 'Anticipates your next step based on command history.' } },
                { name: 'Supercomplete', description: { es: 'Autocompletado que predice bloques lógicos enteros, no solo líneas.', en: 'Autocomplete that predicts entire logical blocks, not just lines.' } },
                { name: 'Terminal Awareness', description: { es: 'Lee tus errores de compilación y los arregla antes de que preguntes.', en: 'Reads your compilation errors and fixes them before you ask.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Gratis para individuos', 'Cascade básico'], en: ['Free for individuals', 'Basic Cascade'] },
                limits: { es: ['Menos contexto', 'Funciones de equipo limitadas'], en: ['Less context', 'Limited team features'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$15 USD',
                    priceUsd: 15,
                    billingPeriod: 'monthly',
                    features: { es: ['Cascade Pro', 'Contexto profundo', 'Soporte Enterprise'], en: ['Cascade Pro', 'Deep context', 'Enterprise support'] }
                }
            ]
        },
        tools: [
            { name: 'Cascade', description: { es: 'Agente que fluye entre código, terminal y comandos.', en: 'Agent that flows between code, terminal, and commands.' }, purpose: { es: 'Flow', en: 'Flow' } },
            { name: 'Context Locking', description: { es: 'Fija archivos específicos en la memoria del modelo manualmente.', en: 'Manually pin specific files to model memory.' }, purpose: { es: 'Control', en: 'Control' } }
        ],
        strengths: { es: ['Conciencia de contexto superior', 'Integración Terminal-Editor sin costuras', 'Precio competitivo'], en: ['Superior context awareness', 'Seamless Terminal-Editor integration', 'Competitive pricing'] },
        limitations: { es: ['Menos extensiones que VS Code nativo', 'Comunidad más pequeña que Cursor'], en: ['Fewer extensions than native VS Code', 'Smaller community than Cursor'] },
        bestFor: { es: ['DevOps', 'Desarrolladores que viven en la terminal', 'Usuarios de Linux'], en: ['DevOps', 'Developers living in terminal', 'Linux Users'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Mac', 'Windows', 'Linux']
        },
        benchmarks: {
            spanish: 93,
            code: 97,
            creativity: 89,
            speed: 98,
            free: 95
        }
    },
    {
        id: 'replit',
        name: 'Replit',
        company: 'Replit',
        logo: '/images/logos/replit.svg',
        websiteUrl: 'https://replit.com',
        category: ['code', 'fullstack', 'cloud'],
        launchDate: '2016-01-01',
        rating: 4.8,
        totalVotes: 6000,
        userCount: { es: '30M+ Constructores', en: '30M+ Builders' },
        description: { es: 'La fábrica de unicornios unipersonales. Su "Replit Agent" te lleva de "idea en una servilleta" a "SaaS desplegado" en 10 minutos. Todo vive en la nube, colaborativo y listo para escalar.', en: 'The one-person unicorn factory. Its "Replit Agent" takes you from "napkin idea" to "deployed SaaS" in 10 minutes. Everything lives in the cloud, collaborative and ready to scale.' },
        models: ['Replit Agent (Planner)', 'Replit Code V2', 'GPT-5'],
        modelPricing: {
            free: ['Replit Code', 'Modelos básicos'],
            paid: ['Replit Agent', 'Modelos Avanzados']
        },
        ecosystem: {
            title: { es: 'Replit Core', en: 'Replit Core' },
            description: { es: 'Computación, base de datos y autenticación en una sola plataforma.', en: 'Compute, database, and auth in a single platform.' },
            apps: [
                { name: 'Replit Deploy', description: { es: 'Escala tu app automáticamente sin tocar AWS.', en: 'Automatically scales your app without touching AWS.' } },
                { name: 'Replit DB', description: { es: 'Base de datos clave-valor integrada en cada repl.', en: 'Key-value database integrated into every repl.' } },
                { name: 'Bounties', description: { es: 'Contrata a otros usuarios de Replit para completar tareas con Replit Gold.', en: 'Hire other Replit users to complete tasks with Replit Gold.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Proyectos públicos', 'Máquinas virtuales básicas', 'Colaboración'], en: ['Public projects', 'Basic VMs', 'Collaboration'] },
                limits: { es: ['Lenta en proyectos grandes', 'Sin Agent'], en: ['Slow on large projects', 'No Agent'] }
            },
            plans: [
                {
                    name: 'Core',
                    priceFormatted: '$15 USD',
                    priceUsd: 15,
                    billingPeriod: 'monthly',
                    features: { es: ['Acceso a Replit Agent', 'Máquinas rápidas', 'Proyectos privados'], en: ['Access to Replit Agent', 'Fast machines', 'Private projects'] }
                }
            ]
        },
        tools: [
            { name: 'Replit Agent', description: { es: 'Planifica, escribe, depura y despliega software autónomamente.', en: 'Plans, writes, debugs, and deploys software autonomously.' }, purpose: { es: 'Construcción', en: 'Building' } },
            { name: 'Mobile App', description: { es: 'Programa desde tu teléfono con una UX sorprendentemente buena.', en: 'Code from your phone with surprisingly good UX.' }, purpose: { es: 'Móvil', en: 'Mobile' } }
        ],
        strengths: { es: ['Cero configuración (Cloud)', 'El mejor Agente constructor hoy', 'Despliegue trivial'], en: ['Zero config (Cloud)', 'Best Builder Agent currently', 'Trivial deploy'] },
        limitations: { es: ['Atado a su plataforma (Vendor Lock-in)', 'Costoso para escalar mucho'], en: ['Tied to platform (Vendor Lock-in)', 'Expensive to scale heavily'] },
        bestFor: { es: ['Hackathons', 'Prototipado rápido', 'Educación'], en: ['Hackathons', 'Rapid Prototyping', 'Education'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'iOS', 'Android']
        },
        benchmarks: {
            spanish: 90,
            code: 94,
            creativity: 96,
            speed: 95,
            free: 94
        }
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        company: 'Midjourney',
        logo: '/images/logos/midjourney.svg',
        websiteUrl: 'https://midjourney.com',
        category: ['image', 'video', 'design'],
        launchDate: '2022-07-12',
        rating: 4.95,
        totalVotes: 10000,
        userCount: { es: 'La referencia visual', en: 'The visual benchmark' },
        description: { es: 'El motor de imaginación #1. En 2026, ya no es solo Discord. Su suite web permite "World Building" consistente, edición 3D de escenas y generación de video cinematográfico con control de cámara total.', en: 'The #1 imagination engine. In 2026, it\'s no longer just Discord. Its web suite allows consistent "World Building", 3D scene editing, and cinematic video generation with full camera control.' },
        models: ['Model v7 (Photoreal)', 'Niji v7 (Anime)', 'Midjourney Video'],
        modelPricing: {
            free: ['Trial limitado'],
            paid: ['Todos los modelos']
        },
        ecosystem: {
            title: { es: 'Midjourney Worlds', en: 'Midjourney Worlds' },
            description: { es: 'Creación de entornos 3D y personajes consistentes.', en: 'Creation of 3D environments and consistent characters.' },
            apps: [
                { name: 'Character Reference', description: { es: 'Mantén la misma cara y ropa en mil imágenes distintas.', en: 'Keep the same face and clothes across a thousand images.' } },
                { name: 'Style Tuner', description: { es: 'Crea y comparte tu propio "lenguaje visual".', en: 'Create and share your own "visual language".' } },
                { name: 'Story Board', description: { es: 'Genera secuencias coherentes para cine y cómics.', en: 'Generates consistent sequences for film and comics.' } }
            ]
        },
        pricing: {
            free: {
                available: false,
                features: { es: [], en: [] },
                limits: { es: ['Solo trials ocasionales'], en: ['Only occasional trials'] }
            },
            plans: [
                {
                    name: 'Standard',
                    priceFormatted: '$30 USD',
                    priceUsd: 30,
                    billingPeriod: 'monthly',
                    features: { es: ['Generaciones rápidas ilimitadas', 'Acceso web completo', 'Modo Stealth'], en: ['Unlimited fast generations', 'Full web access', 'Stealth mode'] }
                }
            ]
        },
        tools: [
            { name: 'Editor Web', description: { es: 'Inpainting, Outpainting y Panorámicas con pincel.', en: 'Inpainting, Outpainting, and Panoramas with brush.' }, purpose: { es: 'Edición', en: 'Editing' } },
            { name: 'Describe', description: { es: 'Sube una foto y obtén el prompt exacto para recrearla.', en: 'Upload a photo and get the exact prompt to recreate it.' }, purpose: { es: 'Ingeniería Inversa', en: 'Reverse Engineering' } }
        ],
        strengths: { es: ['Estética inigualable', 'Consistencia de personajes', 'La mejor comunidad artística'], en: ['Unmatched aesthetics', 'Character consistency', 'Best artistic community'] },
        limitations: { es: ['Censura estricta en ciertos temas', 'Curva de aprendizaje del prompt'], en: ['Strict censorship on certain topics', 'Prompt learning curve'] },
        bestFor: { es: ['Artistas Digitales', 'Cineastas', 'Diseñadores de juegos'], en: ['Digital Artists', 'Filmmakers', 'Game Designers'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'Discord']
        },
        benchmarks: {
            spanish: 90,
            code: 10,
            creativity: 100,
            speed: 85,
            free: 0
        }
    }
];