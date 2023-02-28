import SearchInput from "./components/SearchInput.js";
import { LangApi } from "./api/LangApi.js";
import Suggestion from "./components/Suggestion.js";
import SelectedLanguage from "./components/SelectedLanguage.js";
export default function App($target) {
  this.state = {
    fetchedLang: [],
    selectedLang: [],
  };
  this.setState = (next) => {
    this.state = {
      ...this.state,
      ...next,
    };
    suggestion.setState({
      selectedIdx: 0,
      items: this.state.fetchedLang,
    });
    selectedLanguage.setState(this.state.selectedLang);
  };
  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (value) => {
      if (value.length === 0) {
        this.setState({
          fetchedLang: [],
        });
      } else {
        const langList = await LangApi(value);
        this.setState({
          fetchedLang: langList,
        });
      }
    },
  });
  const suggestion = new Suggestion({
    $target,
    initialState: { selectedIdx: 0, items: [] },
    onSelect: (value) => {
      alert(value);
      const list = this.state.selectedLang;
      const idx = list.findIndex((lang) => lang === value);

      if (idx !== -1) {
        list.splice(idx, 1);
      }
      list.push(value);
      if (this.state.selectedLang.length > 5) {
        list.shift();
      }
      this.setState({
        ...this.state,
        selectedLang: list,
      });
    },
  });
  const selectedLanguage = new SelectedLanguage({ $target, initialState: [] });
}
