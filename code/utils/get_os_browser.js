function getOs() {
  const agent = navigator.userAgent;
  if (agent.indexOf('Win') >= 0) return 'Windows';
  if (agent.indexOf('Mac') >= 0) return 'macOS';

  return '';
}

console.log(getOs());
