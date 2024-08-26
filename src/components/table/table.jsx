  import { Component } from "react";
  import axios from "axios";
  import { Table } from "react-bootstrap";
  import { CustomSpinner } from "../spinners/tailspin";

  export class CustomTable extends Component {
    state = {
      products: [],
      isLoading: true,
      isOn: false,
      bulbState: "https://www.w3schools.com/js/pic_bulboff.gif",
      text1: "ON",
      text2: "OFF",
      count :0
    };

    componentDidMount() {
      this.fetchedData();
    }

    fetchedData = async () => {
      try {
        const { status, data } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        if (status == 200) {
          this.setState({
            products: data,
            isLoading: false,
            
          });
        }
      } catch (error) {
        this.setState({
          error: error.message,
          isLoading: false,
        });
      }
    };


    clickHandler=(val)=>{
      this.state.products.map(eachProduct=>eachProduct.id !== val)
      this.setState({
        bulbState : "https://www.w3schools.com/js/pic_bulboff.gif"
      })
    }
    render() {
      return (
        <>
          {this.state.isLoading ? (
            <CustomSpinner />
          ) : (
            <>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>count {this.state.count}</th>
                  </tr>
                </thead>
                <tbody>
                      {
                          this.state.products.map(eachProduct=>{
                              return(
                                  <>
                                      <tr key={eachProduct.id}>
                                          <td>{eachProduct.id}</td>
                                          <td>{eachProduct.title}</td>
                                          <td>{eachProduct.description}</td>
                                          <td><img src={eachProduct.image} width={100}height={100}/></td>
                                          <td><img src={this.state.bulbState} width={100} height={100}/><button onClick={()=>this.clickHandler(eachProduct.id)}>{this.state.isOn ? this.state.text2 : this.state.text1}</button></td>
                                      </tr>
                                  </>
                              )
                          })
                      }
                </tbody>
              </Table>
            </>
          )}
        </>
      );
    }
  }
