function scrollToMoods() {
  document.getElementById("moods").scrollIntoView({ behavior: "smooth" });
}

const moods = {
  focus: {
    title: "🎧 Deep Focus",
    desc: "Minimal distraction. Clean caffeine. Mental clarity.",
    drinks: ["Espresso", "Americano", "Ristretto", "Lungo"]
  },
  study: {
    title: "🧠 Solo Sunday",
    desc: "Calm, long sitting, low stimulation.",
    drinks: ["Caffè Latte", "Flat White", "Raf Coffee"]
  },
  dates: {
    title: "💕 Coffee Dates",
    desc: "Warm, indulgent, slow sipping.",
    drinks: ["Mocha", "Cappuccino", "Vienna Coffee"]
  },
  energy: {
    title: "⏰ Monday Deadlines",
    desc: "Fast caffeine, sharp focus.",
    drinks: ["Espresso", "Doppio", "Americano"]
  },
  night: {
    title: "🌙 Midnight Cravings",
    desc: "Late-night comfort. Decaf friendly.",
    drinks: ["Chocolate Milk", "Raf Coffee", "Glace"]
  },
  creative: {
    title: "🎨 Creative Chaos",
    desc: "Playful, experimental, idea-driven.",
    drinks: ["Frappe", "Freddo", "Caramel Frappe"]
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

  document.getElementById("moodOutput").style.display = "block";
  document.getElementById("moodOutput").scrollIntoView({ behavior: "smooth" });
}
