import { Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <container
        className="text-white d-flex justify-content-center 
          align-items-center"
      >
        <row>
          <Col>
            <div className="title">WATCH YOUR FAVORITE</div>
            <div className="title2">FILM FOR FREE</div>
            <div className="introButton mt-4 text-center">
              <button utton className="klik" >
                SEE ALL
              </button>
            </div>
          </Col>
        </row>
      </container>
    </div>
  );
};

export default Intro;
