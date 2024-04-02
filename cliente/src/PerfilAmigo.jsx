import React, { useState } from 'react';
import Button from "react-bootstrap/esm/Button";
import Toast from "react-bootstrap/esm/Toast";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Navbar from "./Componentes/Navbar"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';


function PerfilAmigo() {
  const [showA, setShow] = useState(false);

  const toggleShow = () => setShow(!showA);
  const showToast = () => setShow(true);
    return (
      <div>
        <Navbar/>
          <Row className='p-3'>
            <h1>Perfil de Amigo</h1>
          </Row>
          <Row className='p-3'>
            <Col>{/* Aquí va el carrusel de imagenes */}
              <div>
                <Image className='p-3' width={350} height={400} color='gray' src="cliente/public/logo512.png" rounded /> 
                <div>
                  <Image className='p-3' width={171} height={180} color='gray' src="cliente/public/logo512.png" rounded /> 
                  <Image className='p-3' width={171} height={180} color='gray' src="cliente/public/logo512.png" rounded /> 
                  <Image className='p-3' width={171} height={180} color='gray' src="cliente/public/logo512.png" rounded /> 
                </div> 
              </div>
              <div 
                className="mt-3 p-2 d-flex justify-content-center" >
                <div className="col-6 d-flex justify-content-end">
                  <Button variant="secondary" size='md' href="/">Volver</Button>
                </div>
              </div>
            </Col>
            <Col>
              <Row> {/* Aquí va la información del amigo */}
                <div style={{ textAlign: 'left' }}>
                  <h3>Nombre de Amigo</h3> 
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4>Valorado con</h4> 
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4>Registro realisado en $MES del $AÑO para $PAIS</h4> 
                </div>
                <div style={{ textAlign: 'left' }} className='py-2'>
                  <h2>Precio Bs/Hora</h2> 
                </div>
              </Row>
              <Row>{/* Aquí van los Intereses del Amigo*/}
                <div className='py-2'>
                 <div>
                    <h2 style={{ textAlign: 'left' }}>Intereses:</h2> 
                  </div>
                 <div>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                        <div className="p-2">Fourth item</div>
                    </Stack>
                  </div>
                 <div>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                        <div className="p-2">Fourth item</div>
                    </Stack>
                  </div>
                </div>
              </Row>
              <Row className='m-4'>
                <div className=" rounded border" style={{ height: '20vh', margin: '20px' }}>
                  <p>Aquí va la descripción...</p>
                </div>
              </Row>
              <div className="p-2 d-flex justify-content-center" >
                <div className="col-6 d-flex justify-content-start">
                  <Button variant="secondary" size='md' onClick={showToast}>Alquilar Amigo</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className='p-3 justify-content-center'>
            <Col xs="auto">
            </Col>
            <Col xs="auto">
            </Col>

          </Row>
            <Row>
              <ToastContainer className="p-3" position="bottom-end">
                <Toast onClose={toggleShow} show={showA}>
                  <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Correcto</strong>
                    <small>Alquier exitoso</small>
                  </Toast.Header>
                  <Toast.Body>Has alquilado un amigo!!</Toast.Body>
                </Toast>
              </ToastContainer>
            </Row>
        
      </div>
    );
  }
  
  export default PerfilAmigo;