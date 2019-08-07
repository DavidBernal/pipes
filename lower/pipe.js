module.exports = async function(chunk /* buffer */, encoding, ...args) {
  return chunk.toString().toLowerCase();
};
