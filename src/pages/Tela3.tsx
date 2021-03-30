/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { Frame, Header, Button } from "agrotis-ui";
import { useDebounce } from "../hooks/useDebounce";

const Tela1: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchBar, setSearchBar] = React.useState(false);

  const history = useHistory();

  const debounce = useDebounce(searchQuery, 2000);

  React.useEffect(() => {
    if (searchQuery) {
      handleUpdateSearch("search", searchQuery);
    }
  }, [debounce]);

  const handleUpdateSearch = (name: string, value: string) => {
    let searchParams = queryString.parse(history.location.search);

    searchParams = {
      ...searchParams,
      [name]: value,
    };

    history.replace({ search: queryString.stringify(searchParams) });
  };

  return (
    <Frame>
      <Header
        onClickBack={() => history.goBack()}
        title="Tela 3"
        searchBar={{
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value),
          value: searchQuery,
          open: searchBar,
          toggleOpen: () => setSearchBar(!searchBar),
        }}
      />
      <div
        style={{
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <Button onClick={() => history.push("3")}>Próxima tela</Button>
      </div>
    </Frame>
  );
};

export default Tela1;
