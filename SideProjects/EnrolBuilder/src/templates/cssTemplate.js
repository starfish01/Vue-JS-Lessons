export { CSSstyling, setImageUrl }

var url = '';

class CSSstyling {

    url = 'new';
    styleArray ={};

    constructor(styleArray,url) {
        this.styleArray = styleArray;
        this.url = url;
    }

    setImageUrl(url) {
        this.url = url;
    }


    getStyleSheet() {
        return this.newObject();
    }




    newObject() {
        let obj =
`/* Custom CSS - will be applied to all forms for this school */
  body.start {
  /* Use this for a full screen background image on the Start page */
    background-image: url(${this.url});
  }
  body.start:after, body.complete:after {
  /* Use this for a full screen overlay over the Start page background */
      content: '';
      position: absolute;
      background-color: ${this.styleArray[0].hex.hex};
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
  }
  
  /* Main Start button */
  #add_guardian,  #add_guardian:focus, #add_guardian:active,
  .btn.btn-primary, .btn.btn-primary:focus, .btn.btn-primary:active {
  /* set schools primary colour for buttons here. Background color + border colour will need to be overridden */
      background: ${this.styleArray[2].hex.hex};
      border-color: ${this.styleArray[2].hex.hex};
      color: ${this.styleArray[4].hex.hex};
  }
  #add_guardian:hover,
  .btn.btn-primary:hover {
  /* set hover colour for all primary buttons */
      background: ${this.styleArray[5].hex.hex};
      border-color: ${this.styleArray[5].hex.hex};
      color: ${this.styleArray[7].hex.hex};
  }
  
  /* Landing Page Heading Text */
  body.start .instructions p {
      color: ${this.styleArray[1].hex.hex};
  }
  body.start h1,body.start p,body.start h4{
    color: ${this.styleArray[1].hex.hex};
} 
  
  /* Jumbotron */
  body.start .jumbotron{
      background-color: ${this.styleArray[8].hex.hex};
      color: ${this.styleArray[9].hex.hex};
  }
  
  
  
  /*Info Side Panel */
  .alert.alert-custom {
      background: ${this.styleArray[10].hex.hex};
      border-color: ${this.styleArray[11].hex.hex};
  }
  .alert.alert-custom hr{
      background: ${this.styleArray[12].hex.hex};
      border-color: ${this.styleArray[12].hex.hex};
  }
  .alert.alert-custom p, .alert.alert-custom a, .alert.alert-custom h4{
    color: ${this.styleArray[13].hex.hex};
  }
  .alert.alert-custom img.logo{
    width: 75%;
    margin: 0 auto 15px;
  }`

        return obj
    }
}
