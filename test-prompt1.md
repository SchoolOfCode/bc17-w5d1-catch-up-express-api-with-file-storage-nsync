/**
 * @prompt School of Code Workshop Test Generator
 * 
 * Generate tests for the workshop learning objectives defined in README.md.
 * Follow these guidelines:
 * 
 * Test Structure:
 * - Place tests in __tests__/learning-objectives/
 * - One file per learning objective
 * - Use format: [learning-objective].test.js
 * - Tests should validate understanding, not just functionality
 * 
 * README Parsing:
 * Learning objectives are typically structured as:
 * - "By the end of this workshop, bootcampers will be able to..."
 * - Look for bullet points or numbered lists following this phrase
 * - Each bullet point represents a testable learning objective
 * 
 * Test Organization:
 * describe('Learning Objective: [Objective from README]', () => {
 *   describe('Success Criterion: [Specific Skill]', () => {
 *     it('should [demonstrate understanding]', () => {
 *       // Test implementation
 *     });
 *   });
 * });
 * 
 * Required Test Elements:
 * 1. Clear objective statement from README
 * 2. Success criteria that prove understanding
 * 3. Both basic and edge cases
 * 4. AAA pattern (Arrange, Act, Assert)
 * 5. Meaningful test data
 * 
 * Example Learning Objective:
 * "Use array methods to manipulate data"
 * Should generate tests like:
 * 
 * describe('Learning Objective: Use array methods to manipulate data', () => {
 *   describe('Success Criterion: Array Transformation', () => {
 *     it('should transform array elements using map', () => {
 *       const input = [1, 2, 3];
 *       const result = input.map(x => x * 2);
 *       expect(result).toEqual([2, 4, 6]);
 *     });
 *   });
 * });
 */

// Example usage with Copilot - place this comment block at the start of your test file:
/**
 * Generate tests for learning objective: [Paste objective from README]
 * Workshop context: [Brief description of workshop content]
 * Success criteria:
 * 1. [First measurable outcome]
 * 2. [Second measurable outcome]
 * Edge cases to consider:
 * - [List relevant edge cases]
 * 
 * Test using: [Jest/Vitest]
 * Additional dependencies: [e.g., @testing-library/react if needed]
 */

// After this comment block, start writing the test structure and let Copilot complete:
describe('Learning Objective: [Start typing the objective and let Copilot complete]

// For React components, include this additional context:
/**
 * Component being tested: [ComponentName]
 * Props:
 * - prop1: [type and purpose]
 * - prop2: [type and purpose]
 * Expected behaviors:
 * 1. [First behavior]
 * 2. [Second behavior]
 * User interactions to test:
 * - [List interactions]
 */

// Example full test file with prompt:
/**
 * Generate tests for learning objective: Use the map method to transform array data
 * Workshop context: Array methods workshop focusing on data transformation
 * Success criteria:
 * 1. Use map to transform numbers in an array
 * 2. Handle edge cases (empty arrays, null values)
 * 3. Transform complex objects within arrays
 * Edge cases:
 * - Empty arrays
 * - Arrays with null/undefined values
 * - Mixed data type arrays
 * 
 * Test using: Jest
 */

describe('Learning Objective: Use the map method to transform array data', () => {
  // Let Copilot generate the rest based on the prompt
});

/**
 * Tips for working with Copilot:
 * 
 * 1. Start with the full prompt comment block
 * 2. Type out the initial describe block
 * 3. Let Copilot suggest the success criteria describes
 * 4. For each 'it' block:
 *    - Type the beginning of the test
 *    - Let Copilot complete with meaningful test data
 * 5. Review and adjust generated tests
 * 6. Add any missing edge cases
 * 
 * Common Adjustments Needed:
 * - Add more specific test data
 * - Expand edge case coverage
 * - Add error cases
 * - Improve assertion messages
 * 
 * Remember:
 * - Tests should validate understanding
 * - Include both happy and error paths
 * - Use realistic test data
 * - Keep tests focused and readable
 */