import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Legend from "chartist-plugin-legend";


import { getDonutData, getLineData, getSummaryData } from './dataservice';
import GetMetricData  from './metric';
import { Doughnut } from 'react-chartjs-2';
import { chartColors } from "./colors";
import { Line } from "react-chartjs-2";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';






function Dashboard() {

    /******Donut Chart*****/
    const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true;
        getDonutData()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

    let cat = [];
    let val = [];
    const donutData = list.map(rec => {
        return (
            cat.push(rec.category),
            val.push(rec.value)
        );
    });

    const donut = {
        labels: cat,
        datasets: [
            {
                data: val,
                backgroundColor: chartColors
            }]
    }


    var options = {
        responsive: true,
        maintainAspectRatio: true,
        title: {
            display: false,
            position: "top",
            fontSize: 10,
            fontColor: "#111"
        },

        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 10
            }
        }
    };




      /******Line Chart*****/

    const [list1, setList1] = useState([]);
    useEffect(() => {
        let mounted = true;
        getLineData()
            .then(items => {
                if (mounted) {
                    setList1(items)
                }
            })
        return () => mounted = false;
    }, [])

    let val1 = [];
    const donutData1 = list1.map(rec => {
        return (
            val1.push(rec.Amount)
        );
    });



    const donut1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: val1,
                label: "Monthly Expense Pattern",
                lineTension: 0,
                fill: true,
                backgroundColor: chartColors[Math.floor(Math.random() * 50)]
            }]
    }




      /******Summary Chart*****/
    const [data, setData] = useState([]);
    useEffect(() => {
        getSummaryData()
            .then(result => {

                setData(result)
            }
            )
    }, [])



    let columns = [

        {
            dataField: "Id",
            hidden: true,
            sort: true
        },
        {

            dataField: "Date",
            text: "Date",
            sort: true
        },

        {
            dataField: "Grocery",
            text: "Grocery",
            sort: true
        },
        {
            dataField: "GroceryGrouped",
            text: "Grocery Type",
            sort: true
        },
        {
            dataField: "Amount",
            text: "Amount",
            sort: true
        },
        {
            dataField: "Payer",
            text: "Who Paid",
            sort: true
        },
        {
            dataField: "PaidFor",
            text: "Consumers",
            sort: true
        }];

    
 


  return (
    <>
          <Container fluid>

              <Row>
      
                  
                  <GetMetricData />
                      
   
              </Row>


              <Row>
                  <Col md="6">
                      <Card>
                          <Card.Header>
                              <Card.Title as="h4">Expense Pattern</Card.Title>
                              <p className="card-category">24 Hours performance</p>
                          </Card.Header>
                          <Card.Body>
                              {donut1 && <div >                         <Line data={donut1} />
                              </div>}
                          </Card.Body>


                      </Card>
                  </Col>
                  <Col md="6">
                      <Card>
                          <Card.Header>
                              <Card.Title as="h4">Expense Breakdown</Card.Title>
                              <p className="card-category"></p>
                          </Card.Header>


                          {donut && <div>  <Doughnut data={donut} options={options} /></div>}




                      </Card>
                  </Col>
              </Row>
              <Row>
                  <Col md="12">
                      <Card>
                          <Card.Header>
                              <Card.Title as="h4">Summary</Card.Title>



                          </Card.Header>
                          <Card.Body>


                              {data && <div>
                              <BootstrapTable
                                  keyField='Id'
                                  data={data}
                                  columns={columns}
                                  filter={filterFactory()}
                                  pagination={paginationFactory()}
                              /> </div>}










                          </Card.Body>

                      </Card>
                  </Col>

              </Row>








      </Container>
    </>
  );
}

export default Dashboard;


/*
 
 
 

              <Row>
                  <Col lg="3" sm="6">
                      <Card className="card-stats">
                          <Card.Body>
                              <Row>
                                  <Col xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <img alt="vegetable" height="100px" width="150px" src={vegetable} />
                                      </div>
                                  </Col>
                                  <Col xs="7">
                                      <div className="numbers">
                                          <p className="card-category">Vegetables</p>
                                          <Card.Title as="h4">{metval[0].Vegetables}</Card.Title>
                                      </div>
                                  </Col>
                              </Row>
                          </Card.Body>
                          <Card.Footer>
                              <hr></hr>
                              <div className="stats">
                                  <p className="card-category">Last Month:</p>
                                  <Card.Title as="h5">{metval1[0].Vegetables}</Card.Title>
                              </div>
                          </Card.Footer>
                      </Card>
                  </Col>
                  <Col lg="3" sm="6">
                      <Card className="card-stats">
                          <Card.Body>
                              <Row>
                                  <Col xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <img alt="ChickenlegPiece" height="100px" width="150px" src={ChickenlegPiece} />


                                      </div>
                                  </Col>
                                  <Col xs="7">
                                      <div className="numbers">
                                          <p className="card-category">Chicken</p>
                                          <Card.Title as="h4">{metval[0].Meat}</Card.Title>
                                      </div>
                                  </Col>
                              </Row>
                          </Card.Body>
                          <Card.Footer>
                              <hr></hr>

                              <div className="stats">
                                  <p className="card-category">Last Month:</p>
                                  <Card.Title as="h5">{metval1[0].Meat}</Card.Title>

                              </div>
                          </Card.Footer>
                      </Card>
                  </Col>
                  <Col lg="3" sm="6">
                      <Card className="card-stats">
                          <Card.Body>
                              <Row>
                                  <Col xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <img alt="restaurant" height="100px" width="100px" src={restaurant} />

                                      </div>
                                  </Col>
                                  <Col xs="7">
                                      <div className="numbers">
                                          <p className="card-category">Restaurant</p>
                                          <Card.Title as="h4">{metval[0].Restaurant}</Card.Title>
                                      </div>
                                  </Col>
                              </Row>
                          </Card.Body>
                          <Card.Footer>
                              <hr></hr>
                              <div className="stats">
                                  <p className="card-category">Last Month:</p>
                                  <Card.Title as="h5">{metval1[0].Restaurant}</Card.Title>
                              </div>
                          </Card.Footer>
                      </Card>
                  </Col>
                  <Col lg="3" sm="6">
                      <Card className="card-stats">
                          <Card.Body>
                              <Row>
                                  <Col xs="5">
                                      <div className="icon-big text-center icon-warning">
                                          <img alt="misc" height="100px" width="150px" src={misc} />
                                      </div>
                                  </Col>
                                  <Col xs="7">
                                      <div className="numbers">
                                          <p className="card-category">House Expense</p>
                                          <Card.Title as="h4">{metval[0].Miscellaneous}</Card.Title>
                                      </div>
                                  </Col>
                              </Row>
                          </Card.Body>
                          <Card.Footer>
                              <hr></hr>
                              <div className="stats">
                                  <p className="card-category">Last Month:</p>
                                  <Card.Title as="h5">{metval1[0].Miscellaneous}</Card.Title>

                              </div>
                          </Card.Footer>
                      </Card>
                  </Col>
              </Row>
 
 
 
 
 
 
 
 
 
 
 */