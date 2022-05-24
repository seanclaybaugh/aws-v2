function Application() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100Vh",
        fontFamily: "sans-serif",
        padding: "5Vh",
      }}
    >
      <h1 style={{ color: "red" }}>LOST CAT</h1>
      <h2 style={{ color: "red" }}>REWARD OFFERED</h2>
      <h2>Contact (925) 786-2402</h2>
      <div>
        <h3>Name: Saoirse</h3>
        <h3>Breed: Female Black Domestic Shorthair</h3>
        <h3>Green Eyes - Black fur with a white tuft on the lower belly </h3>
      </div>
      <h3 style={{ color: "red" }}>Please call and do not approach! </h3>
      <img src={require("./SAOIRSE.png")} alt={'Missing Cat - 925-786-2402'} style={{ height: 600, width: 350, borderRadius: 12 }} />
    </div>
  );
}

export default Application;
