/**
 * Humphrey Nyahoja Portfolio - JavaScript
 * Clean, modular, and performant interactions
 */

// ============================================
// DOM Elements
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cursorGlow = document.querySelector('.cursor-glow');
const typedTextEl = document.getElementById('typed-text');

// ============================================
// Typing Animation
// ============================================
class TypeWriter {
    constructor(element, words, wait = 2000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.textContent = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
if (typedTextEl) {
    const words = [
        'Python Developer',
        'Web Developer',
        'Software Engineer',
        'Tech Enthusiast',
        'Problem Solver'
    ];
    new TypeWriter(typedTextEl, words, 2000);
}

// ============================================
// Cursor Glow Effect
// ============================================
if (cursorGlow && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ============================================
// Navigation
// ============================================

// Scroll-based navbar styling
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ============================================
// About Section Toggle
// ============================================
const aboutToggle = document.getElementById('about-toggle');
const aboutMore = document.getElementById('about-more');

if (aboutToggle && aboutMore) {
    aboutToggle.addEventListener('click', () => {
        const isHidden = aboutMore.style.display === 'none';
        aboutMore.style.display = isHidden ? 'block' : 'none';
        aboutToggle.querySelector('span').textContent = isHidden ? 'Read Less' : 'Read More';
        aboutToggle.querySelector('i').style.transform = isHidden ? 'rotate(180deg)' : '';
    });
}

// ============================================
// Education Toggle (DRY approach)
// ============================================
document.querySelectorAll('.edu-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.getElementById(targetId);
        
        if (target) {
            const isActive = target.classList.contains('active');
            target.classList.toggle('active');
            button.classList.toggle('active');
            button.querySelector('span').textContent = isActive ? 'View Courses' : 'Hide Courses';
        }
    });
});

// ============================================
// Contact Form
// ============================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            await emailjs.sendForm('service_515vk9s', 'template_3dzmmba', contactForm);
            
            submitBtn.querySelector('span').textContent = 'Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                contactForm.reset();
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Email send failed:', error);
            submitBtn.querySelector('span').textContent = 'Failed - Try Again';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
            
            setTimeout(() => {
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ============================================
// Smooth Scroll for all anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.edu-card, .project-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation styles when observed
const style = document.createElement('style');
style.textContent = `
    .edu-card.animate-fade-in,
    .project-card.animate-fade-in,
    .section-header.animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Project Card Stagger Animation
// ============================================
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.edu-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.05}s`;
});

// ============================================
// GitHub Repos Integration
// ============================================
const GITHUB_USERNAME = '1772hojaz';
const reposGrid = document.getElementById('repos-grid');
const repoCountEl = document.getElementById('repo-count');
const followerCountEl = document.getElementById('follower-count');
const starCountEl = document.getElementById('star-count');

// Language colors for dots
const languageColors = {
    'Python': 'python',
    'JavaScript': 'javascript',
    'Shell': 'shell',
    'Dart': 'dart',
    'HTML': 'html',
    'CSS': 'css',
    'TypeScript': 'typescript'
};

// Fetch GitHub user data and repos
async function fetchGitHubData() {
    try {
        // Fetch user profile and repos in parallel
        const [userResponse, reposResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
            throw new Error('Failed to fetch GitHub data');
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        // Update stats
        updateGitHubStats(userData, reposData);

        // Render repos
        renderRepos(reposData);

    } catch (error) {
        console.error('GitHub API Error:', error);
        showReposError();
    }
}

// Update GitHub stats
function updateGitHubStats(user, repos) {
    // Animate number counting
    animateNumber(repoCountEl, user.public_repos);
    animateNumber(followerCountEl, user.followers);
    
    // Calculate total stars
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    animateNumber(starCountEl, totalStars);
}

// Animate number from 0 to target
function animateNumber(element, target) {
    const duration = 1000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

// Render repository cards
function renderRepos(repos) {
    // Filter out forks and sort by stars + recent updates
    const filteredRepos = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => {
            // Prioritize repos with stars, then by update date
            if (b.stargazers_count !== a.stargazers_count) {
                return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
        })
        .slice(0, 12); // Show top 12 repos

    if (filteredRepos.length === 0) {
        reposGrid.innerHTML = '<div class="repos-error"><i class="fas fa-inbox"></i><p>No repositories found</p></div>';
        return;
    }

    reposGrid.innerHTML = filteredRepos.map(repo => createRepoCard(repo)).join('');

    // Add stagger animation
    document.querySelectorAll('.repo-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Create a single repo card
function createRepoCard(repo) {
    const languageClass = languageColors[repo.language] || 'default';
    const description = repo.description || 'No description provided';
    const truncatedDesc = description.length > 100 ? description.substring(0, 100) + '...' : description;
    
    // Format the updated date
    const updatedDate = new Date(repo.updated_at);
    const timeAgo = getTimeAgo(updatedDate);

    return `
        <div class="repo-card" data-language="${repo.language || 'Other'}">
            <div class="repo-header">
                <h3 class="repo-name">
                    <i class="fas fa-book-bookmark"></i>
                    ${repo.name}
                </h3>
                <span class="repo-visibility">Public</span>
            </div>
            <p class="repo-description">${truncatedDesc}</p>
            <div class="repo-meta">
                ${repo.language ? `
                    <span class="repo-language">
                        <span class="language-dot ${languageClass}"></span>
                        ${repo.language}
                    </span>
                ` : ''}
                ${repo.stargazers_count > 0 ? `
                    <span class="repo-meta-item">
                        <i class="fas fa-star"></i>
                        ${repo.stargazers_count}
                    </span>
                ` : ''}
                ${repo.forks_count > 0 ? `
                    <span class="repo-meta-item">
                        <i class="fas fa-code-branch"></i>
                        ${repo.forks_count}
                    </span>
                ` : ''}
                <span class="repo-meta-item">
                    <i class="fas fa-clock"></i>
                    ${timeAgo}
                </span>
            </div>
            <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-link">
                View Repository <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
}

// Get time ago string
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }
    
    return 'just now';
}

// Show error state
function showReposError() {
    reposGrid.innerHTML = `
        <div class="repos-error">
            <i class="fas fa-exclamation-circle"></i>
            <p>Unable to load repositories. Please try again later.</p>
            <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" rel="noopener" class="btn btn-secondary" style="margin-top: 1rem;">
                <span>Visit GitHub Profile</span>
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

// Filter repos by language
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const repoCards = document.querySelectorAll('.repo-card');
        
        repoCards.forEach(card => {
            const language = card.getAttribute('data-language');
            if (filter === 'all' || language === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Initialize GitHub section
if (reposGrid) {
    fetchGitHubData();
}
