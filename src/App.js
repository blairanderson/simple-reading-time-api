import React from "react";
import "./styles.css";
import ReadingTime from "./reading-time";

export default function App() {
  const [readingSpeed, changeReadingSpeed] = React.useState(200);
  const [text, changeText] = React.useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  );

  const readingTime = ReadingTime(text);

  return (
    <div className="App">
      <h1>Reading Time API</h1>
      <h2>Enter some Text to estimate the Reading Time!</h2>

      <Container>
        <Row>
          <Col>
            <label htmlFor="input-text">Input Text</label>
            <textarea
              id="input-text"
              className="form-control"
              value={text}
              onChange={e => changeText(e.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="reading-speed">Average Reading Speed WPM</label>
            <input
              type="number"
              id="reading-speed"
              value={readingSpeed}
              className="form-control"
              onChange={e => changeReadingSpeed(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="mt-3">Reading Time: {readingTime.text}</h1>
            {readingTime.text && (
              <>
                <textarea
                  className="mt-3 form-control"
                  readOnly
                  rows={6}
                  value={JSON.stringify(readingTime, null, 4)}
                />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://readingtimeapi.netlify.app/.netlify/functions/reading-time?text=${text}`}
                  className="d-block mt-3 btn btn-lg btn-outline-primary"
                >
                  Try The API
                </a>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Container(props) {
  return <div className="container">{props.children}</div>;
}

function Row(props) {
  return <div className="row">{props.children}</div>;
}

function Col(props) {
  return <div className="col">{props.children}</div>;
}
