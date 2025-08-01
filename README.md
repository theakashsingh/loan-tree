# Loan Tree ReactFlow

A hierarchical loan relationship visualization tool built with React, ReactFlow, and Tailwind CSS. This application allows users to create, manage, and visualize complex loan structures with accounts, loans, and collateral in an interactive tree format.

## 🚀 Live Demo

- **Live Application**: [https://loan-tree-reactflow.netlify.app/](https://loan-tree-reactflow.netlify.app/)
- **GitHub Repository**: [https://github.com/theakashsingh/loan-tree-reactflow](https://github.com/theakashsingh/loan-tree-reactflow)

## 📸 Application Preview

![Loan Management Tree Interface](https://github.com/theakashsingh/loan-tree-reactflow/blob/main/screenshot.png?raw=true)

*The application interface showing the hierarchical tree structure view with expandable nodes, side panel for node details, and management controls. This view demonstrates the traditional tree layout alongside the ReactFlow canvas visualization.*

## 📋 Table of Contents

- [Features](#features)
- [Data Model](#data-model)
- [Node Types](#node-types)
- [UX Design Decisions](#ux-design-decisions)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Limitations & Trade-offs](#limitations--trade-offs)
- [Contributing](#contributing)

## ✨ Features

- **Dual View Interface**: Both ReactFlow canvas and traditional tree structure views
- **Hierarchical Visualization**: Interactive tree structure showing loan relationships using ReactFlow
- **Multiple Node Types**: Support for Accounts, Loans, and Collateral with distinct visual styling
- **Dynamic Node Management**: Add/delete nodes with real-time tree updates and automatic layout
- **Side Panel Interface**: Detailed node information and management controls on the right side
- **Expandable Tree View**: Traditional collapsible tree structure for easy navigation
- **Responsive Design**: Canvas-based interface that works across different screen sizes
- **JSON Export/Import**: Export tree structure for data persistence and sharing
- **Auto-layout**: Automatic positioning using Dagre layout algorithm for optimal node placement
- **Interactive Controls**: Pan, zoom, and selection capabilities built into ReactFlow
- **Real-time Updates**: Immediate visual feedback when adding or removing nodes

### Interface Components

- **Tree Structure Panel**: Traditional hierarchical tree view with expand/collapse functionality
- **Main Canvas**: Interactive ReactFlow canvas displaying the loan hierarchy
- **Toolbar**: Quick action buttons for adding Account and Loan nodes
- **Node Details Panel**: Right sidebar showing selected node information and actions
- **Export Controls**: View JSON and Export functionality in the header
- **Node Indicators**: Child count badges on parent nodes showing relationship depth

## 🏗️ Data Model

### Tree Structure Shape

The application uses a hierarchical tree structure where:

```
Account (Root)
├── Loan
│   ├── Collateral
│   └── Loan (Sub-loan)
│       └── Collateral
└── Loan
    └── Collateral
```

### Node Schema

Each node in the tree contains:

```typescript
interface TreeNode {
  id: string;           // Unique identifier (format: id-{random})
  type: 'account' | 'loan' | 'collateral';
  children?: TreeNode[];
  parentId?: string;
  // Additional metadata based on node type
}
```

### Relationship Rules

1. **Account**: Root level nodes representing customer accounts
2. **Loan**: Can be children of Accounts or other Loans (sub-loans)
3. **Collateral**: Can only be children of Loans

## 🎨 Node Types

### Account Node
- **Icon**: Blue folder icon with building symbol
- **Purpose**: Represents a customer's account (root level)
- **Children**: Can have multiple Loans
- **Visual**: Blue rounded rectangle with account ID (e.g., "c57dec")
- **Badge**: Shows child count in top-right corner

### Loan Node  
- **Icon**: Green circle with horizontal line (minus) symbol
- **Purpose**: Represents individual loans or sub-loans
- **Children**: Can have Collateral and sub-Loans
- **Visual**: Green rounded rectangle with loan ID (e.g., "c9719a", "258b4a")
- **Badge**: Shows child count for parent loans
- **Description**: "A loan issued to an account"

### Collateral Node
- **Icon**: Orange circle with "C" symbol
- **Purpose**: Represents collateral tied to loans (leaf nodes)
- **Children**: None - always terminal nodes
- **Visual**: Orange rounded rectangle with collateral ID (e.g., "7bf49c", "6c4dd6")
- **No Badge**: Leaf nodes don't show child counts

## 🎯 UX Design Decisions

### Dual Interface Design
- **Tree Structure Panel**: Traditional hierarchical list view on the left for familiar navigation
- **Unified Selection**: Selecting nodes in either view updates the other and the side panel
- **Complementary Views**: Users can choose their preferred interaction method

### Side Panel Layout
- **Right-side positioning**: Keeps both tree and canvas views unobstructed
- **Contextual information**: Shows selected node details with descriptions
- **Action-oriented**: Primary actions (Add Child, Delete) prominently displayed
- **Clean separation**: Clear visual distinction between views and details

### Add/Delete Flow
- **Add Child Nodes**: 
  - Click on any node in either tree or canvas view to select it
  - Use "Add Child Node" section in side panel
  - Type-specific buttons (Add Loan, Add Collateral) based on parent type
  - Immediate visual feedback in both tree and canvas views

- **Delete Nodes**:
  - Select target node from either view
  - Red "Delete Node" button in Actions section
  - Warning message: "This will delete the node and all its descendants"
  - Maintains tree integrity by removing all descendants

### Visual Hierarchy
- **Tree View Features**:
  - Expandable/collapsible nodes with arrow indicators
  - Color-coded icons matching node types
  - Child count badges on parent nodes
  - Indented structure showing parent-child relationships
- **Canvas View Features**:
  - Color coding for node types
  - Interactive positioning and connections
  - Zoom and pan capabilities
  - Visual edge connections between related nodes

### Navigation & Usability
- **Dual Selection Model**: Click selection works in both tree and canvas views
- **Expandable Sections**: Collapsible tree nodes for managing large structures
- **Child Count Indicators**: Shows number of children per node in both views
- **Responsive Layout**: Adapts to different screen sizes with panel adjustments

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/theakashsingh/loan-tree-reactflow.git
   cd loan-tree-reactflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 💻 Usage

### Basic Operations

1. **View Tree Structure**: The main canvas displays your loan hierarchy
2. **Select Nodes**: Click on any node to view details in the side panel
3. **Add Nodes**: Use the "Add Child Node" section to create new nodes
4. **Delete Nodes**: Select a node and use the delete button in Actions
5. **Export Data**: Use the "View JSON" button to see the raw data structure

### Node Management

- **Adding Accounts**: Use the "+ Account" button in the top toolbar
- **Adding Loans**: Select an Account or Loan, then click "Add Loan"
- **Adding Collateral**: Select a Loan, then click "Add Collateral"

## 🔧 Tech Stack

### Core Dependencies

- **Frontend Framework**: React 19.1.0
  - Modern React with hooks and functional components
  - React DOM for rendering

- **Styling**: Tailwind CSS 4.1.11
  - Utility-first CSS framework
  - Custom design system with consistent spacing
  - Built-in dark mode support

- **Icons**: Lucide React 0.534.0
  - Lightweight, customizable SVG icons
  - Tree-shakable icon library
  - Consistent design language

- **Utilities**: UUID 11.1.0
  - Unique identifier generation for nodes
  - Ensures no ID collisions

### Development Dependencies

- **Build Tool**: Vite 7.0.4
  - Fast development server with HMR
  - Optimized production builds
  - Modern JavaScript features support

- **Language**: TypeScript
  - Type safety and better developer experience
  - Enhanced IDE support and refactoring

- **Linting**: ESLint 9.30.1
  - Code quality and consistency
  - React-specific linting rules

### External Library Details

#### Tailwind CSS (Styling Framework)
```json
"tailwindcss": "^4.1.11"
```
**Purpose**: Utility-first CSS framework for rapid UI development
**Key Features**:
- Pre-built utility classes
- Responsive design utilities
- Custom color palettes
- Component-friendly approach

## ⚠️ Limitations & Trade-offs

### Current Limitations

1. **Data Persistence**: 
   - No backend integration
   - Data is lost on page refresh
   - Manual JSON export/import required

2. **Scalability**:
   - Large trees (>100 nodes) may impact performance
   - No virtualization for massive datasets
   - Memory usage grows with tree size

3. **Validation**:
   - Limited business rule enforcement
   - No loan amount or collateral value validation
   - Basic node relationship constraints only

4. **Mobile Experience**:
   - Side panel may be cramped on small screens
   - Touch interactions not optimized
   - Pan/zoom gestures could be improved

### Technical Trade-offs

1. **Client-Side Only**:
   - **Pro**: Simple deployment, no server costs
   - **Con**: No data persistence, limited scalability

2. **ReactFlow Dependency**:
   - **Pro**: Rich interaction features, good performance
   - **Con**: Large bundle size, learning curve

3. **Auto-layout Algorithm**:
   - **Pro**: Consistent, professional tree layout
   - **Con**: Less control over manual positioning

4. **Redux for Simple State**:
   - **Pro**: Predictable state management, debugging tools
   - **Con**: Overkill for current complexity level

### Future Improvements

- Backend integration for data persistence
- Advanced search and filtering capabilities
- Loan amount and financial calculations
- Export to multiple formats (PDF, Excel)
- Collaborative editing features
- Mobile-responsive optimizations
- Performance optimizations for large datasets

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Akash Singh**
- GitHub: [@theakashsingh](https://github.com/theakashsingh)

---

*Built with ❤️ using React and modern web technologies*