export function getItems(data, count) {
  data = shuffle(data);
  return data.slice(0, count); 
}

export function shuffle(data) {
  for (var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], data[i] = data[j], data[j] = x);
  return data;
}