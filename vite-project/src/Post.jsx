export function Post(props) {
  return (
    <>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
      {/* sempre que eu usar um codigo js em tags html é preciso usar chaves {} */}
    </>
  );
}
