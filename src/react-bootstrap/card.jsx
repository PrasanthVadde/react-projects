import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CustomSpinner,CustomDNASpinner } from '../components/spinners/tailspin';
import { CustomToast } from '../components/toast/toast';
import { InstagramHeart } from '../components/instagramHeart/insatHeart';


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
        <CustomSpinner height={"60"} width={"80"} color={"#000"} />
        <CustomDNASpinner/>
        <CustomToast message ={"I am a Card"}/>
        <InstagramHeart/>
        <Button variant="primary">See More..</Button>
      </Card.Body>
    </Card>
  );
}

export default DefaultCard;