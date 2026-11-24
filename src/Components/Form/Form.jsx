import "./Form.css";

export default function Form() {
  return (
    <>
      <form className="form__color-picker">
        <div className="form-field">
          <label htmlFor="role">Role</label>
          <input type="text" name="role" id="role" />
        </div>
        <div className="form-field">
          <label htmlFor="hex">Hex</label>
          <input type="color" name="hex" id="hex" />
        </div>
        <div className="form-field">
          <label htmlFor="contrast-text">Contract Text</label>
          <input type="color" name="contrast-text" id="contrast-text" />
        </div>
      </form>
    </>
  );
}
