import React from 'react'

const Header = () => {
    return (
        <div>
            <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
  <div>
    <h3 class="text-2xl font-medium text-blue-500">A-LD</h3>
  </div>
  <div class="hidden space-x-8 lg:flex">
    <a href="/">Home</a>
    <a href="#about">A propos</a>
    <a href="#project">Projets</a>
    <a href="#skill">Compétences</a>
    <a href="#contact">Contactez-moi</a>
  </div>
  <div class="flex lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
</nav>
        </div>
    )
}

export default Header
