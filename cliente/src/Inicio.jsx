import Navbar from "./Componentes/Navbar";

function Inicio() {
  return (
    <header className=" pb-10">
      <Navbar />

      <section className="container flex w-full text-black mt-5 mx-auto h-full">
        <article className="bg-white p-5 gap-5 w-2/5">
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
          <button className="px-4 py-2 bg-opacity-100 bg-dark text-white">
            {" "}
            Regístrate ahora
          </button>
        </article>
        <img
          src="https://img.freepik.com/foto-gratis/amigos-hablando-sonriendo-reunion_23-2149187027.jpg"
          alt="personas hablando"
          className="w-full"
        />
      </section>
     
    </header>
  );
}

export default Inicio;
