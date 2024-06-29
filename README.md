# 3qary Frontend

## Introduction
**3qary** is a real estate web application designed to connect unit owners with potential renters or buyers. The frontend of this project is built using Vue.js and styled with SASS, following the 7-1 architecture and BEM methodology for class naming.

## Technology Stack

### Why Vue.js?
Vue.js is a progressive JavaScript framework that is widely used for building user interfaces and single-page applications. The decision to use Vue.js for 3qary was based on several key advantages:

- **Reactive Data Binding**: Vue.js provides a responsive data-binding system that keeps the user interface in sync with the underlying data model.
- **Component-Based Architecture**: Vue.js promotes a component-based structure, which enhances code reusability, maintainability, and readability. This structure is ideal for building complex applications like 3qary, where different parts of the UI can be broken down into reusable components.
- **Ease of Integration**: Vue.js can be easily integrated into projects using other JavaScript libraries or existing projects, making it a versatile choice for adding interactivity to the application.
- **Rich Ecosystem and Community Support**: Vue.js has a rich ecosystem of tools and libraries, along with an active community, which ensures that developers have access to resources and support when building and maintaining the application.

### Why SASS?
SASS (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is interpreted or compiled into CSS. SASS was chosen for the 3qary project for the following reasons:

- **Modularization**: SASS supports modularizing CSS through partials and imports, allowing for a cleaner and more organized codebase.
- **Variables and Mixins**: SASS provides variables and mixins, which enable the reuse of styles and ensure consistency across the application. This is particularly useful for maintaining a consistent design system in 3qary.
- **Nested Rules**: SASS allows nesting of CSS rules, which reflects the HTML structure and makes the stylesheets more readable and maintainable.
- **Functions and Inheritance**: SASS includes functions and inheritance features, which provide additional flexibility and power when writing styles.

## Project Structure

### SASS 7-1 Architecture
The SASS 7-1 architecture is a file organization pattern that splits the stylesheets into 7 folders and 1 main file. This structure ensures a scalable and maintainable codebase. The folders are as follows:

1. **Base**: Contains the base styles (e.g., resets, typography, etc.).
2. **Components**: Contains component-specific styles (e.g., buttons, cards, etc.).
3. **Layout**: Contains layout-related styles (e.g., header, footer, grid systems, etc.).
4. **Pages**: Contains page-specific styles.
5. **Themes**: Contains theme-specific styles.
6. **Utils**: Contains utility and helper classes.
7. **Vendors**: Contains styles from external libraries or frameworks.

The main file (`main.scss`) imports all these partials to compile the final CSS file.

### BEM Methodology
BEM (Block Element Modifier) is a naming convention for classes in HTML and CSS that aims to improve code readability and maintainability. The BEM methodology was chosen for 3qary for the following reasons:

- **Encapsulation**: BEM promotes encapsulation by clearly defining the relationship between components (blocks), their elements, and their states (modifiers).
- **Consistency**: BEM ensures consistent naming conventions, which makes the code easier to understand and work with, especially in a team setting.
- **Scalability**: BEM is highly scalable, making it suitable for large projects where styles need to be modular and maintainable.

In BEM, the class names follow a specific pattern:
- **Block**: The standalone entity that is meaningful on its own (e.g., `header`).
- **Element**: A part of the block that has no standalone meaning (e.g., `header__logo`).
- **Modifier**: A flag on a block or element that changes its appearance or behavior (e.g., `header__logo--large`).

## Conclusion
By leveraging Vue.js for its reactive and component-based architecture, and SASS for its powerful and organized CSS preprocessor capabilities, 3qary aims to provide a robust and maintainable frontend codebase. The use of the 7-1 architecture and BEM methodology further enhances the structure and clarity of the styles, ensuring a scalable solution for the project.
