interface Props {
  className?: string;
}

const Divider = ({ className }: Props) => {
  return (
    <svg
      className={`bg-accent-gradient opacity-30 ${className}`}
      width="100%"
      height={1}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1={10} y1={10} x2={90} y2={90} strokeWidth={1} />
    </svg>
  );
};

export default Divider;
