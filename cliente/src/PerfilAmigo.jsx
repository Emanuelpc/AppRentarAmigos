import React, { useState ,useEffect  }  from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import Navbar from "./Componentes/Navbar";

export default function PerfilAmigo() {
  
  const location = useLocation();
  const { nombre, apellido, descripcion, imagenUrl, genero, edad, id } =
  location.state?.data || {};
  const [intereses2,setintereses2] = useState([]);
     // Función para obtener la lista de Intereses del backend
     const getIntereses2 = () => {
      Axios.get("http://localhost:3001/intereses2").then((response) => {
        setintereses2(response.data);
      });
    }

  const profile = {
    name: nombre,
    id: id,
    apellido: apellido,
    edad: edad,
    genero: genero,
    price: "100 BS/Hora",
      
    description: descripcion,
  };
    
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#536471' }}>
      <div>
        <Navbar/>
      </div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '250px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBCardText style={{ justifyContent: 'flex-start' }}>{profile.name + " " + profile.apellido}</MDBCardText>
                <MDBCardText style={{ justifyContent: 'flex-start' }} >{profile. edad}</MDBCardText>
                  <MDBCardText style={{ justifyContent: 'flex-start' }}>{profile.genero}</MDBCardText>

                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-2 h6">Natacion</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-2 h6">Musica</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-2 h6">Anime</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Acerca de mi</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <p>Me presento: {profile.description}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Mis fotos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted"></a></MDBCardText>
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
                <MDBRow className="g-2">
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
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
