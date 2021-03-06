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

/* fix for image on flex */
.dashboard .dashboard-buttons .dashboard-buttons-group{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: none;
}

.dashboard-slider > .dashboard-slider-image {
 /* single image slick */
  position: absolute;
  width: 100%;
  height: 100%;
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

/* Login screen */
.login .form-wrapper {
  box-shadow: 0 0 10px #00000022;
  -webkit-box-shadow: 0 0 10px #00000022;
  -moz-box-shadow: 0 0 10px #00000022;
}

/* Alert Button */
.dashboard-badge {
    border-radius: 25px;
}

/* Fixes screenshot issue with dashboard icons shrinking */

.dashboard .dashboard-buttons {
  width:100%;
}
`

  return obj
}
