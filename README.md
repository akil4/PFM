
# 💰 MERN Finance Manager  
*A Full-Stack Personal Finance Management System*

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-00f?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)


  
  


## 🌟 Features  
- 🔐 JWT Authentication with refresh tokens
- 💸 Track income/expenses with category tagging
- 📊 Interactive dashboard with Chart.js visualizations
- 🚨 Real-time budget alerts (Email/In-app)
- 📅 Calendar view for transaction history
- 📱 Mobile-responsive UI using React Bootstrap
- 🔄 Automatic expense categorization
- 📈 Financial health score calculation

## 🛠️ Tech Stack  
**Frontend:**  
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4-FF6384?logo=chartdotjs)

**Backend:**  
![Node.js](https://img.shields.io/badge/Node.js-20.5-339933?logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.18-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb)

**Additional Tools:**  
- JWT Authentication  
- Mongoose ODM  
- React Hook Form  
- Axios  
- Day.js  

## ⚡ Quick Start  

### Prerequisites
- Node.js ≥18.x
- MongoDB Atlas account
- NPM/Yarn

### Installation  
1. Clone repository:  
```
git clone https://github.com/yourusername/mern-finance-manager.git
cd mern-finance-manager
```

2. Setup backend:  
```
cd backend
npm install
touch .env
```
Add to `.env`:  
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

3. Setup frontend:  
```
cd ../frontend
npm install
touch .env
```
Add to `.env`:  
```
REACT_APP_API_URL=http://localhost:5000
```

### Running  
1. Start backend:  
```
cd backend
npm run dev
```

2. Start frontend:  
```
cd ../frontend
npm start
```

Visit `http://localhost:3000` in your browser  

## 📂 Project Structure  
```
mern-finance-manager/
├── backend/
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── utils/             # Middleware & helpers
│
├── frontend/
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # React components
│       ├── features/      # Redux slices
│       ├── hooks/         # Custom hooks
│       └── pages/         # Application views
```

## 📷 Key Features Preview  
| Dashboard View | Transaction Form |
|----------------|------------------|
| ![Dashboard](https://i.postimg.cc/ZqG3kYv6/finance-dash-preview.png) | ![Form](https://i.postimg.cc/rsjBd8dS/transaction-form.png) |

| Mobile View | Reports |
|-------------|---------|
| ![Mobile](https://i.postimg.cc/k4xJ6Gq0/mobile-view.png) | ![Reports](https://i.postimg.cc/bN8JtSFx/reports-view.png) |

## 🤝 Contributing  
1. Fork the project  
2. Create your feature branch:  
```
git checkout -b feature/amazing-feature
```
3. Commit changes:  
```
git commit -m 'Add amazing feature'
```
4. Push to branch:  
```
git push origin feature/amazing-feature
```
5. Open a Pull Request  

## 📄 License  
Distributed under MIT License. See `LICENSE` for details.

---

**👨💻 Created by [Your Name]**  
[![Deploy](https://img.shields.io/badge/Live_Demo-AWS_Amplify-FF9900?style=for-the-badge)](https://your-demo-link.com)
```

