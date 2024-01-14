interface LineTopProps {
  styleProps?: string;
}

const LineTop: React.FC<LineTopProps> = ({ styleProps = 'bg-lineColor2' }) => {
  return (
    <div
      className={`${styleProps} flex w-full h-1 relative justify-end mt-4 sm:mt-0`}
    >
      <div className={`${styleProps} w-3 h-3 relative`}>
        <div></div>
      </div>
    </div>
  );
};

export default LineTop;
