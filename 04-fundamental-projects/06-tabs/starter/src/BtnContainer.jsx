const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <div key={item.id} className={index === currentItem ? 'job-btn active-btn':'job-btn'} onClick={() => setCurrentItem(index)}>
            {item.company}
          </div>
        );
      })}
    </div>
  );
};

export default BtnContainer;
