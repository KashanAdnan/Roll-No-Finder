var obj = {
  std: [
    {
      Name: "Kashan",
      FatherName: "Adnan",
      Class: 5,
      RollNo: 1
    },

    {
      Name: "Fatima",
      FatherName: "Adnan",
      Class: 2,
      RollNo: 2,
    },

    {
      Name: "Almira",
      FatherName: "Adnan",
      Class: 7,
      RollNo: 3,
    },
    {
      Name: "Shahzain",
      FatherName: "Adnan",
      Class: 1,
      RollNo: 4,
    },

    {
      Name: "Nazia",
      FatherName: "Adnan",
      Class: 12,
      RollNo: 5,
    },

    {
      Name: "Adnan",
      FatherName: "Younus",
      Class: 12,
      RollNo: 6,
    },
  ],
};
function objarr() {
  var inpval = document.getElementById("myvalue");
  var result = document.getElementById("result");
  for (var i = 0; i < obj.std.length; i++) {
    console.log(i);
    if (inpval.value == obj.std[i].RollNo) {
      result.innerHTML = `Name : ${obj.std[i].Name}<br /> Father Name : ${obj.std[i].FatherName} <br />Class : ${obj.std[i].Class} <br />Rollno : ${obj.std[i].RollNo}`;
    } else {
      console.log("Incorrect Roll No : ");
    }
  }
}
