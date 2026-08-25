{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a project {id="creating-a-project_{{ context }}"}

Create a project to keep your source code, tests, and libraries organized in a separate single unit.

**Procedure**

1.  Log in to an {{ product_title }} cluster:
    ```terminal
    $ odo login -u developer -p developer
    ```
1.  Create a project:
    ```terminal
    $ odo project create myproject
    ```
    ```terminal title="Example output"
     ✓  Project 'myproject' is ready for use
     ✓  New project created and now using project : myproject
    ```