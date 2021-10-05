import "../index.css";

function Box(props) {
  return <div className={"sidebar"}>{props.children}</div>;
}

export default function MainPage() {
  return (
    <div className={"container"}>
      <Box>
          <h1>Main Application</h1>
          <p>Welcome!</p>
      </Box>
    </div>
  );
}
