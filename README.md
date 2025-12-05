# ⚽ Neymar Jr. Career Statistics Dashboard

A comprehensive, interactive data visualization dashboard showcasing Neymar Jr.'s complete professional football career statistics, performance metrics, and achievements.

![Neymar Dashboard](public/neymar-jr-professional-football-player-portrait.jpg)

## 📊 Features

### Performance Analytics
- **Career Overview Cards** - Total appearances, goals, assists, and goals per 90 minutes
- **Performance Trends** - Interactive line charts tracking goals, assists, and efficiency across seasons
- **Club-by-Club Comparison** - Bar chart visualization of statistics at Santos, Barcelona, PSG, and Al-Hilal
- **Performance Radar** - Multi-metric comparison across different clubs (goals, assists, efficiency)
- **Club vs Country** - Side-by-side comparison of yearly goals for club and Brazil national team

### Advanced Visualizations
- **Goal Location Heatmap** - Tactical field view showing where Neymar scores most frequently
- **Injury Timeline** - Visual representation of major injuries and their impact on career
- **Career Milestones** - Timeline of key achievements and transfer events
- **Season-by-Season Table** - Comprehensive data table with filtering and sorting

### Trophy Cabinet
- **Team Trophies** - UEFA Champions League, La Liga, Ligue 1, Copa América, Olympic Gold, and more
- **Individual Awards** - Ballon d'Or nominations, Puskás Award, Golden Ball awards, Player of the Year honors

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript** - Type-safe development

### UI & Styling
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Component library
- **Geist Font** - Modern typography

### Data Visualization
- **Recharts** - React charting library
  - Line Charts
  - Bar Charts
  - Radar Charts
  - Custom Heatmaps

### Design System
- Modern blue color scheme
- Responsive mobile-first design
- Dark theme with professional sports analytics aesthetic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/neymar-stats-dashboard.git
cd neymar-stats-dashboard
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📁 Project Structure

\`\`\`
neymar-stats-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── stats-overview.tsx  # Career statistics cards
│   ├── performance-chart.tsx # Trends line chart
│   ├── club-comparison.tsx # Club stats bar chart
│   ├── performance-radar.tsx # Performance metrics radar
│   ├── goal-heatmap.tsx    # Goal location heatmap
│   ├── club-country-comparison.tsx # Club vs country chart
│   ├── injury-timeline.tsx # Injury visualization
│   ├── career-milestones.tsx # Career timeline
│   └── season-table.tsx    # Season data table
├── public/
│   └── *.jpg               # Player images and trophy photos
└── README.md
\`\`\`

## 📈 Data Sources

The dashboard includes comprehensive data from:
- **2009-2023**: Complete career statistics from Santos, Barcelona, Paris Saint-Germain, and Al-Hilal
- **Brazil National Team**: 125+ caps with 75+ goals
- **Performance Metrics**: Goals, assists, appearances, goals per 90 minutes
- **Injury Records**: Major injuries and missed matches
- **Trophy Cabinet**: Team and individual honors

## 🎨 Design Features

- **Professional Sports Analytics Theme** - Inspired by modern sports data platforms
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Modern Blue Palette** - Light and dark blue scheme for clarity and professionalism
- **Interactive Charts** - Hover effects and data labels for enhanced user experience
- **High-Quality Images** - Action shots from Santos, Barcelona, and PSG eras

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Statistics compiled from official club and FIFA records
- Built with modern web technologies for optimal performance
- Designed for football analytics enthusiasts and Neymar fans worldwide

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This is a data visualization project for educational and analytical purposes. All statistics are based on publicly available data.
