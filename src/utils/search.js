const filter = (data = [], searchText = "") => {
  if (!data.length) {
    return data;
  }
  if (!searchText.length) {
    return data;
  }
  searchText = searchText.trim().toLowerCase();
  console.log(searchText);
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let currentItem = data[i].name.toLowerCase();
    let replacedItem = currentItem.replace(searchText, "");
    if (replacedItem.length < currentItem.length) {
      result.push(data[i]);
    }
  }
  return result;
};

export default filter;
