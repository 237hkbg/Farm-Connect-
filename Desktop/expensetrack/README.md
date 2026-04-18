# ExpenseTracker - Student Edition

A full-stack web application for tracking personal expenses and managing budgets. Built with React.js frontend and Node.js/Express backend.

## Features

✨ **Core Features:**
- 📊 Dashboard with balance, income, and expense overview
- 💰 Add, view, and delete transactions
- 📁 Organize expenses by categories
- 📈 Analytics and spending insights
- 🎨 Beautiful, responsive UI design
- ⚙️ Customizable settings (currency, language, theme)

## Tech Stack

**Frontend:**
- React 18.2.0
- React Router DOM for navigation
- Axios for API calls
- CSS3 with responsive design

**Backend:**
- Node.js with Express.js
- CORS enabled for cross-origin requests
- RESTful API architecture
- In-memory data storage (easily extendable to MongoDB)

## Project Structure

```
expensetrack/
├── backend/
│   ├── server.js           # Express server entry point
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.js                      # React entry point
│   │   ├── App.js                        # Main app component
│   │   ├── components/
│   │   │   ├── Sidebar.js               # Navigation sidebar
│   │   │   ├── BalanceCard.js           # Balance display component
│   │   │   ├── TransactionForm.js       # Add transaction form
│   │   │   └── TransactionList.js       # Display transactions table
│   │   └── pages/
│   │       ├── Dashboard.js              # Main dashboard page
│   │       ├── Analytics.js              # Analytics and insights
│   │       ├── Categories.js             # Category management
│   │       └── Settings.js               # App settings
│   └── package.json        # Frontend dependencies
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## API Endpoints

### Transactions
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/:id` - Get transaction by ID
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Dashboard
- `GET /api/dashboard` - Get summary (balance, income, expenses)

### Categories
- `GET /api/categories` - Get all categories

### Analytics
- `GET /api/analytics/by-category` - Get spending by category

## Usage

1. **Dashboard**: View your total balance, income, and expenses
2. **Add Transaction**: Use the form to add income or expenses with category
3. **View Transactions**: See all transactions in the recent transactions table
4. **Delete**: Click the delete button (🗑️) to remove a transaction
5. **Analytics**: View detailed spending insights by category
6. **Categories**: Browse and add custom categories
7. **Settings**: Customize app preferences

## Transaction JSON Format

```json
{
  "id": "1234567890",
  "category": "Food & Drink",
  "description": "Lunch at cafeteria",
  "date": "2026-03-01",
  "amount": -12.50,
  "type": "expense"
}
```

## Customization

### Add Database Support
Replace the in-memory arrays in `backend/server.js` with MongoDB models:

```javascript
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  category: String,
  description: String,
  amount: Number,
  type: String,
  date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
```

### Styling
All components use CSS modules. Modify the `.css` files in `frontend/src/` to customize the design.

### Categories
Edit the `categories` array in `backend/server.js` to add/remove default categories.

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication
- [ ] Budget limits and alerts
- [ ] Data export (CSV/PDF)
- [ ] Recurring transactions
- [ ] Mobile app (React Native)
- [ ] Chart visualizations (Chart.js/D3.js)
- [ ] Dark mode
- [ ] Multi-currency support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

## Support

For issues or questions, please open an issue on the repository.

---

**Happy expense tracking!** 💜
