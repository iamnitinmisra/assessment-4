const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const luckyNumberForm = document.querySelector("#lucky-number-form");
const luckyNumberInput = document.getElementById("lucky-number");
const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const alertLuckyNumber = (e) => {
  e.preventDefault();
  const luckyNumber = luckyNumberInput.value;
  axios
    .post(`http://localhost:4000/api/lucky-number/${luckyNumber}`)
    .then((res) => {
      alert(res.data);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneButton.addEventListener("click", getFortune);
luckyNumberForm.addEventListener("submit", alertLuckyNumber);
