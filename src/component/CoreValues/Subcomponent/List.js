export const List = ({ content }) => (
  <ul>
    {content.map((item, index) => (
      <li>
        <h2>{item.header}</h2>
        <h3>{item.desc}</h3>
      </li>
    ))}
  </ul>
);
