import ContentTreeMap from "../../components/home/ContentTreemap";

function HomePage() {
  const boxStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "55px",
    margin: "20px",
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(210px, auto)",
        gap: "20px",
      }}
    >
      <div
        className="box3"
        style={{ ...boxStyle, gridColumn: "span 3", gridRow: "span 3" }}
      >
        <ContentTreeMap />
      </div>
    </div>
  );
}

export default HomePage;
