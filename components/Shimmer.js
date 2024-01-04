const shimmer = ()=>{
    return (
      <div className="Restaurant-list">
        {Array(15).fill("")
          .map((e) => (
            <div className="shimmer-card"></div>
          ))}
      </div>
    );
}

export default shimmer;