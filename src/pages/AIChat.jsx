import { useState } from "react";

function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const getReply = (text) => {
    text = text.toLowerCase();

    if (text.includes("watch")) {
      return "⌚ I recommend our Luxury Watch for a premium look.";
    }

    if (text.includes("shoe") || text.includes("sneaker")) {
      return "👟 Nike Sneakers are perfect for casual and sports wear.";
    }

    if (text.includes("bag")) {
      return "👜 Leather Handbag is our best seller.";
    }

    if (text.includes("dress")) {
      return "👗 Women's Dress is perfect for parties and special occasions.";
    }

    if (text.includes("jacket")) {
      return "🧥 Men's Jacket is ideal for winter and travel.";
    }

    if (text.includes("accessories")) {
      return "✨ Luxury Watch and Gold Bracelet are our best accessories.";
    }

    if (text.includes("party")) {
      return "🎉 I recommend the Women's Dress with the Gold Bracelet.";
    }

    if (text.includes("office")) {
      return "💼 Luxury Watch and Leather Handbag are perfect for office wear.";
    }

    if (text.includes("college")) {
      return "🎒 Luxury Backpack and Nike Sneakers are great for college.";
    }

    if (text.includes("wedding")) {
      return "💍 Elegant Dress with Gold Bracelet is perfect for weddings.";
    }

    return "😊 I can help you choose fashion items. Try typing: Watch, Shoes, Bag, Dress, Jacket, Party, Office, College or Wedding.";
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const aiReply = getReply(message);

    setChat((prev) => [
      ...prev,
      { sender: "user", text: message },
      { sender: "ai", text: aiReply },
    ]);

    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">
        🤖 NStyle AI Assistant
      </h1>

      <div className="border rounded-xl p-5 h-[450px] overflow-y-auto bg-gray-50 mb-5">
        {chat.length === 0 ? (
          <p className="text-gray-500">
            Ask me about fashion products 👗👟⌚
          </p>
        ) : (
          chat.map((item, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                item.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl max-w-[75%] ${
                  item.sender === "user"
                    ? "bg-purple-700 text-white"
                    : "bg-white shadow"
                }`}
              >
                {item.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Ask me about fashion..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-1 border p-4 rounded-xl"
        />

        <button
          onClick={sendMessage}
          className="bg-purple-700 text-white px-6 rounded-xl hover:bg-purple-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;