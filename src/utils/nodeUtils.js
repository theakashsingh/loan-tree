// Simple UUID generator
export const generateId = () => 'id-' + Math.random().toString(36).substr(2, 9);

// Export JSON data
export const exportJSON = (data, filename = 'loan-tree-structure.json') => {
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};