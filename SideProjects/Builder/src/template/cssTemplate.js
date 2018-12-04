export { newObject }

function newObject () {
  let obj = `
  /* flex dashboard */ 

.dashboard, #container, #sections { 

    display: flex; 

    display: -webkit-box; 

    -webkit-box-pack: justify; 

    width: 100%; 

} 

#sections { 

        flex-direction: column; 

    -webkit-box-orient: vertical; 

    -webkit-box-direction: normal; 

} 

  

/* flex grow slider */ 

.dashboard-slider .slick-list,  

.dashboard-slider .slick-track,  

.dashboard-slider-image { 

    width: 100%; 

    height: 100%; 

} 

.dashboard-slider { 

    height: 1px; 

    position: relative; 

    display: -webkit-box; 

    display: flex; 

    -webkit-box-flex: 1; 

            flex-grow: 1; 

} 

.dashboard-slider .slick-list { 

    position: absolute; 

} 

.dashboard-slider-image { 

    background-size: cover; 

    background-position: center; 

} 

.dashboard-slider-image img { 

    display: none 

} 

.dashboard-slider > .dashboard-slider-image { /* single image slick */ 

    position: absolute; 

    width: 100%; 

    height: 100%; 

} 

.dashboard-slider-image:nth-child(1) { 

    background-image: url("https://digistorm-app-control.s3-ap-southeast-2.amazonaws.com/5a7bc4cb92b4b373b73e99cc57dd31b77fca996b840cb606ee168.jpeg"); 

} 

.dashboard-slider-image:nth-child(2) { 

    background-image: url("https://digistorm-app-control.s3-ap-southeast-2.amazonaws.com/5a7bc4cbb7e5d2fdedbe8875f5e01fe77e66a0d3f0df217d2eb34.jpeg"); 

} 

.dashboard-slider-image:nth-child(3) { 

    background-image: url("https://digistorm-app-control.s3-ap-southeast-2.amazonaws.com/5a7bc699e34327ed4f4dbe72f2fe4cefce60f7cffb93a591da8e4.jpeg"); 

} 

.dashboard-slider-image:nth-child(4) { 

    background-image: url("https://digistorm-app-control.s3-ap-southeast-2.amazonaws.com/5a7bc4cbe1eca013faa57359c0c1bc4803c14c389c6aaa627b850.jpeg"); 

} 

  

  

  

/* tablet login */ 

.tablet .modal .logo { 

    margin: 140px auto; 

} 

  

/* Fixes for iOS Screenshots */ 

html.screenshot.ios body { 

    top: 0; 

} 

html.screenshot.ios .dashboard { 

    min-height: calc(100% - 20px); 

} 

  

  

/* Fix core links svgs */ 

.links .content-icon svg.injected-svg { 

    width: 20px !important; 

} 

.links .content-icon svg.injected-svg g, 

.links .content-icon svg.injected-svg path, 

.links .content-icon svg.injected-svg polygon { 

    fill: #749BC0 !important; 

}
  `

  return obj
}
