import emojiList from "./emojiList.json";


const Filter = {};

Filter.filterEmoji = function (searchText, maxResults) {
  const sliceArray = emojiList.letterArray.slice(0, maxResults);
  return sliceArray;
}

Filter.getWordLetter = function (index) {
  const letterObj = emojiList.wordList[index];
  return letterObj;
}

Filter.getGameType = function(){
  const gameTypeList = emojiList.gameTypeList;
  return gameTypeList;
}
export default Filter;