import { Building2, CreditCard } from 'lucide-react';
import { NODE_TYPES } from '../constants/nodeTypes';

const EmptyState = ({ onAddRootNode }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No nodes yet</h3>
        <p className="text-gray-600 mb-6">Start by adding an Account or Loan node</p>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => onAddRootNode(NODE_TYPES.ACCOUNT)}
            className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md"
          >
            <Building2 className="w-5 h-5 mr-2" />
            Add Account
          </button>
          <button
            onClick={() => onAddRootNode(NODE_TYPES.LOAN)}
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-md"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Add Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;