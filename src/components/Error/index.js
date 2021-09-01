export default function ErrorView({ text }) {
  return (
    <div
      style={{
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2.5rem 0"
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}
