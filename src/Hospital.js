function Hospital(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.state}</h2>
      <h2>{props.municipality}</h2>
    </div>
  );
}

export default Hospital;
