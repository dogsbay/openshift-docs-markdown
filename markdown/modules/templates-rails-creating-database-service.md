{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the database service {id="templates-rails-creating-database-service_{{ context }}"}

You must create a database service for your Rails application. Be sure to set the environment variables for the database name, username, and password. These are required for the service to connect correctly to your Rails application. {._abstract}

You can change the values of these environment variables to any values you choose. The variables are as follows:

*   `POSTGRESQL_DATABASE`
*   `POSTGRESQL_USER`
*   `POSTGRESQL_PASSWORD`

Setting these variables ensures that the following occurs:

*   A database exists with the specified name.
*   A user exists with the specified name.
*   The user can access the specified database with the specified password.

**Procedure**

1.  Create the database service by running the following command:
    ```terminal
    $ oc new-app postgresql -e POSTGRESQL_DATABASE=db_name -e POSTGRESQL_USER=username -e POSTGRESQL_PASSWORD=password
    ```

    :::note

    To also set a database administrator password, add `-e POSTGRESQL_ADMIN_PASSWORD=admin_pw` to the command.
    
    :::

1.  Monitor the pod status by running the following command:
    ```terminal
    $ oc get pods --watch
    ```