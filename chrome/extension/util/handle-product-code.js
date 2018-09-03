const handleProductCode = (productCode, codeType) => {
  chrome.storage.local.set({
    productCode,
    codeType,
  });
};

export default handleProductCode;
