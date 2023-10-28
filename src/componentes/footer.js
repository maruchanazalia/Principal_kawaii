import '../css/footer.css';
import "node_modules/bootstrap/dist/css/bootstrap.min.css"


function Footer() {
    return (
      <footer className='footer'>
      <div class="container">
      <div class="titulo">
                <a href="index.html">
                    <h1 id="main-title">KAWAI<span id="i">I</span></h1>
                </a>
            </div>
            <div>
            
            </div>
        <div class="row">
          <div class="col">
          <br></br>
            <h3>Dirección:</h3>
            <p>123 Street, New York, USA</p>
          </div>
          <div class="col">
          <br></br>
            <h3>|</h3>
            <h3>|</h3>
          </div>
          <div class="col">
          <br></br>
            <h3>Horarios de Atención:</h3>
            <p>Lunes - Sábado: 8AM - 5PM</p>
            <p>Domingo: Cerrado</p>
          </div>
        </div>
        <div class="text-center">
          <br></br>
        </div>
        <p class="text-center">&copy; <a href="#">KAWAII</a>. Todos los derechos reservados. Desing by <strong>Azalia</strong></p>
      </div>
    </footer>
    
    );
  }
  
  export default Footer;

