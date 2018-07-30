// Ensures string values are safe to be used within a <script> tag.

function safeSerialize(data) {
  return data ? JSON.stringify(data).replace(/\//g, '\\/') : 'undefined';
}