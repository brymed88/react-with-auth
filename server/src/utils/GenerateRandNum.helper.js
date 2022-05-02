const GenerateRandNum = (length) => {
  if (length) {
    let numLength = '1';

    for (let i = 0; i < length - 1; i++) {
      numLength += '0';
    }

    let num = parseInt(numLength);
    return Math.floor(num + Math.random() * (num * 9)).toString();
  } else {
    return { status: 'invalid length' };
  }
};

export default GenerateRandNum;
