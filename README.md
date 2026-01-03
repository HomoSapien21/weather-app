# 🌤️ Glassmorphism Weather App

A stunning, modern weather application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This app features a high-end glassmorphism UI and dynamic backgrounds that change based on the real-time temperature of the searched city.

![Weather App Preview](https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hhN3RkNW8zdXYybmp0Mm91MTVwZ3N2eWdtN3Fpbm9mdW55aW54OCZlcD12MV9pbnRlcm5hbF9naWZzX3NlYXJjaCZjdD1n/xT0Gqz4x4eLd5gDtaU/giphy.gif)

## ✨ Features

- **🔮 Glassmorphism UI**: A premium design with frosted glass effects and backdrop blurs.
- **🌆 Dynamic Backgrounds**: The background GIF changes automatically based on the temperature:
  - **Cold (< 0°C)**: Icy/Snowy theme.
  - **Mild (1 - 20°C)**: Pleasant/Cool theme.
  - **Warm (> 20°C)**: Sunny/Hot theme.
- **🌍 Global Search**: Search for any city worldwide using the **Open-Meteo Geocoding API**.
- **📊 Real-time Data**: Fetches precise weather data (temperature, wind speed, location) via the **Open-Meteo Forecast API**.
- **⚡ Fast & Responsive**: Optimized for all devices using Tailwind CSS and Next.js App Router.
- **🛡️ Error Handling**: Intelligent handling for invalid city names.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API Requests**: [Axios](https://axios-http.com/)
- **Weather Provider**: [Open-Meteo API](https://open-meteo.com/) (No API Key Required!)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
weather-app/
├── src/
│   ├── app/           # App router (layout and entry page)
│   └── components/    # Reusable UI components (Weather.tsx)
├── public/            # Static assets
└── ...                # Configuration files (Tailwind, TypeScript, etc.)
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

Developed with ❤️ using Next.js and Tailwind CSS.
