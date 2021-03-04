import Input from "../components/Input";
const InputPage = (props) => {
  return (
    <>
      <h3>{props.pageTitle}</h3>
      <div className="card">
        <div className="card-header">
          <h5>Pick your size</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>
              {`<Input size="small" />`} {`<Input size="medium" />`}{" "}
              {`<Input size="large" />`}
            </code>
          </pre>
          <Input size="small" placeholder="small" />
          <Input size="medium" placeholder="medium" />
          <Input size="large" placeholder="large" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Lebel</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Input label="Label" />`}</code>
          </pre>
          <Input label="Label" id="label1" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Error</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Input label="Label" error />`}</code>
          </pre>
          <Input label="Label" error id="label2" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Types</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Input type="text" label="Input text" />`}</code>
          </pre>
          <Input label="Input text" type="text" id="label3" />
          <Input label="Input email" type="email" id="label4" />
          <Input label="Input file" type="file" id="label5" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Input with icons</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Input type="text" label="Input text" />`}</code>
          </pre>
          <Input label="Input start icon" id="label6" startIcon="call" />
          <Input label="Input end icon" id="label7" endIcon="lock" />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5>Input with Helpertext</h5>
        </div>
        <div className="card-body">
          <pre>
            <code>{`<Input type="text" label="Input text" helpertext="Some interesting text" />`}</code>
          </pre>
          <Input
            label="Input text"
            id="label8"
            helpertext="Some interesting text"
          />
        </div>
      </div>
    </>
  );
};

export default InputPage;
