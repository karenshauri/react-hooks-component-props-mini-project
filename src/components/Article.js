import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadIndicator(minutes) {
    let indicator = "";
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      indicator = "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(minutes / 10);
      indicator = "🍱".repeat(bentos);
    }
    return `${indicator} ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{getReadIndicator(minutes)} • {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
