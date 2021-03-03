import Button from "../components/Button";
const ButtonPage = (props) => {
  return (
    <>
      <h3>{props.pageTitle}</h3>
      <div className="card">
        <div className="card-header">
          <h5>Pick your color</h5>
        </div>
        <pre>
          <code>{`<Button color="primary" />`}</code>
        </pre>
        <Button text="Default" />
        <Button text="Primary" color="primary" />
        <Button text="Success" color="success" />
        <Button text="Danger" color="danger" />
        <Button text="Warning" color="warning" />
        <Button text="Info" color="info" />
        <Button text="Dark" color="dark" />
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Pick your variant</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Button variant="outline" />`}</code>
          </pre>
          <Button text="Default" variant="outline" />
          <Button text="Primary" color="primary" variant="outline" />
          <Button text="Success" color="success" variant="outline" />
          <Button text="Danger" color="danger" variant="outline" />
          <Button text="Warning" color="warning" variant="outline" />
          <Button text="Info" color="info" variant="outline" />
          <Button text="Dark" color="dark" variant="outline" />
          <Button text="Default" variant="text" />
          <Button text="Primary" color="primary" variant="text" />
          <Button text="Success" color="success" variant="text" />
          <Button text="Danger" color="danger" variant="text" />
          <Button text="Warning" color="warning" variant="text" />
          <Button text="Info" color="info" variant="text" />
          <Button text="Dark" color="dark" variant="text" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Pick your size</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Button size="small" />`}</code>
          </pre>
          <Button text="Small" size="small" />
          <Button text="Medium" size="medium" />
          <Button text="Large" size="large" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Buttons with icons</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>
              {`<Button startIcon="favorite" />`}{" "}
              {`<Button endIcon="favorite" />`} {`<Button icon="favorite" />`}
            </code>
          </pre>
          <Button text="Start Icon" color="primary" startIcon="favorite" />
          <Button text="End Icon" color="success" endIcon="favorite" />
          <Button
            text="Start Icon"
            color="warning"
            variant="outline"
            startIcon="add_shopping_cart"
          />
          <Button
            text="End Icon"
            color="danger"
            variant="outline"
            endIcon="add_shopping_cart"
          />
          <Button color="dark" variant="text" icon="assignment" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Disabled shadow</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Button disableShadow />`}</code>
          </pre>
          <Button text="Disabled shadow" color="primary" disableShadow />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Disabled buttons</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Button disableShadow disabled />`}</code>
          </pre>
          <Button text="Disabled" disableShadow disabled />
          <Button text="Disabled" color="primary" disableShadow disabled />
          <Button text="Disabled" color="success" disableShadow disabled />
          <Button text="Disabled" color="danger" disableShadow disabled />
          <Button text="Disabled" color="warning" disableShadow disabled />
          <Button text="Disabled" color="info" disableShadow disabled />
          <Button text="Disabled" color="dark" disableShadow disabled />
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
