module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortune = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A pleasant surprise is waiting for you.",
      "All your hard work will soon pay off.",
    ];

    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];

    res.status(200).send(randomFortune);
  },
  createLuckyNumber: (req, res) => {
    let { luckyNumber } = req.params;
    luckyNumber = +luckyNumber;
    console.log(luckyNumber);

    res.status(200).send(`The Lucky Number Submitted was ${luckyNumber}`);
  },
};
