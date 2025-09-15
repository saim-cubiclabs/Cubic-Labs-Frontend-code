// Article data for detailed content
const articles = {
    'ai-revolution': {
        category: 'Artificial Intelligence',
        title: 'The AI Revolution: How Machine Learning is Transforming Enterprise Software',
        date: 'January 15, 2025',
        readTime: '8 min read',
        author: 'TechVision Research Team',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Artificial Intelligence and Machine Learning are no longer futuristic concepts—they're reshaping how businesses operate today. From automated customer service to predictive analytics, AI is becoming the backbone of modern enterprise software.</p>

            <h3>The Current State of AI in Enterprise</h3>
            <p>According to recent studies, 87% of enterprises are now using AI in some capacity, with the majority focusing on automation, data analysis, and customer experience enhancement. This represents a 340% increase from just five years ago.</p>

            <div class="highlight-box">
                <h4>Key Insight</h4>
                <p>Companies implementing AI solutions report an average 15% increase in operational efficiency and 23% reduction in processing time for routine tasks.</p>
            </div>

            <h3>Emerging AI Trends for 2025</h3>
            <ul>
                <li><strong>Generative AI Integration:</strong> Beyond chatbots, generative AI is being integrated into code generation, content creation, and design workflows.</li>
                <li><strong>Edge AI Computing:</strong> Processing AI workloads closer to data sources for reduced latency and improved privacy.</li>
                <li><strong>AI-Powered Cybersecurity:</strong> Machine learning algorithms detecting and preventing threats in real-time.</li>
                <li><strong>Autonomous Business Processes:</strong> End-to-end automation of complex business workflows without human intervention.</li>
            </ul>

            <h3>Implementation Challenges and Solutions</h3>
            <p>While AI adoption is accelerating, enterprises face significant challenges including data quality, integration complexity, and skill gaps. Successful implementations require a strategic approach focusing on specific use cases rather than broad AI deployment.</p>

            <p>The most successful AI implementations start small, focusing on well-defined problems with clear success metrics. Companies that take this approach see ROI within 6-12 months, compared to 18-24 months for broader implementations.</p>
        `
    },
    'quantum-computing': {
        category: 'Quantum Computing',
        title: 'Quantum Computing Breakthroughs in 2025',
        date: 'January 12, 2025',
        readTime: '6 min read',
        author: 'Dr. Sarah Chen',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Quantum computing has reached a pivotal moment in 2025, with several breakthrough announcements that bring practical quantum applications closer to reality. Major tech companies and research institutions are making significant strides in quantum processor development.</p>

            <h3>Recent Breakthroughs</h3>
            <p>IBM's latest quantum processor achieved 1000+ qubit stability, while Google's quantum error correction system demonstrated a 99.9% fidelity rate. These developments mark crucial milestones toward fault-tolerant quantum computing.</p>

            <div class="highlight-box">
                <h4>Industry Impact</h4>
                <p>Quantum computing is expected to revolutionize cryptography, drug discovery, financial modeling, and optimization problems within the next 3-5 years.</p>
            </div>

            <h3>Practical Applications Emerging</h3>
            <ul>
                <li><strong>Cryptography:</strong> Post-quantum encryption methods are being developed to secure data against quantum attacks.</li>
                <li><strong>Drug Discovery:</strong> Pharmaceutical companies are using quantum simulations to model molecular interactions.</li>
                <li><strong>Financial Modeling:</strong> Banks are exploring quantum algorithms for risk assessment and portfolio optimization.</li>
                <li><strong>Supply Chain Optimization:</strong> Logistics companies are testing quantum solutions for route optimization.</li>
            </ul>

            <h3>Preparing for the Quantum Future</h3>
            <p>Organizations should start preparing for quantum computing by understanding its potential impact on their industry, investing in quantum-ready security measures, and building partnerships with quantum research institutions.</p>
        `
    },
    'blockchain-evolution': {
        category: 'Blockchain',
        title: 'Beyond Cryptocurrency: Blockchain\'s Enterprise Applications',
        date: 'January 10, 2025',
        readTime: '7 min read',
        author: 'Michael Rodriguez',
        image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>While cryptocurrency grabbed headlines, blockchain technology's true potential lies in enterprise applications. From supply chain transparency to digital identity verification, blockchain is solving real business problems.</p>

            <h3>Enterprise Blockchain Adoption</h3>
            <p>Major corporations including Walmart, Maersk, and JPMorgan Chase have successfully implemented blockchain solutions, demonstrating the technology's maturity beyond digital currencies.</p>

            <div class="highlight-box">
                <h4>Success Story</h4>
                <p>Walmart's blockchain-based food traceability system reduced the time to trace contamination sources from weeks to seconds, potentially saving lives and millions in recalls.</p>
            </div>

            <h3>Key Enterprise Use Cases</h3>
            <ul>
                <li><strong>Supply Chain Management:</strong> End-to-end traceability and authenticity verification.</li>
                <li><strong>Digital Identity:</strong> Secure, decentralized identity management systems.</li>
                <li><strong>Smart Contracts:</strong> Automated contract execution reducing legal overhead.</li>
                <li><strong>Document Verification:</strong> Immutable record keeping for compliance and auditing.</li>
            </ul>

            <h3>Implementation Considerations</h3>
            <p>Successful blockchain implementation requires careful consideration of scalability, energy efficiency, and regulatory compliance. Organizations should focus on specific use cases where blockchain's unique properties provide clear advantages over traditional databases.</p>
        `
    },
    'edge-computing': {
        category: 'Edge Computing',
        title: 'Edge Computing: The Next Frontier in Data Processing',
        date: 'January 8, 2025',
        readTime: '5 min read',
        author: 'Lisa Park',
        image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Edge computing is transforming how we process and analyze data by bringing computation closer to data sources. This paradigm shift is enabling real-time applications that were previously impossible due to latency constraints.</p>

            <h3>Why Edge Computing Matters</h3>
            <p>With the explosion of IoT devices and the need for real-time processing, traditional cloud computing models face limitations. Edge computing addresses these challenges by processing data locally, reducing latency from hundreds of milliseconds to single digits.</p>

            <div class="highlight-box">
                <h4>Performance Impact</h4>
                <p>Edge computing can reduce application latency by up to 90% and decrease bandwidth usage by 40%, making real-time applications more responsive and cost-effective.</p>
            </div>

            <h3>Key Applications</h3>
            <ul>
                <li><strong>Autonomous Vehicles:</strong> Real-time decision making for safety-critical systems.</li>
                <li><strong>Industrial IoT:</strong> Immediate response to equipment anomalies and predictive maintenance.</li>
                <li><strong>Augmented Reality:</strong> Low-latency rendering for immersive experiences.</li>
                <li><strong>Smart Cities:</strong> Traffic optimization and emergency response systems.</li>
            </ul>

            <h3>Implementation Strategy</h3>
            <p>Organizations should identify use cases where latency is critical and data processing can be distributed. Start with pilot projects that demonstrate clear ROI before scaling edge computing infrastructure.</p>
        `
    },
    'cybersecurity-trends': {
        category: 'Cybersecurity',
        title: '2025 Cybersecurity Trends: Zero Trust Architecture',
        date: 'January 5, 2025',
        readTime: '6 min read',
        author: 'David Kim',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>The cybersecurity landscape continues to evolve rapidly, with Zero Trust Architecture emerging as the dominant security paradigm. As cyber threats become more sophisticated, traditional perimeter-based security models are proving inadequate.</p>

            <h3>Understanding Zero Trust</h3>
            <p>Zero Trust operates on the principle of "never trust, always verify." Every user, device, and application must be authenticated and authorized before accessing any system resources, regardless of their location or previous access history.</p>

            <div class="highlight-box">
                <h4>Security Statistics</h4>
                <p>Organizations implementing Zero Trust architecture report 50% fewer security incidents and 60% faster threat detection compared to traditional security models.</p>
            </div>

            <h3>Key Components of Zero Trust</h3>
            <ul>
                <li><strong>Identity Verification:</strong> Multi-factor authentication and continuous identity validation.</li>
                <li><strong>Device Security:</strong> Endpoint detection and response (EDR) for all connected devices.</li>
                <li><strong>Network Segmentation:</strong> Micro-segmentation to limit lateral movement of threats.</li>
                <li><strong>Data Protection:</strong> Encryption and access controls for sensitive information.</li>
            </ul>

            <h3>Implementation Roadmap</h3>
            <p>Transitioning to Zero Trust requires a phased approach: start with identity and access management, implement network segmentation, deploy endpoint security, and finally establish comprehensive monitoring and analytics.</p>
        `
    },
    'cloud-native': {
        category: 'Cloud Computing',
        title: 'Cloud-Native Development: Microservices and Containers',
        date: 'January 3, 2025',
        readTime: '9 min read',
        author: 'Jennifer Wu',
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Cloud-native development has become the standard for building scalable, resilient applications. By leveraging microservices architecture and containerization, organizations can achieve unprecedented flexibility and scalability.</p>

            <h3>The Cloud-Native Advantage</h3>
            <p>Cloud-native applications are designed specifically for cloud environments, taking advantage of elastic scaling, distributed systems, and managed services. This approach enables faster development cycles and improved system reliability.</p>

            <div class="highlight-box">
                <h4>Performance Benefits</h4>
                <p>Cloud-native applications typically achieve 99.9% uptime, 50% faster deployment cycles, and 40% reduction in infrastructure costs compared to traditional monolithic applications.</p>
            </div>

            <h3>Core Technologies</h3>
            <ul>
                <li><strong>Containers:</strong> Docker and containerd for application packaging and deployment.</li>
                <li><strong>Orchestration:</strong> Kubernetes for managing containerized applications at scale.</li>
                <li><strong>Service Mesh:</strong> Istio and Linkerd for microservices communication and security.</li>
                <li><strong>CI/CD:</strong> GitOps workflows for automated testing and deployment.</li>
            </ul>

            <h3>Best Practices</h3>
            <p>Successful cloud-native adoption requires embracing DevOps culture, implementing comprehensive monitoring, designing for failure, and maintaining security throughout the development lifecycle. Start with a pilot project to build expertise before scaling across the organization.</p>
        `
    },
    'iot-integration': {
        category: 'Internet of Things',
        title: 'IoT Integration in Smart Cities: A 2025 Perspective',
        date: 'December 30, 2024',
        readTime: '7 min read',
        author: 'Robert Thompson',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: `
            <p>Smart cities are becoming reality through IoT integration, creating more efficient, sustainable, and livable urban environments. The convergence of sensors, connectivity, and data analytics is transforming city management.</p>

            <h3>Smart City Infrastructure</h3>
            <p>Modern smart cities deploy thousands of IoT sensors to monitor everything from air quality and traffic patterns to energy consumption and waste management. This data enables real-time decision making and predictive maintenance.</p>

            <div class="highlight-box">
                <h4>Impact Metrics</h4>
                <p>Cities implementing comprehensive IoT systems report 30% reduction in energy consumption, 25% improvement in traffic flow, and 40% faster emergency response times.</p>
            </div>

            <h3>Key IoT Applications</h3>
            <ul>
                <li><strong>Smart Traffic Management:</strong> Adaptive traffic signals and congestion monitoring.</li>
                <li><strong>Environmental Monitoring:</strong> Air quality sensors and noise level tracking.</li>
                <li><strong>Smart Lighting:</strong> Adaptive street lighting based on usage patterns.</li>
                <li><strong>Waste Management:</strong> Smart bins with fill-level sensors for optimized collection routes.</li>
            </ul>

            <h3>Challenges and Solutions</h3>
            <p>IoT implementation in smart cities faces challenges including data privacy, interoperability, and cybersecurity. Successful deployments require robust security frameworks, standardized protocols, and citizen engagement in the planning process.</p>
        `
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    animateElements();
    loadTechStackProgress();
});

