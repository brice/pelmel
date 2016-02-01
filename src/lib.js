export function getItems(data, count) {
  shuffle(data);
  return data.slice(0, count); 
}

export function shuffle(data) {
  let result = data;
  for (var j, x, i = data.length; i; j = parseInt(Math.random() * i), x = data[--i], result[i] = data[j], result[j] = x);
  return result;
}