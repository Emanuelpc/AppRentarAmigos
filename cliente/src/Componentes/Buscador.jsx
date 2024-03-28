import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import './Buscador.css';
function Buscador() {
    return ( 
        <div className='ColorFondoDivBuscador'>
        <Container>
        <Form className="d-flex">
            <Form.Control
              type="Search"
              placeholder="Buscar por Nombre de Alqui-Amigo"
              className="me-2"
              aria-label="Buscar por Nombre de Alqui-Amigo"
            />
            <Button variant="outline-success" className='btnBuscar'>Buscar</Button>
          </Form>
        </Container> 
        </div>
    );
}

export default Buscador;