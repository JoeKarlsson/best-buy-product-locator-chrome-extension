const handleProductCode = (productCode, codeType) => {
  console.log('productCode', productCode);
  chrome.storage.local.set({
    productCode,
    codeType,
  });
};

export default handleProductCode;
