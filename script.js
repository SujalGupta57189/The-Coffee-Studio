function scrollToMoods() {
  document.getElementById("moods").scrollIntoView({ behavior: "smooth" });
}

const moods = {
  focus: {
    title: "🎧 deep focus",
    desc: "zero noise. clean caffeine. main character energy.",
    drinks: ["espresso", "americano", "ristretto", "lungo"]
  },
  study: {
    title: "🧠 solo sunday",
    desc: "calm mind. long sitting. soft comfort.",
    drinks: ["caffè latte", "flat white", "raf coffee"]
  },
  dates: {
    title: "💕 coffee dates",
    desc: "slow sips, eye contact, soft conversations.",
    drinks: ["mocha", "cappuccino", "vienna coffee"]
  },
  energy: {
    title: "⏰ monday deadlines",
    desc: "fast caffeine. sharp focus. no excuses.",
    drinks: ["espresso", "doppio", "americano"]
  },
  night: {
    title: "🌙 midnight cravings",
    desc: "late nights. low caffeine. emotional comfort.",
    drinks: ["chocolate milk", "raf coffee", "glace"]
  },
  creative: {
    title: "🎨 creative chaos",
    desc: "ideas > perfection. playful & experimental.",
    drinks: ["frappe", "freddo", "caramel frappe"]
  }
};

function showMood(key) {
  const mood = moods[key];

  document.getElementById("moodTitle").innerText = mood.title;
  document.getElementById("moodDesc").innerText = mood.desc;

  const list = document.getElementById("moodDrinks");
  list.innerHTML = "";

  mood.drinks.forEach(drink => {
    const li = document.createElement("li");
    li.innerText = drink;
    list.appendChild(li);
  });

  const output = document.getElementById("moodOutput");
  output.style.display = "block";
  output.scrollIntoView({ behavior: "smooth" });
}
