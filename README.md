# Debugging Task - Shopify Product Title Update

## Overview

Welcome to the debugging task! The goal of this exercise is to assess your debugging and problem-solving skills by working on a single-page application that retrieves product information from a Shopify store and allows users to update the product titles. However, the current implementation has several bugs that need to be fixed.
This task is part of the application for an engineer role at Patrol AI inc.

### Time Limit

- You have **75 minutes** from your start time to complete the task and email your material to apply@patrolapp.ai. 

### External Tools & AI

- Whilst completing this assessment, you are allowed to use any tools that you would use when coding day to day. This includes any and all AI tooling. We just ask that you include a list of tools that you use at the top of your submission.

## Task Description

You have been provided with a Remix application designed to fetch products from a Shopify store and display them on a webpage. Users should be able to update the titles of these products. Unfortunately, there are several issues in the current implementation, and your job is to identify and fix them whilst documenting all addressed bugs in a **BUGFIX.MD file** . You must also record a **maximum 5 minute** screen recording describing your debugging process and showing some of the issues that you fixed as part of your submission.

### APIs :

You will be provided an API key for Shopify services as part of your instruction email. Please note the currently broken app uses a deprecated REST api. **As part of your debugging, you will be expected to swap this REST api out for a GraphQL solution** since this is the direction that Shopify has moved.  

### Bonus Objective:
- **Use Strong Typing:** Refactor the code to use strong typing features of TypeScript wherever applicable. This includes defining interfaces or types for API responses, form data, and other key parts of the application.

### Additional Information:
- **Sample Video:** A sample video of the functional application is provided to help you understand the expected behavior.
- **Concurrency Warning:** In the case that multiple applicants are working on this task simultaneously, you may encounter unexpected updates to product titles. Please be aware of this possibility during your testing.

## Steps to Complete the Task

1. **Set Up the Environment:**
   - Install the necessary dependencies by running:
     ```bash
     npm install
     ```

2. **Run the Application:**
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Debug and Fix the Issues:**
   - Identify the bugs in the application related to API requests, form handling, state management, and UI rendering.
   - Fix the issues to ensure that the application works as expected. Users should be able to update the product titles without errors.

4. **Implement the Bonus Objective (Optional):**
   - Add comments to the codebase to improve readability and maintainability.
   - Use TypeScript’s strong typing features to define types or interfaces for the data structures and ensure type safety throughout the application.

5. **Test Your Fixes:**
   - Test the application thoroughly to ensure all identified issues are resolved.
   - Ensure that all changes are correctly reflected in the Shopify Admin and on the front-end of the application.

## Submission

1. **Prepare Your Submission:**
   - Ensure your code is clean, well-documented, and clearly explains any changes made.
   - Include a brief explanation of each bug you found and how you resolved it in a separate `BUGFIX.md` file.
   - Record your explanation video. 

2. **Submit Your Work:**
   - Compress the project directory into a ZIP file.
   - Upload the ZIP file to google drive and then email the drive link to apply@patrolapp.ai. (Trying to directly email the ZIP may have issues). 
   - Use the subject line: [Your Name] - Technical Test #1

### Submission Video

For your 5 min screen recording as part of the application, we recommend using <a href="https://www.loom.com/">Loom</a> to record your videos, however this is entirely up to you. 
Your video should focus on explaining your debugging process whilst walking throuhg at least one example. If you do choose to use AI tools, this is your opportunity to explain why and how you use them.  

## Important Notes

- The application should be fully functional upon submission, with all the bugs fixed.
- Attempting the bonus objective is optional but encouraged, as it will help demonstrate your coding style and attention to detail.

## Questions?

If you have any questions or encounter any issues, feel free to reach out to apply@patrolapp.ai.
