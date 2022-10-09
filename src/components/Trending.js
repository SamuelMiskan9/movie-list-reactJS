import { Card, Container, Row, Col, Image } from "react-bootstrap";
import topgunImage from "../assets/trending/topgun.jpg";
import minionImage from "../assets/trending/minion.jpg";
import trainImage from "../assets/trending/train.jpg";
import blackImage from "../assets/trending/black.jpg";
import northmanImage from "../assets/trending/northman.jpg";
import jujutsuImage from "../assets/trending/jujutsu.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-trending">Trending Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={topgunImage} alt="Topgun Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Top Gun</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={minionImage} alt="Topgun Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">
                    Minion - Rise of Gru
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={trainImage} alt="Topgun Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Bullet Train</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={blackImage}
                alt="Blackphone Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Black Phone</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={northmanImage}
                alt="Northman Movie"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">Northman</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={jujutsuImage}
                alt="Jujutus Kaisen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white ">
                  <Card.Title className="text-center">
                    Jujutsu Kaisen Movie 0
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
