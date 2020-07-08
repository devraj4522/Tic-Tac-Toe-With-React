import React, { useState } from 'react';
import logo from './logo.svg';
import Icon from './components/icon'
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [pointCross, setPointCross] = useState(0);
  const [pointCircle, setPointCircle] = useState(0);

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[0]} won`, { type: "success" });
      (itemArray[0] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1))
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
      toast(`${itemArray[3]} won`, { type: "success" });
      (itemArray[3] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1));
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
      toast(`${itemArray[6]} won`, { type: "success" });
      (itemArray[6] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1));
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[0]} won`, { type: "success" });
      (itemArray[0] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1));
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
      toast(`${itemArray[1]} won`, { type: "success" });
      (itemArray[1] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1))
    } else if (
      itemArray[2] !== "empty" &&

      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
      toast(`${itemArray[2]} won`, { type: "success" });
      (itemArray[2] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1))
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[4]} won`, { type: "success" });
      (itemArray[0] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1))
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
      toast(`${itemArray[2]} won`, { type: "success" });
      (itemArray[2] === "cross" ? setPointCross(pointCross + 1) : setPointCircle(pointCircle + 1))
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <h1 className="text-center ">
        TIC TAC TOE
      </h1>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h2 className="text-success text-uppercase text-center">
                {winMessage}
              </h2>
              <Button color="success" block onClick={reloadGame}>
                Start Again!
              </Button>
            </div>
          ) : (
              <div className="mb-2 mt-2">
                <h2 className="text-center text-warning">
                  {isCross ? "Cross" : "Circle"} turns
            </h2>
                <Button block onClick={reloadGame}>
                  Start Again!
          </Button>
              </div>
            )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className={"box " + (item)}>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
        <Col className="my-auto">
          <Button color="success point col-12 mt-3" >
           Circle= {pointCircle}
          </Button>
          <Button color="success point col-12 my-3">
            Cross = {pointCross}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
