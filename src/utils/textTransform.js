const textTransform = (text, transform) => {
  switch (transform) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    case 'titleize':
      return text
        .split(' ')
        .map(
          word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
        )
        .join(' ');

    default:
      return text;
  }
};

export default textTransform;
