# Thabiso C. Morapedi - Portfolio

A modern, responsive portfolio website showcasing my skills and expertise as an Electrical and Electronics Engineer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI** - Clean and professional interface with smooth animations
- **Contact Form** - Fully functional contact form integrated with EmailJS for direct email delivery
- **Skills Showcase** - Comprehensive display of technical and professional skills
- **Project Gallery** - Highlight of key projects and accomplishments
- **Experience Timeline** - Academic and professional experience
- **Social Integration** - Links to LinkedIn, GitHub, and Instagram
- **Resume Download** - Direct download option for resume
- **Dark/Light Theme Ready** - Theme context setup for future theme switching

## 📋 Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 5** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **Wouter** - Client-side routing

### Services

- **EmailJS** - Email service for contact form (free tier)
- **Radix UI** - Unstyled accessible components

### Build & Deploy

- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **ESBuild** - JavaScript bundler

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/ManBizzy/thabiso_morapedi_portfolio.git
cd thabiso_morapedi_portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
VITE_APP_TITLE=Thabiso Morapedi
VITE_APP_LOGO=https://placehold.co/128x128/E1E7EF/1F2937?text=TM
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=demo
```

4. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail recommended)
   - Create an email template
   - Update the credentials in `client/src/pages/Contact.tsx`:
     - `EMAILJS_PUBLIC_KEY`
     - `EMAILJS_SERVICE_ID`
     - `EMAILJS_TEMPLATE_ID`

5. **Add your resume**
   - Place your resume PDF as `client/public/resume.pdf`

## 🏃 Running the Project

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3001`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Type Checking

```bash
npm run check
```

### Format Code

```bash
npm run format
```

## 📁 Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # UI component library
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/          # Utilities
│   │   ├── App.tsx       # Main app component
│   │   └── main.tsx      # Entry point
│   ├── public/           # Static assets
│   └── index.html        # HTML template
├── server/               # Backend (Express)
├── shared/              # Shared types/constants
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies

```

## 🎨 Pages

- **Home** - Introduction and call-to-action buttons
- **Skills** - Technical skills organized by category and professional competencies
- **Experience** - Academic and professional experience timeline
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form and communication channels
- **404** - Not found page

## 📧 Contact Form Setup

The contact form uses **EmailJS** for email delivery:

1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Connect your email service (Gmail works best)
4. Create an email template with these variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{message}}` - Message content
5. Copy your credentials and update `Contact.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy on push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`

### Traditional Hosting

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your server
3. Configure your server to serve `dist/public/index.html` for client-side routing

## 🔧 Troubleshooting

### Port Already in Use

The dev server will automatically find the next available port (3001, 3002, etc.)

### EmailJS Not Working

- Check that your template ID matches your service ID
- Verify email template variables are set correctly
- Check browser console for error messages
- Ensure your EmailJS public key is correct

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 📱 Features to Add

- [ ] Blog section
- [ ] Case studies for projects
- [ ] Dark mode toggle
- [ ] Testimonials section
- [ ] Download CV with formatting options
- [ ] Analytics tracking
- [ ] Newsletter signup

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

**Thabiso C. Morapedi** - Electrical and Electronics Engineer

- 📧 Email: [thabisocm12@gmail.com](mailto:thabisocm12@gmail.com)
- 💼 LinkedIn: [@mr-morapedi](https://www.linkedin.com/in/mr-morapedi)
- 🐙 GitHub: [@ManBizzy](https://github.com/ManBizzy)
- 📸 Instagram: [@mr*morapedi*](https://www.instagram.com/mr_morapedi_)
- 📍 Location: Palapye, Botswana

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Routing with [Wouter](https://github.com/molefrog/wouter)
