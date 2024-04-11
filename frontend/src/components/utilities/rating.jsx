import React, { useEffect } from "react";

function Rating({ rates }) {
  const value = [];
  useEffect(() => {
    for (let i = 0; i < rates; i++) {
      value.push(i);
    }
  }, [rates]);

  return (
    <div className="flex items-center gap-1 text-sm">
      {value.forEach((rate, index) => (
        <div key={index}>
          <span class="material-icons-round">star_rate</span>
        </div>
      ))}
    </div>
  );
}

export default Rating;
