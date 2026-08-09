import { useState } from "react";

function AIStylist() {
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [color, setColor] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState("");

  const recommendOutfit = () => {
    if (!gender || !occasion || !color || !budget) {
      setResult("⚠️ Please fill in all fields.");
      return;
    }

    let outfit = "";

    if (gender === "Women") {
      if (occasion === "Party") {
        outfit = `
👗 Women's Dress
👜 Leather Handbag
💎 Gold Bracelet
⌚ Luxury Watch`;
      } else if (occasion === "Wedding") {
        outfit = `
👗 Women's Dress
💎 Gold Bracelet
👜 Leather Handbag`;
      } else if (occasion === "Casual") {
        outfit = `
👟 Nike Sneakers
🎒 Luxury Backpack`;
      } else {
        outfit = `
👗 Women's Dress
⌚ Luxury Watch`;
      }
    } else {
      if (occasion === "Office") {
        outfit = `
🧥 Men's Jacket
⌚ Luxury Watch`;
      } else if (occasion === "Casual") {
        outfit = `
👟 Nike Sneakers
🎒 Luxury Backpack`;
      } else {
        outfit = `
🧥 Men's Jacket
👟 Nike Sneakers`;
      }
    }

    setResult(`
✨ AI Recommendation

🎨 Favorite Color: ${color}
🎉 Occasion: ${occasion}
💰 Budget: ₹${budget}

Recommended Products:
${outfit}

⭐ Available now in NStyle!
`);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        🤖 AI Stylist
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-8">

        <label className="font-semibold">Gender</label>
        <select
          className="w-full border p-3 rounded-lg mb-4 mt-2"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option>Women</option>
          <option>Men</option>
        </select>

        <label className="font-semibold">Occasion</label>
        <select
          className="w-full border p-3 rounded-lg mb-4 mt-2"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select</option>
          <option>Casual</option>
          <option>Party</option>
          <option>Office</option>
          <option>Wedding</option>
        </select>

        <label className="font-semibold">Favorite Color</label>
        <input
          type="text"
          placeholder="Black, Blue, Pink..."
          className="w-full border p-3 rounded-lg mb-4 mt-2"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <label className="font-semibold">Budget</label>
        <input
          type="number"
          placeholder="Enter your budget"
          className="w-full border p-3 rounded-lg mb-6 mt-2"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <button
          onClick={recommendOutfit}
          className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-800"
        >
          Get Recommendation
        </button>

        {result && (
          <div className="mt-8 bg-purple-100 p-6 rounded-xl whitespace-pre-line">
            {result}
          </div>
        )}

      </div>
    </div>
  );
}

export default AIStylist;