const Repository = ({result, theme}) => (
    <div key={result.id} 
      style={{
        background: theme.backgroundColorTotal, 
        margin: '20px', borderRadius: '5px', 
        padding: '20px', display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
      <div>
        <a
          href={result.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {result.full_name}
        </a>
        {" - "}
        <strong>{result.stargazers_count}</strong>
      </div>
      <p>{result.description}</p>
    </div>
  );
  
  export { Repository };