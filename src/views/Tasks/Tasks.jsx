import { useTranslation } from "react-i18next";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./Tasks.styles.scss";

const Tasks = () => {
  const { t } = useTranslation();

  return (
    <div className="tasks-sector">
      <section className="tasks-sector_title">
        <h2>{t("expected_tasks.title")}</h2>
        <p>{t("expected_tasks.description")}</p>
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
