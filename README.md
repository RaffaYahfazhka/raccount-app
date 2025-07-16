
# Raccount App - ERP System

Modern ERP system built with Next.js, Emotion CSS, and TypeScript for accounting and general ledger management.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Emotion CSS (@emotion/styled)
- **Language:** TypeScript
- **Package Manager:** Yarn
- **Icons:** Lucide React

## Features

- 📊 General Ledger Management
- 🔍 Advanced Search & Filtering
- 💰 Transaction Management
- 📱 Responsive Design
- 🎨 Modern UI with Teal Green Theme

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Common components (buttons, inputs, etc.)
│   ├── layout/          # Layout components (header, sidebar, etc.)
│   └── modules/         # Feature-specific components
├── controllers/         # Business logic controllers
├── entities/           # Data models and types
├── clients/            # API clients and data fetching
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Global styles and theme
└── pages/              # Next.js pages
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd raccount-app
```

2. Install dependencies
```bash
yarn install
```

3. Run the development server
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript compiler

## API Integration

The application is structured to easily integrate with backend APIs:

- **Controllers**: Handle business logic and API calls
- **Clients**: Manage HTTP requests and responses  
- **Entities**: Define data models and validation

Currently using dummy data for development. Replace with actual API endpoints when ready.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
