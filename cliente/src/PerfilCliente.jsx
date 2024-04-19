import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState,useEffect } from 'react';
import Navbar from "./Componentes/NavbarPerfiles";



export default function PerfilCliente(){



    return(
        <div className="gradient-custom-2" style={{background: '#112A4A'}}>
            <div>
                <Navbar/>
            </div>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg ="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{background: '#000', height:'250px'}}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{width:'185px'}}>

                                </div>

                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>


    )
}