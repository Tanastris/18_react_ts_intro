//

type GreetProps = {
  name: string;
  amount: number;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h3 className='alert alert-secondary'>
        Hello there {props.name}, you have won {props.amount} dollars
      </h3>
    </div>
  );
}

export default Greet;
