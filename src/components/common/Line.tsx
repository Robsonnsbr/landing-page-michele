interface LineProps {
  style?: string;
}

const Line: React.FC<LineProps> = ({ style = 'bg-lineColor2' }) => {
  return (
    <div className={`${style} flex w-full h-1 relative justify-end`}>
      <div className={`${style} w-3 h-3 relative`}>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Line;
