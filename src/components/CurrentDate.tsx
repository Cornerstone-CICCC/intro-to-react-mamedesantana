type CurrentDateProps = {
  date: string;
};

function CurrentDate({ date }: CurrentDateProps) {
  return (
    <header className="date-section">
      <p>
        Today's Date: <strong>{date}</strong>
      </p>
    </header>
  );
}

export default CurrentDate;