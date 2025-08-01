import { useState, useCallback } from 'react';
import { addChildToTree, createRootNode, findNodeById, removeNodeFromTree } from '../utils/treeOperations';

export const useTreeState = () => {
  const [nodes, setNodes] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showJSON, setShowJSON] = useState(false);

  // Find node by ID
  const findNode = useCallback((nodeId) => {
    return findNodeById(nodeId, nodes);
  }, [nodes]);

  // Add root node
  const addRootNode = useCallback((nodeType) => {
    const newNode = createRootNode(nodeType);
    setNodes(prevNodes => [...prevNodes, newNode]);
  }, []);

  // Add child node
  const addChildNode = useCallback((parentId, childType) => {
    setNodes(prevNodes => addChildToTree(prevNodes, parentId, childType));
  }, []);

  // Delete node and all descendants
  const deleteNode = useCallback((nodeId) => {
    setNodes(prevNodes => removeNodeFromTree(prevNodes, nodeId));
    setSelectedNode(null);
  }, []);

  // Handle node selection
  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
  }, []);

  // Close side panel
  const closeSidePanel = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // JSON modal controls
  const openJSONModal = useCallback(() => {
    setShowJSON(true);
  }, []);

  const closeJSONModal = useCallback(() => {
    setShowJSON(false);
  }, []);

  return {
    // State
    nodes,
    selectedNode,
    showJSON,
    
    // Actions
    addRootNode,
    addChildNode,
    deleteNode,
    handleNodeClick,
    closeSidePanel,
    openJSONModal,
    closeJSONModal,
    findNode
  };
};