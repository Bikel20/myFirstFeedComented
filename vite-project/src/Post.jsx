export function Post(props) {
  return (
    <>
    {/* sempre que se usar uma variavel js em tags html é preciso usar chaves {} */}
      <strong>{props.author}</strong>
      <p>{props.content}</p>
      
    </>
  );
}