// Setup event listeners
function setupEventListeners() {
    // Add click listeners to trend cards and news cards
    document.querySelectorAll('.trend-card, .news-card').forEach(card => {
        card.addEventListener('click', function () {
            const articleId = this.dataset.article;
            if (articleId && articles[articleId]) {
                openArticle(articleId);
            }
        });
    });

    // Modal close functionality
    document.getElementById('articleModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeArticle();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeArticle();
        }
    });
}

// Open article in modal
function openArticle(articleId) {
    const article = articles[articleId];
    const modal = document.getElementById('articleModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="article-header">
            <div class="article-category">${article.category}</div>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
                <span>By ${article.author}</span>
                <span>${article.date}</span>
                <span>${article.readTime}</span>
            </div>
        </div>
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <div class="article-content">
            ${article.content}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close article modal
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Animate elements on scroll
function animateElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards and widgets
    document.querySelectorAll('.trend-card, .news-card, .sidebar-widget').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Load tech stack progress bars with animation
function loadTechStackProgress() {
    setTimeout(() => {
        document.querySelectorAll('.stack-progress').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
}

// Add hover effects for cards
document.querySelectorAll('.trend-card, .news-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for analytics values
function animateAnalytics() {
    const analyticsValues = document.querySelectorAll('.analytics-value');

    analyticsValues.forEach(element => {
        const targetText = element.textContent;
        const targetValue = parseFloat(targetText.replace(/[^0-9.]/g, '')) || 0;
        const isPercentage = targetText.includes('%');
        const isCurrency = targetText.includes('$') || targetText.includes('T') || targetText.includes('B');

        let currentValue = 0;
        const increment = targetValue / 60;
        const duration = 2000;
        const stepTime = duration / 60;

        const timer = setInterval(() => {
            currentValue += increment;

            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }

            let displayValue;
            if (isCurrency) {
                if (targetText.includes('T')) {
                    displayValue = '$' + currentValue.toFixed(1) + 'T';
                } else if (targetText.includes('B')) {
                    displayValue = '$' + Math.round(currentValue) + 'B';
                } else {
                    displayValue = '$' + Math.round(currentValue).toLocaleString();
                }
            } else if (isPercentage) {
                displayValue = Math.round(currentValue) + '%';
            } else {
                displayValue = Math.round(currentValue).toLocaleString();
            }

            element.textContent = displayValue;
        }, stepTime);
    });
}

// Trigger analytics animation when sidebar comes into view
const sidebarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateAnalytics();
            sidebarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const sidebar = document.querySelector('.insights-sidebar');
if (sidebar) {
    sidebarObserver.observe(sidebar);
}

// Add search functionality (placeholder)
function searchArticles(query) {
    // This would typically connect to a search API
    console.log('Searching for:', query);
}

// Add newsletter signup functionality (placeholder)
function subscribeNewsletter(email) {
    // This would typically connect to an email service
    console.log('Newsletter subscription for:', email);
    alert('Thank you for subscribing to our tech insights newsletter!');
}


// Hamburger Toggle

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("toggle"); // for animation
});

// Close menu on nav link click (optional)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("toggle");
        }
    });
});
