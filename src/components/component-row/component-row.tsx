// ComponentRow.tsx
const ComponentRow = ({ components }) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {components.map(({ Component, props }, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <Component {...props} />
        </div>
      ))}
    </div>
  );
  
  export default ComponentRow;
  