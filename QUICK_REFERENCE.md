<!-- 
PORTFOLIO QUICK REFERENCE GUIDE
Quick snippets and instructions for the most common customizations
-->

# Portfolio Website - Quick Reference Guide

## ⚡ Quick Customization Checklist

### 1. Update Your Name & Title (FIRST PRIORITY)
**File:** `index.html` - Lines 1-30 (Meta Tags)
```html
<title>Your Name - Software Engineer Portfolio</title>
<meta name="description" content="Professional portfolio of Your Name, a software engineering student...">
<meta name="author" content="Your Name">
```

**File:** `index.html` - Lines 135-140 (Hero Section)
```html
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-subtitle">Your Role | Your Focus Area</p>
<p class="hero-description">Write your professional summary here...</p>
```

---

### 2. Add Your Profile Photo
**File:** `index.html` - Line 165
```html
<img src="YOUR_PHOTO_URL" alt="Profile Photo">
```

**Options:**
- Upload photo to Imgur: https://imgur.com (free)
- Use relative path: `<img src="./images/profile.jpg" alt="Profile Photo">`
- Use Firebase: https://firebase.google.com (free)

**Photo Tips:**
- Size: 300x300px (square)
- Format: JPG or PNG
- Quality: Professional headshot
- File size: < 100KB

---

### 3. Update Contact Information
**File:** `index.html` - Lines 430-460 (Contact Section)

```html
<!-- Email -->
<p>your.email@example.com</p>
<a href="mailto:your.email@example.com">Send Email</a>

<!-- Phone -->
<p>+91 98765 43210</p>
<a href="tel:+919876543210">Call Now</a>
```

---

### 4. Update Education Details
**File:** `index.html` - Lines 230-275 (Education Section)

```html
<div class="education-card">
    <div class="education-header">
        <h3>Bachelor of Technology (B.Tech)</h3>
        <span class="education-year">2021 - 2025</span>
    </div>
    <p class="education-field">Your Specialization</p>
    <p class="education-university">Your University Name</p>
    <div class="education-stats">
        <div class="stat">
            <span class="stat-label">CGPA:</span>
            <span class="stat-value">X.X / 10</span>
        </div>
    </div>
</div>
```

---

### 5. Update Skills (Progressive Bars)
**File:** `index.html` - Lines 285-420 (Skills Section)

**Add New Skill:**
```html
<div class="skill-item">
    <span class="skill-name">Your Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

**Width Percentage Guide:**
- 95% = Expert
- 85% = Advanced
- 75% = Intermediate
- 60% = Beginner

---

### 6. Add/Update Projects
**File:** `index.html` - Lines 470-700 (Projects Section)

**Complete Project Card Template:**
```html
<div class="project-card">
    <div class="project-image">
        <!-- Project Image URL -->
        <img src="https://via.placeholder.com/400x250/color/ffffff?text=Project+Name" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <!-- Live Link -->
                <a href="YOUR_LIVE_PROJECT_URL" class="project-link" title="View Live">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <!-- GitHub Link -->
                <a href="https://github.com/yourname/project" class="project-link" title="View Code">
                    <i class="fas fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Title</h3>
        <p class="project-description">
            Describe your project here. What problem did it solve? 
            What technologies did you use? What was the outcome?
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
        <div class="project-date">Month Year</div>
    </div>
</div>
```

**Quick Project Image URLs:**
- Placeholder: `https://via.placeholder.com/400x250/1f2937/3b82f6?text=Your+Text`
- Pexels: https://www.pexels.com (free stock photos)
- Unsplash: https://unsplash.com (free stock photos)
- Screenshot: Take a real screenshot of your project

---

### 7. Update Achievements
**File:** `index.html` - Lines 710-800 (Achievements Section)

**Achievement Card Template:**
```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i>  <!-- Change icon -->
    </div>
    <h3>Achievement Title</h3>
    <p>Description of your achievement, award, or certification.</p>
    <span class="achievement-date">2024</span>
</div>
```

**Icon Options:**
```
fa-trophy          (Awards)
fa-certificate     (Certifications)
fa-star            (Excellence)
fa-code            (Coding)
fa-medal           (Academic)
fa-graduation-cap  (Education)
fa-lightbulb       (Innovation)
fa-handshake       (Leadership)
```

Browse more: https://fontawesome.com/icons

---

### 8. Update Social Links
**File:** `index.html` - Lines 840-870 (Footer Section)

```html
<div class="social-links">
    <a href="https://github.com/YOUR_USERNAME" target="_blank" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com/YOUR_USERNAME" target="_blank" title="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://codepen.io/YOUR_USERNAME" target="_blank" title="CodePen">
        <i class="fab fa-codepen"></i>
    </a>
</div>
```

**Social Media URLs:**
- GitHub: `https://github.com/username`
- LinkedIn: `https://linkedin.com/in/firstname-lastname`
- Twitter: `https://twitter.com/handle`
- CodePen: `https://codepen.io/username`
- Dev.to: `https://dev.to/username`
- Portfolio: `https://yourdomain.com`

