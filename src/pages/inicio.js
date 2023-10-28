import NavbarRosa from '../componentes/navbarRosa'
import NavbarOvalada from '../componentes/navbarOvalada'
import Footer from '../componentes/footer'
import Carrusel from '../componentes/carrusel'
import About from '../componentes/About'


export default function Inicio() {
  return (
   <div>
    <NavbarRosa/>
    <NavbarOvalada/>
    <Carrusel/>
 
   
    <About/>
    <Footer/>
   </div>
  )
}