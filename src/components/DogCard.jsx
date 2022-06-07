import { Link } from "react-router-dom";

const DogCard = ({ client }) => {
  return (
    <div>
      <div>
        <Link to={`clients/${client.id}`}>
          <h2>{client.name + " " + client.firstName}</h2>
        </Link>
      </div>
      {client.dogs.map((dog) => (
        <div>
          <Link to={`dogs/${dog.id}`}>{dog.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default DogCard;
