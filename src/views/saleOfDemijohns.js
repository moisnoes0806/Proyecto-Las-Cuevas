import React, { useMemo, useState } from 'react'
import { Card, Col, Row, Button, message } from "antd";
import dispenser from "../assets/dispenser.jpeg";
import littleBlue from "../assets/littleBlue.jpeg";
import littlePurple from "../assets/littlePurple.jpeg";
import pink from "../assets/pink.jpeg";
import purple from "../assets/purple.jpeg";
import red from "../assets/red.jpeg";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

const demijohns = [
    {
        src: dispenser,
        price: 200,
        name: "Dispensador de agua",
    },
    {
        src: littleBlue,
        price: 40,
        name: "Botella azul",
    },
    {
        src: littlePurple,
        price: 40,
        name: "Botella morada",
    },
    {
        src: pink,
        price: 100,
        name: "Garrafon azul",
    },
    {
        src: purple,
        price: 100,
        name: "Garrafon morado",
    },
    {
        src: red,
        price: 110,
        name: "Garrafon rojo",
    },
];

const SaleOfDemijohns = () => {
    const [productsCar, setProductsCar] = useState([])

    const addToCar = (product) => setProductsCar([...productsCar, product]);
    
    const deleteToCard = (index) => setProductsCar(productsCar.filter((_, i) => i !== index));

    const total = useMemo(() => productsCar.reduce((a, b) => a + b.price, 0), [productsCar]);
    
    return (
        <div style={{ marginTop: "-50vh", height: "20vh", width: "100%" }}>
            <Row gutter={20}>
                <Col xs={24} md={8}>
                    <Card>
                        <h2>Carrito de compras</h2>

                        {
                            productsCar.map((productsCar, i) => (
                                <Row key={i}>
                                    <Col xs={12}>
                                        {productsCar.name}
                                    </Col>
                                    <Col xs={4}>
                                        {productsCar.price}
                                    </Col>
                                    <Col xs={6}>
                                        <img
                                            alt={"imagen garragon" + i}
                                            src={productsCar.src}
                                            style={{ maxHeight: "50px", objectFit: "contain" }}
                                        />
                                    </Col>
                                    <Col xs={2}>
                                        <Button
                                            style={{backgroundColor: "red", color: "white"}}
                                            icon={<DeleteOutlined />}
                                            onClick={() => deleteToCard(i)}
                                        />
                                    </Col>
                                </Row>
                            ))
                        }
                        <Button
                            disabled={!productsCar.length}
                            type='primary'
                            onClick={() => {
                                message.success("Compra realizada con exito!", 5);
                                setProductsCar([]);
                            }}
                        >
                            Terminar venta, Total: { total }
                        </Button>
                    </Card>
                </Col>
                <Col xs={24} md={16}>
                    <Card>
                        <h2>Lista de garrafones</h2>
                        <Row gutter={10}>
                            {
                                demijohns.map((demijohn, index) => (
                                    <Col key={index} style={{ margin: 5 }}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={
                                                <img
                                                    alt={"imagen garragon" + index}
                                                    src={demijohn.src}
                                                    style={{ maxHeight: "150px", objectFit: "contain" }}
                                                />
                                            }
                                        >
                                            <Meta
                                                title={demijohn.name}
                                                description={
                                                    <Row justify="space-between">
                                                        <Col>
                                                            {
                                                                Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(demijohn.price)
                                                            }
                                                        </Col>
                                                        <Col>
                                                            <Button
                                                                type="primary"
                                                                icon={<PlusOutlined />}
                                                                onClick={() => addToCar(demijohn)}

                                                            />
                                                        </Col>

                                                    </Row>
                                                }
                                            />
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default SaleOfDemijohns;