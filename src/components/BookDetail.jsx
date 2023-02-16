import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img className="book-cover" src={bookSelected.imageUrl} alt="book selected" />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              <Button
                color="primary"
                onClick={() => {
                  console.log("Questo è il dispatch da BookDetail");
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: bookSelected
                  });
                }}
              >
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Start by clicking on a book!</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default BookDetail;
