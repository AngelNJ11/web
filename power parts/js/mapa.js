const nav = document.querySelectorAll('header nav a')

nav.forEach(link => {
  const pathname = new URL(link.href).pathname
  const isHome = pathname === '/'

  if (isHome) {
    link.classList.add('active')
  }

  if (pathname === location.pathname) {
    link.classList.add('active')
  }
})