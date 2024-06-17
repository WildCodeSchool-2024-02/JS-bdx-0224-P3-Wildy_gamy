import { Form } from "react-router-dom";

function Test() {
  return (
    <Form method="POST">
      <label htmlFor="favoriteCheckbox">test</label>
      <input type="checkbox" id="favoriteCheckbox" name="favoriteCheckbox" />
    </Form>
  );
}
export default Test;
