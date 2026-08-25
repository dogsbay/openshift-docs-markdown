{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding storage to the application components {id="adding-storage-to-the-application-components_{{ context }}"}

Use the `odo storage` command to add persistent data to your application. Examples of data that must persist include database files, dependencies, and build artifacts, such as a `.m2` Maven directory.

**Procedure**

1.  Add the storage to your component:
    ```terminal
    $ odo storage create <storage_name> --path=<path_to_the_directory> --size=<size>
    ```
1.  Push the storage to the cluster:
    ```terminal
    $ odo push
    ```
1.  Verify that the storage is now attached to your component by listing all storage in the component:
    ```terminal
    $ odo storage list
    ```
    ```terminal title="Example output"
    The component 'nodejs' has the following storage attached:
    NAME           SIZE     PATH      STATE
    mystorage      1Gi      /data     Pushed
    ```
1.  Delete the storage from your component:
    ```terminal
    $ odo storage delete <storage_name>
    ```
1.  List all storage to verify that the storage state is `Locally Deleted`:
    ```terminal
    $ odo storage list
    ```
    ```terminal title="Example output"
    The component 'nodejs' has the following storage attached:
    NAME           SIZE     PATH      STATE
    mystorage      1Gi      /data     Locally Deleted
    ```
1.  Push the changes to the cluster:
    ```terminal
    $ odo push
    ```