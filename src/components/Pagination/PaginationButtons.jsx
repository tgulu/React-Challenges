function PaginationButtons({ prev, next, onNavigate }) {
  return (
    <div>
      {prev && <button onClick={() => onNavigate(prev)}>Previous</button>}
      {next && <button onClick={() => onNavigate(next)}>Next</button>}
    </div>
  );
}

export default PaginationButtons;
