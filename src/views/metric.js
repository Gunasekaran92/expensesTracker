
import React, { useEffect, useState } from "react";
import ChickenlegPiece from "./ChickenlegPiece.png";
import vegetable from "./vegetable.png";
import restaurant from "./restaurant.png";
import misc from "./misc.png";
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
export default function GetMetricData() {


    const [metric, setMetric] = useState(null);

    useEffect(() => {

        fetch('https://exp-app.azurewebsites.net/metric')
            .then(data1 => data1.json())
            .then(items => {

                setMetric(items)

            })

    }, []);



    const [metric1, setMetric1] = useState(null);

    useEffect(() => {

        fetch('https://exp-app.azurewebsites.net/metricO')
            .then(data1 => data1.json())
            .then(items => {

                setMetric1(items)

            })

    }, [])


    

    return (
        <>
            <Container fluid>


                <Row>
                    <Col lg="3" sm="6">
                        <Card className="card-stats">
                            <Card.Body>
                                <Row>
                                    <Col xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <img alt="vegetable" height="100px" width="140px" src={vegetable} />
                                        </div>
                                    </Col>
                                    <Col xs="7">
                                        {metric && <div className="numbers">
                                            <p className="card-category">Vegetables</p>
                                            <Card.Title as="h4">{metric[0].Vegetables}</Card.Title>
                                        </div>}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>
                                {metric1 && <div className="stats">
                                    <p className="card-category">Last Month:</p>
                                    <Card.Title as="h5">{metric1[0].Vegetables}</Card.Title>
                                </div>}
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
                                        {metric && <div className="numbers">
                                            <p className="card-category">Chicken</p>
                                            <Card.Title as="h4">{metric[0].Meat}</Card.Title>
                                        </div>}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>

                                {metric1 && <div className="stats">
                                    <p className="card-category">Last Month:</p>
                                    <Card.Title as="h5">{metric1[0].Meat}</Card.Title>

                                </div>}
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
                                        {metric && <div className="numbers">
                                            <p className="card-category">Restaurant</p>
                                            <Card.Title as="h4">{metric[0].Restaurant}</Card.Title>
                                        </div>}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>
                                {metric1 && <div className="stats">
                                    <p className="card-category">Last Month:</p>
                                    <Card.Title as="h5">{metric1[0].Restaurant}</Card.Title>
                                </div>}
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
                                        {metric && <div className="numbers">
                                            <p className="card-category">House Expense</p>
                                            <Card.Title as="h4">{metric[0].Miscellaneous}</Card.Title>
                                        </div>}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>
                                {metric1 && <div className="stats">
                                    <p className="card-category">Last Month:</p>
                                    <Card.Title as="h5">{metric1[0].Miscellaneous}</Card.Title>

                                </div>}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </>
        )


}
