var pokemonRepository = (function() {
  var repository = [
    { name: "Dugtrio", height: 2, types: ["ground"] },
    { name: "Meowth", height: 1, types: ["normal"] },
    { name: "Mankey", height: 1, types: ["fighting"] },
    { name: "Charizard", height: 5, types: ["fire", "flying"] }
  ];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

var pokemonList = document.querySelector(".pokemon-list");
pokemonRepository.getAll().forEach(function(pokemon) {
  var $listItem = document.createElement("li");
  var button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("my-class");
  $listItem.appendChild(button);
  pokemonList.appendChild($listItem);
});
