import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CustomSpinner} from '../components/spinners/tailspin';
import { CustomToast } from '../components/toast/toast';
import { InstagramHeart } from '../components/instagramHeart/insatHeart';
import { ReactIcon } from '../components/icons/dev-icons';


function DefaultCard() {
  return (
    <Card style={{ width: '18rem',padding:"8px",margin:"4px 0px" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwPHv0SQsTlkDbzYHPy_BBzeQyVS5Bj6Z6A&s/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the  content.
        </Card.Text>
        <span><CustomSpinner height={"60"} width={"80"} color={"#000"}  /></span>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <CustomToast notification ={"you will be notified when Available!!"}/>
        <InstagramHeart/>
        </div>
        <div style={{padding:"4px"}}><ReactIcon/></div>
        <Button variant="primary">See More..</Button>
      </Card.Body>
    </Card>
  );
}


export const BasicCard =({title,description,value,ind,removeHandler})=>{

  return (
    <Card style={{ width: '18rem',margin:'8px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>{value}</Button>
      </Card.Body>
    </Card>
  );

}

export default DefaultCard;