function firstOfLocation(location) {
  if (!location) return;
  return location.pathname.split('/').filter(x => x !== '')[0];
}

export { firstOfLocation };
