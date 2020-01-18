/**
 * Simple function to make conditional rendering look cleaner in the template.
 * If no 'no' param exists default to empty string and assume we just are
 * checking for a conditional render
 * @param {boolean} value - value to test against
 * @param {string} yes - Content to display if true
 * @param {string} no - Content to display if false
 */
export const ternaryRender = (value, yes, no = '') => (value ? yes : no);