---

### 9. Change Color Theme
**File:** `styles.css` - Lines 1-30 (CSS Variables)

```css
:root {
    /* Change these 3 colors */
    --primary-color: #3b82f6;      /* Main brand color */
    --secondary-color: #1f2937;    /* Secondary color */
    --accent-color: #10b981;       /* Highlight color */
}
```

**Popular Color Schemes:**

**Tech Blue (Current)**
```css
--primary-color: #3b82f6;
--accent-color: #10b981;
```

**Deep Purple**
```css
--primary-color: #8b5cf6;
--accent-color: #ec4899;
```

**Indigo**
```css
--primary-color: #6366f1;
--accent-color: #06b6d4;
```

**Modern Orange**
```css
--primary-color: #f97316;
--accent-color: #ec4899;
```

**Use Color Picker:** https://www.colorhexa.com

---

### 10. Set Up Contact Form (Optional)
**File:** `index.html` - Lines 780-820

**Option 1: FormSubmit.co (Recommended)**
1. Go to https://formspree.io
2. Create free account
3. Create new form
4. Copy your form ID
5. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Connect to Backend**
Edit `script.js` line ~330 `handleFormSubmit` function:
```javascript
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Send to your backend
    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }).then(response => {
        if(response.ok) {
            showNotification('Message sent!', 'success');
            contactForm.reset();
        }
    });
}
```

---

### 11. Change Fonts
**File:** `index.html` - Lines 20-25 (Google Fonts)

```html
<!-- Default -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">

<!-- Alternative: Poppins + Inconsolata -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inconsolata:wght@400;700&display=swap" rel="stylesheet">
```

Then update in `styles.css` line 25:
```css
--font-primary: "Font Name", sans-serif;
--font-mono: "Mono Font Name", monospace;
```

**Great Font Combinations:**
- Poppins + Inconsolata
- Montserrat + Roboto Mono
- Playfair Display + Lato
- Oswald + Roboto

Browse: https://fonts.google.com

---

### 12. Adjust Section Spacing
**File:** `styles.css` - Line 950+ (Responsive sections)

```css
.about {
    padding: 3rem 1rem;  /* Top/Bottom:3rem, Left/Right:1rem */
}

.projects {
    padding: 3rem 1rem;
}

.contact {
    padding: 3rem 1rem;
}
```

**Spacing Scale:**
- `0.5rem` = Extra small
- `1rem` = Small
- `1.5rem` = Medium
- `2rem` = Large
- `3rem` = Extra large

---

## 🔧 Code Quality Improvements

### Add Loading Animation
**File:** `index.html` (before closing body)
```html
<style>
    body.loading {
        opacity: 0;
    }
    body {
        transition: opacity 0.3s ease;
    }
</style>
<script>
    window.addEventListener('load', () => {
        document.body.classList.remove('loading');
    });
</script>
```

### Minify Code (Deployment)
Use online tools:
- CSS: https://cssnano.co/playground/
- JavaScript: https://www.minifycode.com/javascript-minifier/

---

## 📱 Mobile Testing Checklist

Test on these breakpoints:
- [ ] Desktop (1200px+)
- [ ] Tablet (768px-1023px)
- [ ] Mobile (480px-767px)
- [ ] Small Mobile (< 480px)
- [ ] Hamburger menu works
- [ ] Touch buttons are big enough
- [ ] Text is readable
- [ ] Images load fast

---

## 🚀 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add high-quality profile photo
- [ ] Test all links (projects, GitHub, LinkedIn)
- [ ] Check form submission
- [ ] Test dark/light mode
- [ ] Mobile responsive test
- [ ] Check spelling/grammar
- [ ] Update email in contact section
- [ ] Add all social media links
- [ ] Test scroll animations
- [ ] Run Lighthouse audit
- [ ] Check page load speed

---

## 🔗 Useful Links

- **Color Picker:** https://www.colorhexa.com
- **Font Pairing:** https://fonts.google.com
- **Icons:** https://fontawesome.com
- **Free Images:** https://unsplash.com
- **Image Compression:** https://tinypng.com
- **Lighthouse Test:** Chrome DevTools > Lighthouse
- **Responsive Test:** https://responsivedesignchecker.com

---

## 💡 Pro Tips

1. **Profile Photo Quality** - Invest in a good headshot (affects placement chances!)
2. **GitHub Links** - Make sure GitHub is pinned and repositories are public
3. **Project Demos** - If possible, deploy projects to see live
4. **Regular Updates** - Update portfolio as you complete projects
5. **Mobile First** - Always test on mobile first
6. **Fast Loading** - Compress images, minimize code
7. **SEO** - Update meta tags, use keywords naturally
8. **Analytics** - Add Google Analytics to track visitors

---

**Still need help?** Check the full README.md file for comprehensive documentation.
