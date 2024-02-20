// Person component
// priima first name ir lastname abu stringai

// jsx  atvaizduojam su siek tiek stiliaus varda ir pavarde

// importuojam i app.tsx

// priima objekta kuris turi first name ir last name abu stringai

type PersonProps = {
  firstName: string;
  lastName: string;
};

function Person(props: PersonProps) {
  return (
    <h3 className='fw-bold alert alert-dark'>
      {props.firstName} {props.lastName}
    </h3>
  );
}

export default Person;
