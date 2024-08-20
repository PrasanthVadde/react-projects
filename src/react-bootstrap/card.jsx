import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DefaultCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwPHv0SQsTlkDbzYHPy_BBzeQyVS5Bj6Z6A&s/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the  content.
        </Card.Text>
        <Button variant="primary">See More..</Button>
      </Card.Body>
    </Card>
  );
}

export default DefaultCard;