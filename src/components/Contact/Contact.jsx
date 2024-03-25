import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div className="movie_list">
      <h2
        style={{
          margin: "2rem",
          padding: 0,
        }}
      >
        Contact
      </h2>
      <Col
        xs={12}
        lg={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>

        <p style={{ textAlign: "center" }}>+4670-000 00 00</p>

        <p style={{ textAlign: "center" }}>mail@company.com</p>
      </Col>
    </div>
  );
}

export default Contact;
