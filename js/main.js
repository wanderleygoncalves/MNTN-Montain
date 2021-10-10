/* ScrollReveal*/

const scrollReveal = ScrollReveal({
  
  origin: 'top',
  distance: '10px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  
  `#main-header .logo, #main-header .navigation,
  #home-page .wrapper, .wrapper-title, 
  .wrapper-description, .fllow-us,
  .number, .left-title, .left-description, 
  .left-sub-description, .link, .right-image,
  #main-footer .column-1, .column-2
  `,
  { interval: 100 }
)
