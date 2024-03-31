import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import './Buscador.css';
function Buscador(props) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.onClick();
    }
  };
  return (
    <div className='ColorFondoDivBuscador'>
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="text" // Cambiado de "Search" a "text"
            placeholder="Buscar por Nombre de Alqui-Amigo"
            className="me-2"
            aria-label="Buscar por Nombre de Alqui-Amigo"
            value={props.searchQuery} // Usando el valor de búsqueda desde las props
            onChange={props.onSearchChange} // Manejando cambios en el valor de búsqueda
            onKeyDown={handleKeyDown} // Manejar presión de tecla
          />
          <Button variant="outline-success" className='btnBuscar' onClick={props.onClick}>Buscar</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Buscador;
