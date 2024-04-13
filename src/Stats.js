import React from "react";

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const totalPercentage = Math.round((totalPacked / totalItems) * 100);

  return (
    <footer className="stats">
      {totalPercentage === 100 ? (
        <em>You got everything! Ready to go 🛫</em>
      ) : (
        <em>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {totalPacked} ({totalItems ? totalPercentage : 0}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
