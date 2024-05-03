import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import Navbar from "./Componentes/Navbar";
import { useUser } from './UserContext';
//import { useLocation } from 'react-router-dom';

import Axios from "axios";

export default function PerfilCliente({}){

  const [clientePerfil, setClientePerfil] = useState();
  const [loading, setLoading] = useState(true);
  const [clientefotos,setclientefotos] = useState();
  const { user } = useUser();
  
  const getAmigoPerfilFotos = () => {
    //const params = new URLSearchParams(window.location.search);
    //const data = params.get('data');
    const data = user.idCliente;    ;
    console.log('Valor recibido:', data);
    Axios.get("http://localhost:3001/ClientePerfilFotos", {
      params: {
        id : data
      }
    }).then((response) => {
      // Manejar la respuesta
      console.log(response.data)
      setclientefotos(response.data);

  }).catch((error) => {
      console.error("Error en la solicitud:", error);
  });
} 
  const getClientePerfil = () => {
    //const params = new URLSearchParams(window.location.search);
    //const data = params.get('data');
    const data = user.idCliente; 
    console.log('Valor recibido:', data);
    Axios.get("http://localhost:3001/Perfilcliente1", {
      params: {
        id : data
      }
    }).then((response) => {
      setClientePerfil(response.data);
      console.log(response.data);
      setLoading(false); // Cambia el estado a false cuando los datos se cargan
    }).catch((error) => {
      console.error('Error al obtener el perfil del cliente:', error);
      setLoading(false); // Cambia el estado a false en caso de error también
    });
  }

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getClientePerfil()); // Llama a la función getClientePerfil
      }, 500);
    });
  }

  useEffect(() => {
    getDatos();
    getAmigoPerfilFotos();
    //console.log(clientePerfil[0]);
  }, []);


  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras loading es true
  }

  return (
    <div className="gradient-custom-2" style={{background: '#112A4A'}}>
      <div>
        <Navbar/>
      </div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '260px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '185px' }}>
                {clientefotos.length > 0 && (
                    <MDBCardImage src={clientefotos[0].foto} alt="Foto de perfil" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '280px', height: '180px', objectFit: 'cover', objectPosition: 'center' }} />
                  )}
                  </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <h2 style={{ marginBottom: '0' }}>{clientePerfil[0].nombreCliente+" "+clientePerfil[0].apellidoCliente}</h2>
                  <MDBCardText>{clientePerfil[0].generoCliente}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5" style={{background:"#536471"}}>
                    <p className="lead fw-normal mb-1" style={{ textAlign: 'left', color:"white"}}>
                        Acerca de mi 
                    </p>
                    <div className="p-4" style={{
                        background : '#112A4A',
                        color:'white',
                        borderRadius: '10px',
                        fontSize:'20px'
                    }}>
                        <p>{clientePerfil[0].acercaDeMiCliente}
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Mis fotos XD</MDBCardText>
                </div>
                <MDBRow>
                {clientefotos.slice(0,2).map((foto, index) => (
                    <MDBCol key={index} className="mb-2">
                      <MDBCardImage src={foto.foto} alt={`Foto ${index + 2}`} className="w-100 rounded-3" style={{ width: '280px', height: '350px', objectFit: 'cover', objectPosition: 'center' }} />
                    </MDBCol>
                  ))}
                </MDBRow>
                <MDBRow className="mb-2">
                {clientefotos.slice(2).map((foto, index) => (
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
