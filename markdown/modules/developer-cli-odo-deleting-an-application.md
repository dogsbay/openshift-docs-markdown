{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting an application {id="deleting-an-application_{{ context }}"}

Use the `odo app delete` command to delete your application.

**Procedure**

1.  List the applications in the current project:
    ```terminal
    $ odo app list
    ```
    ```terminal title="Example output"
        The project '<project_name>' has the following applications:
        NAME
        app
    ```
1.  List the components associated with the applications. These components will be deleted with the application:
    ```terminal
    $ odo component list
    ```
    ```terminal title="Example output"
        APP     NAME                      TYPE       SOURCE        STATE
        app     nodejs-nodejs-ex-elyf     nodejs     file://./     Pushed
    ```
1.  Delete the application:
    ```terminal
    $ odo app delete <application_name>
    ```
    ```terminal title="Example output"
        ? Are you sure you want to delete the application: <application_name> from project: <project_name>
    ```
1.  Confirm the deletion with `Y`. You can suppress the confirmation prompt using the `-f` flag.