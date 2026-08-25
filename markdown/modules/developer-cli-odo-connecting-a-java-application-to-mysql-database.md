{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting a Java application to a database {id="connecting-a-java-application-to-a-database_{{ context }}"}

To connect your Java application to the database, use the `odo link` command.

**Procedure**

1.  Display the list of services:
    ```terminal
    $ odo service list
    ```
    ```terminal title="Example output"
    NAME                        AGE
    Database/sampledatabase     6m31s
    ```
1.  Connect the database to your application:
    ```terminal
    $ odo link Database/sampledatabase
    ```
1.  Push the changes to your cluster:
    ```terminal
    $ odo push
    ```

    After the link has been created and pushed, a secret that contains the database connection data is created.
1.  Check the component for values injected from the database service:
    ```sh
    $ odo exec -- bash -c 'env | grep DATABASE'
    declare -x DATABASE_CLUSTERIP="10.106.182.173"
    declare -x DATABASE_DB_NAME="sampledb"
    declare -x DATABASE_DB_PASSWORD="samplepwd"
    declare -x DATABASE_DB_USER="sampleuser"
    ```
1.  Open the URL of your Java application and navigate to the `CreatePerson.xhtml` data entry page. Enter a username and age by using the form. Click **Save**.

    Note that now you can see the data in the database by clicking the **View Persons Record List** link.

    You can also use a CLI tool such as `psql` to manipulate the database.