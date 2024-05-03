import { Link } from "react-router-dom";
import Navbar from "./Componentes/Navbar";

function Inicio() {
  return (
    <header className=" pb-10">
      <Navbar />

      <section className="container flex w-full text-black mt-5 mx-auto h-full">
        <article className=" bg-celeste p-5 gap-5 w-2/5">
          <h1 className="text-3xl flex font-weight-bold">
            ¿Listo para conocer amigos increíbles?
          </h1>
          <p className="text-start text-sm font-weight-bold pt-3">
            ¡Bienvenido a nuestra aplicación para encontrar amigos! ¿Estás
            buscando ampliar tu círculo social o conocer personas con intereses
            similares a los tuyos? Con nuestra plataforma, puedes hacer
            precisamente eso. Conéctate con usuarios de todo el mundo que
            comparten tus pasiones, hobbies o simplemente están buscando una
            buena conversación. Nuestra aplicación te permite crear un perfil
            único, explorar perfiles de otros usuarios, enviar mensajes y
            organizar eventos o actividades para conocer gente nueva en persona.
          </p>
          <p className="text-4xl font-light">¡Comienza aquí!</p>
     <div className="flex space-x-4">
      <Link to="../RegistrarDatosCliente">
      <button className="px-4 py-2 bg-opacity-100 bg-dark text-white">
                Regístrarse cliente
       </button>
       </Link>
       <Link to="../RegistrarDatosAmigo">
      <button className="px-4 py-2 bg-opacity-100 bg-dark text-white">
                Regístrarse amigo
       </button>
       </Link>
</div>

        </article>
        <img
          src="https://img.freepik.com/foto-gratis/amigos-hablando-sonriendo-reunion_23-2149187027.jpg"
          alt="personas hablando"
          className="w-full"
        />
      </section>
      <section className="mx-auto container flex w-full text-black mt-5 h-full gap-1 ">
        <article className=" bg-celeste w-2/5 p-6">
          <h2>¿Quienes Somos?</h2>
          <p>
          ¡Hola! Somos un grupo de estudiantes de Ingeniería de Sistemas de la Universidad Mayor de San Simón, apasionados por la tecnología y la innovación. Como parte de nuestra formación en la materia de Ingeniería de Software, hemos creado esta emocionante plataforma web para conectar a personas en busca de nuevas amistades.

          </p>
        </article>
        <div className="flex flex-col gap-1 w-full">
          <article className="px-5 py-7 bg-celeste flex gap-5 items-center text-start">
            <div className=" bg-black w-10 h-10 aspect-square rounded-full text-white flex justify-center">
              <p>1</p>
            </div>
            <p className="mb-0">
            Diversidad de opciones: Ofrecemos una amplia gama de funciones y un motor de busqueda para que puedas encontrar al amigo correcto


            </p>
          </article>
          <article className="px-5 py-7 bg-celeste flex gap-5 items-center text-start">
            <div className=" bg-black w-10 h-10 aspect-square rounded-full text-white flex justify-center">
              <p>2</p>
            </div>
            <p className="mb-0">
            Nos preocupamos por tu experiencia en nuestra plataforma, por lo tanto contamos con una interfaz intuitiva y comprensiva
            </p>
          </article>
          <article className="px-5 py-7 bg-celeste flex gap-5 items-center text-start">
            <div className=" bg-black w-10 h-10 aspect-square rounded-full text-white flex justify-center">
              <p>3</p>
            </div>
            <p className="mb-0">
            ¿Estás buscando expandir tu círculo social? En nuestra página, tendrás la oportunidad de conectarte con una diversidad de individuos interesantes y descubrir nuevas amistades que enriquecerán tu vida.
            </p>
          </article>
        </div>
      </section>
    </header>
  );
}

export default Inicio;
