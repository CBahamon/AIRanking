import type { IAData } from './types';


export const ias: IAData[] = [
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
        category: ['chatbot', 'code', 'analysis'],
        launchDate: '2023-03-14',
        rating: 4.9,
        totalVotes: 920,
        userCount: { es: '~20M usuarios mensuales', en: '~20M monthly users' },
        description: {
            es: 'Favorito de los desarrolladores por "Artifacts" y su capacidad de codificación. Destaca por una redacción más humana y menos robótica.',
            en: 'Developer favorite for "Artifacts" and coding capability. Stands out for more human-like, less robotic writing.'
        },
        models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku', 'Claude 3 Opus'],
        pricing: {
            free: {
                available: true,
                features: {
                    es: ['Acceso a Claude 3.5 Sonnet', 'Uso de Artifacts', 'Ventana de contexto grande'],
                    en: ['Access to Claude 3.5 Sonnet', 'Use of Artifacts', 'Large context window']
                },
                limits: {
                    es: ['Límites diarios muy estrictos', 'Menor prioridad'],
                    en: ['Very strict daily limits', 'Lower priority']
                }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: {
                        es: ['5x más uso que gratis', 'Proyectos (Knowledge bases)', 'Previsualización de Artifacts'],
                        en: ['5x more usage than free', 'Projects (Knowledge bases)', 'Artifacts preview']
                    }
                }
            ]
        },
        tools: [
            {
                name: 'Claude 3.5 Sonnet',
                description: { es: 'El equilibrio perfecto entre inteligencia y velocidad. Líder actual en programación.', en: 'Perfect balance of intelligence and speed. Current leader in coding.' },
                purpose: { es: 'Coding/General', en: 'Coding/General' }
            },
            {
                name: 'Artifacts',
                description: { es: 'Ventana interactiva para visualizar código y documentos en tiempo real.', en: 'Interactive window to visualize code and documents in real-time.' },
                purpose: { es: 'UI/Visualización', en: 'UI/Visualization' }
            }
        ],
        strengths: {
            es: ['El mejor para programar', 'Redacción muy humana', 'Artifacts revoluciona la UI'],
            en: ['Best for coding', 'Very human writing', 'Artifacts revolutionizes UI']
        },
        limitations: {
            es: ['Límites de mensajes estrictos', 'Sin generación de imágenes nativa'],
            en: ['Strict message limits', 'No native image generation']
        },
        bestFor: {
            es: ['Programadores', 'Escritores creativos', 'Análisis de documentos'],
            en: ['Programmers', 'Creative writers', 'Document analysis']
        },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web', 'iOS', 'Android', 'Desktop App']
        },
        benchmarks: {
            spanish: 94,
            code: 99,
            creativity: 97,
            speed: 92,
            free: 85
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
        rating: 4.7,
        totalVotes: 750,
        userCount: { es: '~650M usuarios activos', en: '~650M active users' },
        description: {
            es: 'La potencia de Google. Ventana de contexto masiva (2M tokens) y multimodalidad nativa. Ideal para el ecosistema Google.',
            en: 'Google\'s powerhouse. Massive context window (2M tokens) and native multimodality. Ideal for the Google ecosystem.'
        },
        models: ['Gemini 1.5 Pro', 'Gemini 1.5 Flash', 'Gemini 2.0 Flash (Preview)', 'Imagen 3'],
        modelPricing: {
            free: ['Gemini 1.5 Flash', 'Gemini 2.0 Flash (Preview)'],
            paid: ['Gemini 1.5 Pro (2M context)', 'Gemini Advanced']
        },
        ecosystem: {
            title: { es: 'Universo Gemini', en: 'Gemini Universe' },
            description: { es: 'Una suite completa integrada en tus apps diarias.', en: 'A complete suite integrated into your daily apps.' },
            apps: [
                { name: 'Gemini Workspace', description: { es: 'Integración directa en Docs, Gmail, Drive.', en: 'Direct integration in Docs, Gmail, Drive.' } },
                { name: 'Android System', description: { es: 'Asistente nativo en Android.', en: 'Native assistant on Android.' } },
                { name: 'AI Studio', description: { es: 'Plataforma para desarrolladores.', en: 'Developer platform.' } }
            ]
        },
        pricing: {
            free: {
                available: true,
                features: { es: ['Gemini 1.5 Flash', 'Generación de imágenes (Imagen 3)', 'Respuestas rápidas'], en: ['Gemini 1.5 Flash', 'Image generation (Imagen 3)', 'Fast responses'] },
                limits: { es: ['Modelo menos potente para razonamiento complejo'], en: ['Less powerful model for complex reasoning'] }
            },
            plans: [
                {
                    name: 'Advanced',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Gemini 1.5 Pro (1M+ contexto)', '2TB de almacenamiento', 'Integración en Docs/Gmail'], en: ['Gemini 1.5 Pro (1M+ context)', '2TB storage', 'Docs/Gmail integration'] }
                }
            ]
        },
        tools: [
            { name: 'Gemini 1.5 Pro', description: { es: 'Modelo con ventana de contexto de 2 millones de tokens.', en: 'Model with 2 million token context window.' }, purpose: { es: 'Contexto Largo', en: 'Long Context' } },
            { name: 'Imagen 3', description: { es: 'Generador de imágenes de alta fidelidad.', en: 'High fidelity image generator.' }, purpose: { es: 'Imagen', en: 'Image' } }
        ],
        strengths: { es: ['Ventana de contexto masiva', 'Integración Google', 'Multimodalidad nativa'], en: ['Masive context window', 'Google integration', 'Native multimodality'] },
        limitations: { es: ['Filtros de seguridad excesivos', 'UI lenta con contextos grandes'], en: ['Excessive safety filters', 'Slow UI with large contexts'] },
        bestFor: { es: ['Usuarios Google Workspace', 'Análisis de libros/videos largos'], en: ['Google Workspace users', 'Analysis of long books/videos'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Tarjeta de Crédito', 'Debit Card'], platforms: ['Web', 'iOS', 'Android'] },
        benchmarks: { spanish: 95, code: 90, creativity: 89, speed: 96, free: 94 }
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        company: 'DeepSeek',
        logo: '/images/logos/deepseek.svg',
        websiteUrl: 'https://chat.deepseek.com',
        category: ['chatbot', 'code', 'math'],
        launchDate: '2023-11-01',
        rating: 4.8,
        totalVotes: 600,
        userCount: { es: '~100M usuarios mensuales', en: '~100M monthly users' },
        description: {
            es: 'La revelación Open Source de China. Modelos de "razonamiento" (R1) que compiten con o1 gratis o a bajo costo.',
            en: 'China\'s Open Source revelation. "Reasoning" models (R1) that compete with o1 for free or at low cost.'
        },
        models: ['DeepSeek-V3', 'DeepSeek-R1 (Reasoning)'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso ilimitado a V3 y R1', 'Uso de herramientas de búsqueda'], en: ['Unlimited access to V3 and R1', 'Use of search tools'] },
                limits: { es: ['Servidores frecuentemente saturados'], en: ['Servers frequently busy'] }
            },
            plans: [{
                name: 'API',
                priceFormatted: 'Pago por uso',
                billingPeriod: 'token',
                features: { es: ['Precios disruptivos ($0.55/1M tokens)', 'Cache de contexto'], en: ['Disruptive pricing ($0.55/1M tokens)', 'Context caching'] }
            }]
        },
        tools: [
            { name: 'DeepSeek-R1', description: { es: 'Modelo de razonamiento que "piensa" antes de responder.', en: 'Reasoning model that "thinks" before answering.' }, purpose: { es: 'Razonamiento', en: 'Reasoning' } },
            { name: 'DeepSeek-V3', description: { es: 'Modelo chat general, eficiente y económico.', en: 'General chat model, efficient and economical.' }, purpose: { es: 'General', en: 'General' } }
        ],
        strengths: { es: ['Relación Calidad/Gratuidad imbatible', 'Capacidad de razonamiento R1', 'Open Source'], en: ['Unbeatable Quality/Free ratio', 'R1 reasoning capability', 'Open Source'] },
        limitations: { es: ['Disponibilidad inestable', 'Privacidad/Origen (China)'], en: ['Unstable availability', 'Privacy/Origin (China)'] },
        bestFor: { es: ['Desarrolladores', 'Estudiantes', 'Ahorro de costos API'], en: ['Developers', 'Students', 'API cost saving'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Tarjeta de Crédito'], platforms: ['Web', 'iOS', 'Android', 'API'] },
        benchmarks: { spanish: 91, code: 98, creativity: 85, speed: 88, free: 99 }
    },
    {
        id: 'perplexity',
        name: 'Perplexity',
        company: 'Perplexity AI',
        logo: '/images/logos/perplexity.svg',
        websiteUrl: 'https://www.perplexity.ai',
        category: ['search', 'research', 'chatbot'],
        launchDate: '2022-08-01',
        rating: 4.8,
        totalVotes: 550,
        userCount: { es: '~45M usuarios mensuales', en: '~45M monthly users' },
        description: { es: 'El reemplazo de Google. Un motor de respuestas que cita fuentes en tiempo real.', en: 'The Google replacement. An answer engine that cites sources in real-time.' },
        models: ['Sonar', 'GPT-4o', 'Claude 3.5'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Búsquedas ilimitadas (Quick)', 'Búsquedas Pro limitadas'], en: ['Unlimited Quick searches', 'Limited Pro searches'] },
                limits: { es: ['Menos profundidad', 'Sin elección de modelo'], en: ['Less depth', 'No model choice'] }
            },
            plans: [{ name: 'Pro', priceFormatted: '$20 USD', priceUsd: 20, billingPeriod: 'monthly', features: { es: ['Búsquedas Pro diarias', 'Elección de modelo', 'Upload archivos'], en: ['Daily Pro searches', 'Model choice', 'File upload'] } }]
        },
        strengths: { es: ['Citas y fuentes reales', 'Acceso a múltiples modelos'], en: ['Real citations and sources', 'Access to multiple models'] },
        limitations: { es: ['Menos capaz para escritura creativa', 'Depende de resultados de búsqueda'], en: ['Less capable for creative writing', 'Depends on search results'] },
        bestFor: { es: ['Investigación', 'Fact-checking'], en: ['Research', 'Fact-checking'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Tarjeta de Crédito'], platforms: ['Web', 'iOS', 'Android', 'Chrome'] },
        benchmarks: { spanish: 93, code: 88, creativity: 80, speed: 97, free: 95 }
    },
    {
        id: 'kimi',
        name: 'Kimi',
        company: 'Moonshot AI',
        logo: '/images/logos/kimi.svg',
        websiteUrl: 'https://kimi.moonshot.cn',
        category: ['chatbot', 'analysis', 'long-context'],
        launchDate: '2023-10-09',
        rating: 4.5,
        totalVotes: 150,
        userCount: { es: 'Popular en China', en: 'Popular in China' },
        description: {
            es: 'Pionero en ventanas de contexto masivas ("Lossless Long Context"). Excelente para analizar cientos de documentos o libros a la vez.',
            en: 'pioneer in massive context windows ("Lossless Long Context"). Excellent for analyzing hundreds of documents or books at once.'
        },
        models: ['Kimi k1', 'Kimi k2', 'Kimi k2.5', 'Kimi-Thinking'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso web gratuito', 'Contexto largo (limitado)'], en: ['Free web access', 'Long context (limited)'] },
                limits: { es: ['Requiere número de teléfono (a veces CN)'], en: ['Requires phone number (sometimes CN)'] }
            },
            plans: [
                {
                    name: 'API',
                    priceFormatted: 'Pago por uso',
                    billingPeriod: 'token',
                    features: { es: ['Contexto de 2M+ tokens', 'Caching de contexto barato'], en: ['2M+ token context', 'Cheap context caching'] }
                }
            ]
        },
        tools: [
            { name: 'Kimi k2.5', description: { es: 'Modelo principal con balance de velocidad e inteligencia.', en: 'Main model balanced for speed and intelligence.' }, purpose: { es: 'General', en: 'General' } },
            { name: 'Kimi-Thinking', description: { es: 'Modelo de razonamiento avanzado para tareas complejas.', en: 'Advanced reasoning model for complex tasks.' }, purpose: { es: 'Razonamiento', en: 'Reasoning' } }
        ],
        strengths: { es: ['Manejo de contextos extremadamente largos', 'Excelente relación precio/rendimiento', 'Capacidad de razonamiento'], en: ['Extremely long context handling', 'Excellent price/performance', 'Reasoning capability'] },
        limitations: { es: ['Enfoque principal en chino', 'Barrera de entrada (login/phone)'], en: ['Mainly focused on Chinese', 'Entry barrier (login/phone)'] },
        bestFor: { es: ['Análisis masivo de documentos', 'Lectura de libros completos', 'Usuarios avanzados'], en: ['Massive document analysis', 'Full book reading', 'Advanced users'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['WeChat Pay', 'Alipay'],
            platforms: ['Web', 'App (CN)']
        },
        benchmarks: {
            spanish: 85,
            code: 90,
            creativity: 84,
            speed: 89,
            free: 88
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
        rating: 4.6,
        totalVotes: 200,
        userCount: { es: 'Millones (Líder en China)', en: 'Millions (China Leader)' },
        description: { es: 'La potencia de Alibaba. Modelos multimodales y ventanas de contexto gigantes.', en: 'Alibaba\'s powerhouse. Multimodal models and giant context windows.' },
        models: ['Qwen-Max', 'Qwen-Plus', 'Qwen-Coder'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso gratuito a Qwen chat', 'Qwen-Max limitado'], en: ['Free access to Qwen chat', 'Limited Qwen-Max'] },
                limits: { es: ['Disponibilidad variable'], en: ['Variable availability'] }
            },
            plans: [{ name: 'API', priceFormatted: 'Varía', billingPeriod: 'token', features: { es: ['Precios agresivos', 'Contexto 1M'], en: ['Aggressive pricing', '1M Context'] } }]
        },
        strengths: { es: ['Visión (VL) líder', 'Excelente código', 'Contexto 1M'], en: ['Leading Vision (VL)', 'Excellent code', '1M Context'] },
        limitations: { es: ['Menos conocido en occidente', 'Interfaz básica'], en: ['Less known in west', 'Basic interface'] },
        bestFor: { es: ['Análisis de video', 'Desarrollo', 'Contexto asiático'], en: ['Video analysis', 'Development', 'Asian context'] },
        availability: { restrictedCountries: [], vpnRequired: false, paymentMethods: ['Alipay'], platforms: ['Web', 'API'] },
        benchmarks: { spanish: 88, code: 96, creativity: 85, speed: 92, free: 90 }
    },
    {
        id: 'copilot',
        name: 'Microsoft Copilot',
        company: 'Microsoft',
        logo: '/images/logos/copilot.svg',
        websiteUrl: 'https://copilot.microsoft.com',
        category: ['productivity', 'chatbot', 'image'],
        launchDate: '2023-02-07',
        rating: 4.5,
        totalVotes: 800,
        userCount: { es: 'Integrado en Windows/Office', en: 'Integrated in Windows/Office' },
        description: { es: 'Tu compañero de IA para la productividad. Gratis ofrece GPT-4 y creación de imágenes. La versión Pro se integra en Word, Excel y PowerPoint.', en: 'Your AI productivity companion. Free tier offers GPT-4 and image creation. Pro version integrates into Word, Excel, and PowerPoint.' },
        models: ['GPT-4o', 'OpenAI o1 (Reasoning)', 'DALL-E 3'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Acceso a GPT-4o', 'Generación de imágenes (Designer)', 'Búsqueda visual'], en: ['Access to GPT-4o', 'Image generation (Designer)', 'Visual search'] },
                limits: { es: ['Límites de turnos por conversación', 'Menor prioridad'], en: ['Conversation turn limits', 'Lower priority'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Integración en Microsoft 365', 'Acceso prioritario', 'Creación de imágenes más rápida'], en: ['Microsoft 365 integration', 'Priority access', 'Faster image creation'] }
                }
            ]
        },
        tools: [
            { name: 'Copilot en Word/Excel', description: { es: 'Genera borradores, resume documentos y analiza tablas de datos.', en: 'Generates drafts, summarizes documents, and analyzes data tables.' }, purpose: { es: 'Productividad', en: 'Productivity' } },
            { name: 'Microsoft Designer', description: { es: 'Generador de imágenes y diseños gráficos integrado.', en: 'Integrated image and graphic design generator.' }, purpose: { es: 'Diseño/Imagen', en: 'Design/Image' } },
            { name: 'Copilot Studio', description: { es: 'Crea tus propios Copilots personalizados.', en: 'Create your own custom Copilots.' }, purpose: { es: 'Personalización', en: 'Customization' } }
        ],
        strengths: { es: ['Gratis da acceso a modelos top (GPT-4)', 'Integración nativa con Office', 'Ecosistema Microsoft'], en: ['Free access to top models (GPT-4)', 'Native Office integration', 'Microsoft Ecosystem'] },
        limitations: { es: ['La interfaz puede sentirse cargada', 'Límites estrictos en chats largos', 'Filtros corporativos'], en: ['Interface can feel cluttered', 'Strict limits on long chats', 'Corporate filters'] },
        bestFor: { es: ['Usuarios de Office 365', 'Entornos corporativos', 'Búsqueda web integrada'], en: ['Office 365 users', 'Corporate environments', 'Integrated web search'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito', 'Debit Card'],
            platforms: ['Web', 'iOS', 'Android', 'Windows', 'Edge']
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
        rating: 4.4,
        totalVotes: 350,
        userCount: { es: 'Usuarios Premium de X', en: 'X Premium Users' },
        description: { es: 'La IA con "espíritu rebelde". Acceso en tiempo real a toda la data de X (Twitter). Genera imágenes sin censura estricta.', en: 'The AI with a "rebellious spirit". Real-time access to all X (Twitter) data. Generates images with less strict censorship.' },
        models: ['Grok-2', 'Grok-2 mini', 'Grok-3 (Beta)'],
        pricing: {
            free: {
                available: false,
                features: { es: [], en: [] },
                limits: { es: ['Requiere suscripción Premium+ en X'], en: ['Requires X Premium+ subscription'] }
            },
            plans: [
                {
                    name: 'Premium+',
                    priceFormatted: '$16 USD',
                    priceUsd: 16,
                    billingPeriod: 'monthly',
                    features: { es: ['Acceso a Grok', 'Verificación en X', 'Sin anuncios en X', 'Generación de imágenes (Flux)'], en: ['Access to Grok', 'X Verification', 'No ads on X', 'Image generation (Flux)'] }
                }
            ]
        },
        tools: [
            { name: 'Grok-2', description: { es: 'Modelo principal, fuerte en razonamiento y noticias.', en: 'Main model, strong in reasoning and news.' }, purpose: { es: 'General/Noticias', en: 'General/News' } },
            { name: 'Flux (Integrado)', description: { es: 'Generación de imágenes de alta calidad.', en: 'High quality image generation.' }, purpose: { es: 'Imagen', en: 'Image' } }
        ],
        strengths: { es: ['Acceso instantáneo a noticias en X', 'Personalidad divertida/sarcástica', 'Menos censurado'], en: ['Instant access to X news', 'Fun/Sarcastic personality', 'Less censored'] },
        limitations: { es: ['Solo disponible pagando', 'Las fuentes (tweets) pueden ser inexactas', 'Menos útil para académico'], en: ['Paid only', 'Sources (tweets) can be inaccurate', 'Less useful for academic work'] },
        bestFor: { es: ['Usuarios intensivos de X', 'Seguimiento de tendencias', 'Entretenimiento'], en: ['Heavy X users', 'Trend tracking', 'Entertainment'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito', 'App Store'],
            platforms: ['Web (X.com)', 'iOS', 'Android']
        },
        benchmarks: {
            spanish: 90,
            code: 88,
            creativity: 94,
            speed: 95,
            free: 0
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
        rating: 4.7,
        totalVotes: 420,
        userCount: { es: 'Nicho (Devs Frontend)', en: 'Niche (Frontend Devs)' },
        description: { es: 'Generador de UI mediante IA. Escribe un prompt y obtén componentes React/Tailwind listos.', en: 'AI UI generator. Write a prompt and get ready-to-use React/Tailwind components.' },
        models: ['v0 Mini', 'v0 Max', 'v0-1.5-md'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Generaciones públicas', 'Acceso a v0 Mini', 'Exportación a React'], en: ['Public generations', 'Access to v0 Mini', 'React export'] },
                limits: { es: ['Sin modo privado', 'Sin modelos avanzados'], en: ['No private mode', 'No advanced models'] }
            },
            plans: [
                {
                    name: 'Premium',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['Generaciones privadas', 'Acceso a modelos v0 Max', 'Historial ilimitado'], en: ['Private generations', 'Access to v0 Max models', 'Unlimited history'] }
                }
            ]
        },
        tools: [
            { name: 'v0 Chat', description: { es: 'Chat interactivo para refinar componentes UI.', en: 'Interactive chat to refine UI components.' }, purpose: { es: 'Diseño UI', en: 'UI Design' } },
            { name: 'Blocks', description: { es: 'Generación de estructuras de página completas.', en: 'Generation of full page structures.' }, purpose: { es: 'Prototipado', en: 'Prototyping' } }
        ],
        strengths: { es: ['Código React/Tailwind de alta calidad', 'Integración perfecta con Vercel', 'Iteración visual rápida'], en: ['High quality React/Tailwind code', 'Perfect Vercel integration', 'Fast visual iteration'] },
        limitations: { es: ['Solo genera frontend (UI)', 'Requiere saber React'], en: ['Generates frontend only', 'Requires React knowledge'] },
        bestFor: { es: ['Desarrolladores Frontend', 'Prototipado rápido', 'Design Systems'], en: ['Frontend Developers', 'Rapid Prototyping', 'Design Systems'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web']
        },
        benchmarks: {
            spanish: 85,
            code: 97,
            creativity: 88,
            speed: 95,
            free: 85
        }
    },
    {
        id: 'bolt',
        name: 'Bolt.new',
        company: 'StackBlitz',
        logo: '/images/logos/bolt.svg',
        websiteUrl: 'https://bolt.new',
        category: ['code', 'fullstack', 'agent'],
        launchDate: '2024-05-15',
        rating: 4.8,
        totalVotes: 300,
        userCount: { es: 'Nicho (Devs Fullstack)', en: 'Niche (Fullstack Devs)' },
        description: { es: 'Desarrollador Full Stack en el navegador. Crea y despliega aplicaciones completas.', en: 'Full Stack developer in the browser. Create and deploy full applications.' },
        models: ['Claude 3.5 Sonnet', 'GPT-4o'],
        pricing: {
            free: {
                available: true,
                features: { es: ['Deploy a Netlify/Vercel', 'Preview instantánea'], en: ['Deploy to Netlify/Vercel', 'Instant preview'] },
                limits: { es: ['Límite de tokens diario bajo', 'Proyectos públicos'], en: ['Low daily token limit', 'Public projects'] }
            },
            plans: [
                {
                    name: 'Pro',
                    priceFormatted: '$20 USD',
                    priceUsd: 20,
                    billingPeriod: 'monthly',
                    features: { es: ['10M tokens mensuales', 'Proyectos privados', 'Soporte prioritario'], en: ['10M monthly tokens', 'Private projects', 'Priority support'] }
                }
            ]
        },
        tools: [
            { name: 'WebContainer', description: { es: 'Sistema operativo en el navegador (Node.js).', en: 'In-browser operating system (Node.js).' }, purpose: { es: 'Infraestructura', en: 'Infrastructure' } },
            { name: 'Bolt Agent', description: { es: 'Agente que escribe código y corre comandos.', en: 'Agent that writes code and runs commands.' }, purpose: { es: 'Desarrollo', en: 'Development' } }
        ],
        strengths: { es: ['Entorno Node.js real en navegador', 'Manejo de errores', 'Deploy en un click'], en: ['Real Node.js env in browser', 'Error handling', 'One-click deploy'] },
        limitations: { es: ['Consumo de tokens alto', 'Se "pierde" en refactorizaciones grandes'], en: ['High token consumption', 'Get lost in large refactors'] },
        bestFor: { es: ['Apps Full Stack rápidas', 'MVPs', 'Demos'], en: ['Fast Full Stack apps', 'MVPs', 'Demos'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web']
        },
        benchmarks: {
            spanish: 90,
            code: 96,
            creativity: 92,
            speed: 92,
            free: 80
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
        totalVotes: 150,
        userCount: { es: 'Crecimiento rápido', en: 'Fast growing' },
        description: { es: 'Software engineering on autopilot. Se enfoca en la velocidad de iteración y UX.', en: 'Software engineering on autopilot. Focuses on iteration speed and UX.' },
        models: ['GPT-4o', 'Claude 3.5 Sonnet'],
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
            { name: 'Auto-Backend', description: { es: 'Genera base de datos y backend (Supabase) automáticamente.', en: 'Automatically generates database and backend (Supabase).' }, purpose: { es: 'Backend', en: 'Backend' } },
            { name: 'Visual Editor', description: { es: 'Edita texto e imágenes haciendo clic en la preview.', en: 'Edit text and images by clicking in the preview.' }, purpose: { es: 'Edición Visual', en: 'Visual Editing' } }
        ],
        strengths: { es: ['Velocidad increíble (Idea -> App)', 'UX muy pulida', 'Integración Supabase'], en: ['Incredible speed (Idea -> App)', 'Polished UX', 'Supabase integration'] },
        limitations: { es: ['Menos control fino del código', 'Dependencia de integraciones'], en: ['Less fine code control', 'Dependency on integrations'] },
        bestFor: { es: ['Fundadores no técnicos', 'Validación de ideas', 'Internal tools'], en: ['Non-technical founders', 'Idea validation', 'Internal tools'] },
        availability: {
            restrictedCountries: [],
            vpnRequired: false,
            paymentMethods: ['Tarjeta de Crédito'],
            platforms: ['Web']
        },
        benchmarks: {
            spanish: 92,
            code: 95,
            creativity: 95,
            speed: 99,
            free: 85
        }
    }
];