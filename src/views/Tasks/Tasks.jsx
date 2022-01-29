import TaskCard from "../../components/TaskCard/TaskCard";
import "./Tasks.styles.scss";

const Tasks = () => {
  return (
    <div className="tasks-sector">
      <section className="tasks-sector_title">
        <h1>Tasks that you can expect to solve</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </section>
      <TaskCard
        color="green"
        tag="Web Development"
        techs={["HTML", "CSS", "Javascript"]}
      />
      <TaskCard color="blue" tag="Mobile Development" techs={["CSS"]} />
      <TaskCard color="green" tag="Backend Development" techs={["NodeJS"]} />
    </div>
  );
};

export default Tasks;
