import "./TextDisplay.css";

const TextDisplay = ({ text, numberOfLetters }) => {
  const displayText =
    text.length > numberOfLetters
      ? text.slice(0, numberOfLetters) + "..."
      : text;

  return (
    <div className="text-display-container">
      <p>{displayText}</p>
    </div>
  );
};

export default TextDisplay;
