function Space({ size }) {
  var spc = [];
  for (let i = 0; i < size; i++) {
    spc.push(
      <div
        className="pt-5 pb-5"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0)",
        }}
      ></div>
    );
  }
  return spc;
}

export default Space;
