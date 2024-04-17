import React, { useState,useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import Navbar from "./Componentes/Navbar";


export default function PerfilAmigo() {
  const[amigointeres,setamigointeres]=useState([]);
  const location = useLocation();
  const { nombre, apellido, descripcion, imagenUrl, genero, edad, id } = location.state?.data || {};
  const profile = {
    name: nombre,
    id: id,
    apellido: apellido,
    edad: edad,
    genero: genero,
    price: "100 BS/Hora",
    interests: ["Cine", "Baile", "Natación"],
    description: descripcion,
  };

  const getAmigoPerfil = () => {
    console.log(id)
    Axios.get("http://localhost:3001/AmigoPerfil", {
            params: {
              idAmigo:id
            }
        }).then((response) => {
            // Manejar la respuesta
            console.log(response.data)
            setamigointeres(response.data);

        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        });
  }

  useEffect(() => {
    // Esta función se ejecutará cuando el componente se monte por primera vez
    getAmigoPerfil();
  }, []);

  // Este efecto se ejecutará cada vez que amigointeres se actualice
  useEffect(() => {
    console.log("amigointeres actualizado:", amigointeres);
  }, [amigointeres]);

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
  

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#536471' }}>
      <div>
        <Navbar/>
      </div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://media.istockphoto.com/id/522189109/es/foto/no-se-tome-tambi%C3%A9n-en-serio-la-vida.jpg?s=612x612&w=0&k=20&c=4RcKyGRBw_fwH_hl80Fn-COdYk9bjbrVq5v7u97dct4="
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '100px' }}>
                <h2 style={{ marginBottom: '0' }}>{profile.name + " " + profile.apellido}</h2>

                  <MDBCardText style={{ textAlign: 'left' ,fontSize: '20px', marginTop: '10px'  }}>{profile.genero} Edad:{profile.edad}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                <MDBCardText className="lead fw-normal mb-0">Mis intereses:</MDBCardText>
                {amigointeres.map((interes, index) => (
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
                    <p>{profile.description}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Mis fotos</MDBCardText>
                  
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <button style={{alignSelf:'center', width:'80%',textAlign: 'center' ,fontSize: '20px', marginTop: '5px',marginBottom: '15px',backgroundColor:'#627af3',color:'white',borderRadius:'5px'}}>Alquilar Amigo</button>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
