{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a database with `odo` {id="creating-a-database-with-odo_{{ context }}"}

To create a database, you must have an access to the database Operator. For this example, Dev4Devs PostgreSQL Operator is used.

**Procedure**

1.  View the list of the services in your project:
    ```terminal
    $ odo catalog list services
    ```
    ```text title="Example output"
    Operators available in the cluster
    NAME                                             CRDs
    postgresql-operator.v0.1.1                       Backup, Database
    ```
1.  Store the YAML of the service in a file:
    ```terminal
    $ odo service create postgresql-operator.v0.1.1/Database --dry-run > db.yaml
    ```
1.  Add the following values under the `metadata:` section in the `db.yaml` file:
    ```yaml
      name: sampledatabase
      annotations:
        service.binding/db.name: 'path={.spec.databaseName}'
        service.binding/db.password: 'path={.spec.databasePassword}'
        service.binding/db.user: 'path={.spec.databaseUser}'
    ```

    This configuration ensures that when a database service is started, appropriate annotations are added to it. Annotations help the Service Binding Operator in injecting the values for `databaseName`, `databasePassword`, and `databaseUser` into the application.
1.  Change the following values under the `spec:` section of the YAML file:
    ```yaml
      databaseName: "<database_name>"
      databasePassword: "<password>"
      databaseUser: "<username>"
    ```
1.  Create a database from the YAML file:
    ```terminal
    $ odo service create --from-file db.yaml
    ```

    A database instance is now present in your project.