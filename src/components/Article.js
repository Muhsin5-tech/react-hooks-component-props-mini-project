import React from 'react';

function Article({ title, date = "January 1, 1970", preview, timeToRead }) {
  // Function to calculate "minutes to read" display
  const renderTimeToRead = (time) => {
    const roundedTime = Math.ceil(time / (time < 30 ? 5 : 10)) * (time < 30 ? 5 : 10);
    const emoji = time < 30 ? '☕️' : '🍱';
    const repeatEmoji = emoji.repeat(roundedTime / (time < 30 ? 5 : 10));
    return `${repeatEmoji} ${roundedTime} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderTimeToRead(timeToRead)}</p>
    </article>
  );
}

export default Article;
