{%- set _mod_docs_content_type = "PROCEDURE" %}

# Modifying the running application {id="modifying-the-running-application_{{ context }}"}

**Procedure**

1.  Change the local directory to the front-end directory:
    ```terminal
    $ cd frontend
    ```
1.  Monitor the changes on the file system using:
    ```terminal
    $ odo watch
    ```
1.  Edit the `index.html` file to change the displayed name for the game.

    :::note

    A slight delay is possible before {{ odo_title }} recognizes the change.
    
    :::


    {{ odo_title }} pushes the changes to the front-end component and prints its status to the terminal:
    ```terminal
    File /root/frontend/index.html changed
    File  changed
    Pushing files...
     ✓  Waiting for component to start
     ✓  Copying files to component
     ✓  Building component
    ```
1.  Refresh the application page in the web browser. The new name is now displayed.