import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { instance } from "../assets/common";
import Card from "./Card";
import Input from "./Input";
import Loading from "./Loading";

function List() {
  const [playerList, setplayerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState(true);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getList = async () => {
      const data = await instance.get("/");

      if (data.status === 200) {
        setplayerList(data.data.playerList);
      } else {
        setplayerList([]);
      }

      sortAscending();
      setLoading(false);
    };

    getList();
  }, []);

  const sortAscending = () => {
    setplayerList((prev) => {
      const playerList = prev;
      playerList.sort((a, b) => a.PFName.localeCompare(b.PFName));
      return playerList;
    });
  };

  const sortDescending = () => {
    setplayerList((prev) => {
      const playerList = prev;
      playerList.sort((a, b) => a.PFName.localeCompare(b.PFName)).reverse();
      return playerList;
    });
  };

  const sortingData = () => {
    if (sorting) {
      sortDescending();
    } else {
      sortAscending();
    }

    setSorting((prev) => !prev);
  };

  function getFilteredList() {
    if (!inputText) {
      return playerList;
    }

    return playerList.filter(
      (item) =>
        item.PFName.toLowerCase().includes(inputText.toLowerCase()) ||
        item.TName.toLowerCase().includes(inputText.toLowerCase())
    );
  }

  const handleChangeText = (val) => {
    setInputText(val);
  };

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [inputText, playerList]);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="px-4 py-2 mb-3">
        <div className=" flex flex-row items-center ">
          <button className="px-3 py-1 bg-sky-400 m-2" onClick={sortingData}>
            {sorting ? "Ascending" : "Descending"}
          </button>

          <Input
            placeholder="Search Player"
            value={inputText}
            onChange={handleChangeText}
          />
        </div>
        <h1 className="text-2xl font-bold mt-2">Players List</h1>
      </div>

      {filteredList && filteredList.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-flow-row auto-rows-max mx-5">
          {filteredList.map((player) => (
            <Card key={player.Id} player={player} />
          ))}
        </div>
      ) : (
        <div className="mx-5">
          <p>No Player Found!</p>
        </div>
      )}
    </div>
  );
}

export default List;
