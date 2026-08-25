{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up the database {id="templates-rails-setting-up-database_{{ context }}"}

You can install PostgreSQL on your local system for Ruby on Rails development. This gives your application a local database to connect to during development and testing before you deploy to {{ product_title }}. {._abstract}

**Procedure**

1.  Install the database by running the following command:
    ```terminal
    $ sudo yum install -y postgresql postgresql-server postgresql-devel
    ```
1.  Initialize the database by running the following command:
    ```terminal
    $ sudo postgresql-setup initdb
    ```

    This command creates the `/var/lib/pgsql/data` directory, in which the data is stored.
1.  Start the database by running the following command:
    ```terminal
    $ sudo systemctl start postgresql.service
    ```
1.  When the database is running, create your `rails` user by running the following command:
    ```terminal
    $ sudo -u postgres createuser -s rails
    ```

    :::note

    The user that is created has no password.
    
    :::