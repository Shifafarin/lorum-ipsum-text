async function generateLoremIpsum(paragraphs = 1) {
    if (paragraphs <= 0) {
      throw new Error('The number of paragraphs must be greater than zero.');
    }
    
    try {
      const response = await fetch(`https://loripsum.net/api/${paragraphs}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Lorem Ipsum text');
      }
      
      const loremIpsumText = await response.text();
      return loremIpsumText;
    } catch (error) {
      console.error(error);
      return '';
    }
  }
  
  export default generateLoremIpsum;
  module.exports = generateLoremIpsum;
