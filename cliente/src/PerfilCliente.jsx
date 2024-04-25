import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState,useEffect } from 'react';
import Navbar from "./Componentes/NavbarPerfiles";



export default function PerfilCliente({}){



    return(
        <div className="gradient-custom-2" style={{background: '#112A4A'}}>
            <div>
                <Navbar/>
            </div>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg ="9" xl="7">
                        <MDBCard>
                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '260px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '185px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '170px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5"></MDBTypography>
                  <MDBCardText>New York</MDBCardText>
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
                        <p>aqui pondremos la llamada a su descripcion mientas una cancion: y hoy estoy aqui
                            borracho y loco
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Mis fotos XD</MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '250px', zIndex: '1' }} />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '250px', zIndex: '1' }} />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '250px', zIndex: '1' }} />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                     alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '250px', zIndex: '1' }} />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>


    )
}