export const Counter = ({ likes, theme }) => (
    <div style={{width: '100%', display: "flex", alignItems: "center", justifyContent: "center", background: theme.backgroundColorTotal}}>
      <h1>Total Likes: {likes}</h1>
    </div>
  );