export default function index({str, onClick: setCategory}) {
  return (
    <p onClick={() => setCategory(str)}>
      <label>
        <input name="group1" type="radio" />
        <span>{str}</span>
      </label>
    </p>
  );
}
