import "./TaskCard.styles.scss";

const TaskCard = ({ color = "green", tag, techs }) => {
  return (
    <div
      className="task-card"
      style={{
        borderLeft: "5px solid" + (color === "green" ? " #377c13" : " #1484a5"),
      }}
    >
      <section className="task-card_info">
        <h4>Login Page</h4>
        <p>Build a login page with CSS, HTML and Javascript</p>
      </section>
      <section className="task-card_tech">
        <span
          style={{
            color: color === "green" ? "#377c13" : "#1484a5",
          }}
        >
          {tag}
        </span>
        <p>{techs.join(" ")}</p>
      </section>
    </div>
  );
};

export default TaskCard;
