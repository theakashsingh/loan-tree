import { generateId } from './nodeUtils';

// Find node by ID in tree structure
export const findNodeById = (nodeId, nodeList = []) => {
  for (let node of nodeList) {
    if (node.id === nodeId) return node;
    if (node.children) {
      const found = findNodeById(nodeId, node.children);
      if (found) return found;
    }
  }
  return null;
};

// Add child node to tree
export const addChildToTree = (nodes, parentId, childType) => {
  const addChild = (nodeList) => {
    return nodeList.map(node => {
      if (node.id === parentId) {
        const newChild = {
          id: generateId(),
          type: childType,
          children: []
        };
        return {
          ...node,
          children: [...(node.children || []), newChild]
        };
      }
      if (node.children) {
        return {
          ...node,
          children: addChild(node.children)
        };
      }
      return node;
    });
  };
  
  return addChild(nodes);
};

// Remove node from tree
export const removeNodeFromTree = (nodes, nodeId) => {
  const removeNode = (nodeList) => {
    return nodeList.filter(node => {
      if (node.id === nodeId) return false;
      if (node.children) {
        node.children = removeNode(node.children);
      }
      return true;
    });
  };
  
  return removeNode(nodes);
};

// Create new root node
export const createRootNode = (nodeType) => {
  return {
    id: generateId(),
    type: nodeType,
    children: []
  };
};