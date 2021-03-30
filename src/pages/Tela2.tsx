/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { Frame, Header, Button } from "agrotis-ui";
import { useDebounce } from "../hooks/useDebounce";

const Tela2: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchBar, setSearchBar] = React.useState(false);

  const history = useHistory();

  const debounce = useDebounce(searchQuery, 2000);

  React.useEffect(() => {
    handleUpdateSearch("search", searchQuery);
  }, [debounce]);

  const handleUpdateSearch = (name: string, value?: string | number) => {
    let searchParams = queryString.parse(history.location.search);

    if (value) {
      searchParams = {
        ...searchParams,
        [name]: value.toString(),
      };
    } else {
      delete searchParams[name];
    }

    history.replace({ search: queryString.stringify(searchParams) });
  };

  return (
    <Frame>
      <Header
        onClickBack={() => history.goBack()}
        title="Tela 2"
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
        <Button
          variant="text"
          onClick={() =>
            handleUpdateSearch("usuario", "8128a21e042b59f7f00fe825bf58a2c5")
          }
        >
          Adicionar filtro de usuario
        </Button>
        <Button variant="text" onClick={() => handleUpdateSearch("usuario")}>
          Remover filtro de usuario
        </Button>
        <Button color="primary" onClick={() => history.push("3")}>
          Próxima tela
        </Button>
      </div>
    </Frame>
  );
};

export default Tela2;
