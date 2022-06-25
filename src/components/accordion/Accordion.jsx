import ExerciseAccordionItem from "./ExerciseAccordionItem";
const Accordion = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && (
        <Accordion allowMultiple p={50}>
          {data.map((val, key) => (
            <ExerciseAccordionItem ex={val} key={key} />
          ))}
        </Accordion>
      )}
    </>
  );
};

export default Accordion;
