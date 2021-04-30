export const Button = (props) => (
    <button
      onClick={() => props.setTotalLikes(props.totalLikes + 1)}
      style={{	
        position:'fixed',
        width:"60px",
        height:"60px",
        bottom:"40px",
        right:"40px",
        backgroundColor:"#126e82",
        color:"#FFF",
        borderRadius:"50px",
        textAlign:"center",
        border: "none",
        fontSize: "50px",
        cursor: "pointer"
        }}
    >
      +
    </button>
  );