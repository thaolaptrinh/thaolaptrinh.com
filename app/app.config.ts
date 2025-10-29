export default defineAppConfig({
  global: {
    picture: {
      dark: '',
      light: '',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com',
    email: 'thaolaptrinh@gmail.com',
    available: false
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `thaolaptrinh.com | Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/thaolaptrinh',
      'target': '_blank',
      'aria-label': 'thaolaptrinh on GitHub'
    }]
  }
})
