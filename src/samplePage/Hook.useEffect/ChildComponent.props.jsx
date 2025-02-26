export const ChildComponent = ({ title, content }) => {
  // console.log(props);
  return (
    <div className="card">
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};
