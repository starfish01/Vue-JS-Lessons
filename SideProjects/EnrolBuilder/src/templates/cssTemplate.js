export { CSSstyling, setImageUrl }

var url = '';

class CSSstyling {

    url = 'new';

    constructor() {
        this.url = '';
    }

    setImageUrl(url) {
        this.url = url;
        console.log(this.url)
    }


    getStyleSheet() {
        //console.log(url)
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
      background-color: #fff;
      opacity: 0.8;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
  }
  
  #add_guardian,  #add_guardian:focus, #add_guardian:active,
  .btn.btn-primary, .btn.btn-primary:focus, .btn.btn-primary:active {
  /* set schools primary colour for buttons here. Background color + border colour will need to be overridden */
      background: #D3A22B;
      border-color: #D3A22B;
      color: #000;
  
  }
  #add_guardian:hover,
  .btn.btn-primary:hover {
  /* set hover colour for all primary buttons */
      background: #e5af2b;
      border-color: #e5af2b;
      color: #000;
  }
  
  body.start .instructions p {
      color: #333;
  
  }
  
  
  body.start .jumbotron{
      background-color: rgba(255,255,255,1);   
  }
  
  
  body.start h1,body.start p,body.start h4{
      color: #000;
  } 
  
  
  .alert.alert-custom {
      background: #fff;
      border-color: #fff;
      
  }
  
  .alert.alert-custom hr{
      background: #000;
      border-color: #000;
      
  }
  
  .alert.alert-custom p, .alert.alert-custom a, .alert.alert-custom h4{
  color: #000;
  }
  .alert.alert-custom img.logo{
      width: 75%;
      margin: 0 auto 15px;
     
  }`

        return obj
    }
}
