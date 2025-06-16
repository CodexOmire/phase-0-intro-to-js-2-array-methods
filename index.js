// Initial array of kittens
const kittens = ["Milo", "Otis", "Garfield"];

// Destructive functions (modify the original array)

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// Non-destructive functions (do NOT modify the original array)

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}

// Export all functions and kittens array
export {
  kittens,
  destructivelyAppendKitten,
  destructivelyPrependKitten,
  destructivelyRemoveLastKitten,
  destructivelyRemoveFirstKitten,
  appendKitten,
  prependKitten,
  removeLastKitten,
  removeFirstKitten
};
