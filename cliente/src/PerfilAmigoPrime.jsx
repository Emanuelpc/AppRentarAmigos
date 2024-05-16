import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import Navbar from "./Componentes/Navbar";
import { useUser } from './UserContext';
import Axios from "axios";

export default function PerfilAmigoPrime(){

    const[AmigoPerfil, setAmigoPerfil] = useState([]);
    const [loading, setLoading] = useState(true);
    const [amigoFotos, setAmigoFotos] = useState([]);
    const {user} = useUser ();
    const [interes, setIntereses] = useState([]);

    const getAmigoPerfil = () => {
      const data = user.idAmigo;
      console.log('Valor recibido:', data);
      Axios.get("http://localhost:3001/amigoPerfil1", {
          params:{
              id : data
          }
      }).then((response) => {
          setAmigoPerfil(response.data);
          console.log(response.data);
          setLoading(false);
      }).catch((error)=>{
          console.error('Error al obtener el perfil del cliente:', error);
          setLoading(false);
      })
  }
  const getDatos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getAmigoPerfil()); // Llama a la función getClientePerfil
        }, 500);
      });
    }
    const getAmigoPerfilFotos = () => {
      const data = user.idAmigo;    ;
      console.log('Valor recibido:', data);
      Axios.get("http://localhost:3001/AmigoPerfilFotos", {
              params: {
                idAmigo:data
              }
          }).then((response) => {
              // Manejar la respuesta
              console.log(response.data)
              setAmigoFotos(response.data);
  
          }).catch((error) => {
              console.error("Error en la solicitud:", error);
          });
    }
    const getIntereses = () => {
      const data = user.idAmigo;
      console.log('Valor recibido:', data);
      Axios.get("http://localhost:3001/AmigoPerfil", {
            params: {
              idAmigo:data
            }
        }).then((response) => {
            // Manejar la respuesta
            console.log(response.data)
            setIntereses(response.data);

        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        });
    }  
    useEffect(() => {
      getDatos();
      getAmigoPerfilFotos();
      getIntereses();
    }, []);
     // Este efecto se ejecutará cada vez que amigointeres se actualice
  useEffect(() => {
    console.log("amigointeres actualizado:", interes);
  }, [interes]);

  const getRandomColor = () => {
    let color;
    // Genera colores aleatorios hasta que no sean ni muy oscuros ni muy claros
    do {
      color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    } while (isTooDarkOrLight(color));
    return color;
  }
  
  const isTooDarkOrLight = (color) => {
    // Convierte el color a luminancia (brillo)
    const luminance = (0.299 * parseInt(color.substring(4, 7))) + (0.587 * parseInt(color.substring(9, 12))) + (0.114 * parseInt(color.substring(14, 17)));
    // Retorna true si el color es demasiado oscuro (luminancia < 50) o demasiado claro (luminancia > 200)
    return luminance < 50 || luminance > 200;
  }
  
  
    if (loading) {
      return <div>Cargando...</div>; // Muestra un mensaje de carga mientras loading es true
    }




      return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#112A4A' }}>
          <div>
            <Navbar/>
          </div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '260px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '185px' }}>
                 {amigoFotos.length > 0 && (
                    <MDBCardImage src={amigoFotos[0].foto} alt="Foto de perfil" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '280px', height: '180px', objectFit: 'cover', objectPosition: 'center' }} />
                  )}
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h2 style={{ marginBottom: '0' }}>{AmigoPerfil[0].Nombre+" "+ AmigoPerfil[0].Apellido}</h2>
                  <MDBCardText>{AmigoPerfil[0].Genero}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                <MDBCardText className="lead fw-normal mb-0">Mis intereses:</MDBCardText>
                {interes.map((interes, index) => (
                <MDBCardText key={index} className="mb-0"style={{
                  margin:'10px',
                  background:getRandomColor(),
                  color:'white',
                  padding:'10px',
                  fontSize:'20px',
                  borderRadius:'10px'
                }}>{interes.Interes}</MDBCardText>
                ))}
               
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
              <div className="mb-5" style={{backgroundColor:"#536471"}}>
                  <p className="lead fw-normal mb-1" style={{
                     textAlign: 'left',
                     color:"white" 
                     }}>Acerca de mi</p>
                  <div className="p-4" style={{ 
                    backgroundColor: '#315c7a',
                    color:'white',
                    borderRadius:'10px',
                    fontSize:'20px'
                    }}>
                      <p>{AmigoPerfil[0].Acercademi}</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Mis fotos</MDBCardText>
                  </div>
                <MDBRow>
                {amigoFotos.slice(0,2).map((foto, index) => (
                    <MDBCol key={index} className="mb-2">
                      <MDBCardImage src={foto.foto} alt={`Foto ${index + 2}`} className="w-100 rounded-3" style={{ width: '280px', height: '350px', objectFit: 'cover', objectPosition: 'center' }} />
                    </MDBCol>
                  ))}
                </MDBRow>
                <MDBRow className="mb-2">
                {amigoFotos.slice(2).map((foto, index) => (
                    <MDBCol key={index} className="mb-2">
                      <MDBCardImage src={foto.foto} alt={`Foto ${index + 2}`} className="w-100 rounded-3" style={{ width: '280px', height: '350px', objectFit: 'cover', objectPosition: 'center' }}  />
                    </MDBCol>
                  ))}
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
    