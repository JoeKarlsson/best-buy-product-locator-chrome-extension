const handleProductCode = (productCode, codeType) => {
  chrome.extension.sendMessage(productCode, codeType);
  chrome.storage.local.set({
    productCode,
    codeType,
  });
};

export default handleProductCode;
