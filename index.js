window.addEventListener('load', () => {
  if (window.location.pathname.includes('/g/')) { 
    const repo = window.location.pathname.split('/g/')[1]
    window.location.href = `https://github.com/didiercatz/${repo}`
  }
  if (window.location.pathname.includes('/i')) { 
    window.location.href = 'https://instagram.com/didiercatz/'
  }
  if (window.location.pathname.includes('/t')) { 
    window.location.href = 'https://twitter.com/didiercatz/'
  }
  if (window.location.pathname.includes('/cv')) { 
    window.location.href = 'https://read.cv/didiercatz/'
  }
  if (window.location.pathname.includes('/c')) { 
    window.location.href = 'https://read.cv/didiercatz/'
  }
  if (window.location.pathname.includes('/resume')) { 
    window.location.href = 'https://read.cv/didiercatz/'
  }
  if (window.location.pathname.includes('/d')) { 
    window.location.href = 'https://dribbble.com/didiercatz/'
  }
  if (window.location.pathname.includes('/s')) { 
    window.location.href = 'https://didiercatz.com/'
  }
})