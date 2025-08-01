import { Plus, Download, Eye, Building2, CreditCard } from 'lucide-react';
import TreeNode from '../components/TreeNode';
import SidePanel from '../components/SidePanel';
import JSONModal from '../components/JSONModal';
import EmptyState from '../components/EmptyState';
import { useTreeState } from '../hooks/useTreeState';
import { exportJSON } from '../utils/nodeUtils';
import { NODE_TYPES } from '../constants/nodeTypes';
// import { NODE_TYPES } from '../constants';
// import { useTreeState } from '../hooks';
// import { exportJSON } from '../utils';

const LoanTreeVisualizer = () => {
  const {
    nodes,
    selectedNode,
    showJSON,
    addRootNode,
    addChildNode,
    deleteNode,
    handleNodeClick,
    closeSidePanel,
    openJSONModal,
    closeJSONModal
  } = useTreeState();

  const handleExportJSON = () => {
    exportJSON(nodes);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Loan Management Tree</h1>
              <p className="text-gray-600">Visualize hierarchical loan relationships</p>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={openJSONModal}
                className="flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                View JSON
              </button>
              <button
                onClick={handleExportJSON}
                className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <div className="flex-1 p-6">
          {nodes.length === 0 ? (
            <EmptyState onAddRootNode={addRootNode} />
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Tree Structure</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addRootNode(NODE_TYPES.ACCOUNT)}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Account
                  </button>
                  <button
                    onClick={() => addRootNode(NODE_TYPES.LOAN)}
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Loan
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {nodes.map(node => (
                  <TreeNode
                    key={node.id}
                    node={node}
                    onNodeClick={handleNodeClick}
                    selectedNodeId={selectedNode?.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Side Panel */}
      {selectedNode && (
        <SidePanel
          node={selectedNode}
          onAddChild={addChildNode}
          onDeleteNode={deleteNode}
          onClose={closeSidePanel}
        />
      )}
      
      {/* JSON Modal */}
      <JSONModal
        isOpen={showJSON}
        onClose={closeJSONModal}
        data={nodes}
      />
    </div>
  );
};

export default LoanTreeVisualizer;