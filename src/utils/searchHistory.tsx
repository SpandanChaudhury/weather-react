export default function handleSearchHistory(inputQuery: string) {
    // let history = "";
  if (localStorage.getItem("searchHistory")) {
    let history = JSON.parse(localStorage.getItem("searchHistory") || "");
    let index = history.indexOf(inputQuery);
    // item is not present in the history => remove the last item from array and push the latest search to the top of the array
    // item is present in the history => remove the item from the array and add it to the top and push the other elements

    if(index != -1)
        history.splice(index, 1);
    if(history.length >= 3 && index == -1)
        history.pop();
    history.unshift(inputQuery);
    localStorage.setItem("searchHistory", JSON.stringify(history));

  } else {
    let history: string[] = [];
    history.push(inputQuery);
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }
}
