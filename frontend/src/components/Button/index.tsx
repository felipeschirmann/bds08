import "./style.css";

type Props = {
  text: string;
}

function Button( { text }: Props ) {
  return (
      <button className="btn btn-primary" type="submit">
        <h6>{text}</h6>
      </button>
  );
}

export default Button;
