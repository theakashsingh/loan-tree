import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { NODE_COLORS, NODE_ICONS } from '../constants/nodeTypes';

const TreeNode = ({ node, onNodeClick, selectedNodeId, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const Icon = NODE_ICONS[node.type];
  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <div className="select-none">
      <div 
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
          selectedNodeId === node.id 
            ? 'bg-gray-100 shadow-md border-2 border-blue-300' 
            : 'bg-white shadow-sm border border-gray-200 hover:shadow-md hover:bg-gray-50'
        }`}
        style={{ marginLeft: `${level * 24}px` }}
        onClick={() => onNodeClick(node)}
      >
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="mr-2 p-1 hover:bg-gray-200 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </button>
        )}
        
        <div className={`w-8 h-8 rounded-full ${NODE_COLORS[node.type]} flex items-center justify-center mr-3`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{node.type}</div>
          <div className="text-xs text-gray-500 font-mono">{node.id}</div>
        </div>
        
        {node.children && node.children.length > 0 && (
          <div className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-600">
            {node.children.length}
          </div>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="mt-2 space-y-2">
          {node.children.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              onNodeClick={onNodeClick}
              selectedNodeId={selectedNodeId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;