var repository = [
  { name: "Dugtrio", height: 2, types: ["ground"] },
  { name: "Meowth", height: 1, types: ["normal"] },
  { name: "Mankey", height: 1, types: ["fighting"] },
  { name: "Charizard", height: 5, types: ["fire", "flying"] }
];

for (var i = 0; i < repository.length; i++) {
  var size;
  if (repository[i].height > 4) {
    size = " - Wow that's a big one!";
  } else {
    size = "";
  }

  document.write(
    "Name: " +
      repository[i].name +
      " (Height: " +
      repository[i].height +
      ")" +
      size +
      "<br>" +
      " Type: " +
      repository[i].types +
      "<br>" +
      "<br>"
  );
}
