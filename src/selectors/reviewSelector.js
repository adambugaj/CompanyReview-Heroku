

export default (review, { text }) => {
  console.log(review, text);
  return review.filter((rev) => {
    const textMatch = rev.companyName.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};
