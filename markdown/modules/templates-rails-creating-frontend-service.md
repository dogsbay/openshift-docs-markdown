{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the frontend service {id="templates-rails-creating-frontend-service_{{ context }}"}

You can create a frontend service with the `oc new-app` command. Specifying your source repository and database environment variables enables {{ product_title }} to build your application image and deploy it on the cluster. {._abstract}

**Procedure**

1.  Create the frontend service and specify the database-related environment variables that were set up when creating the database service by running the following command:
    ```terminal
    $ oc new-app path/to/source/code --name=rails-app -e POSTGRESQL_USER=username -e POSTGRESQL_PASSWORD=password -e POSTGRESQL_DATABASE=db_name -e DATABASE_SERVICE_NAME=postgresql
    ```

    With this command, {{ product_title }} fetches the source code, sets up the builder, builds your application image, and deploys the newly created image together with the specified environment variables. The application is named `rails-app`.
1.  Verify that the environment variables have been added by viewing the JSON document of the `rails-app` deployment config by running the following command:
    ```terminal
    $ oc get dc rails-app -o json
    ```

    The output includes the following section:
    ```json title="Example output"
    env": [
        {
            "name": "POSTGRESQL_USER",
            "value": "username"
        },
        {
            "name": "POSTGRESQL_PASSWORD",
            "value": "password"
        },
        {
            "name": "POSTGRESQL_DATABASE",
            "value": "db_name"
        },
        {
            "name": "DATABASE_SERVICE_NAME",
            "value": "postgresql"
        }

    ],
    ```
1.  Check the build process by running the following command:
    ```terminal
    $ oc logs -f build/rails-app-1
    ```
1.  After the build is complete, check the running pods in {{ product_title }} by running the following command:
    ```terminal
    $ oc get pods
    ```

    The output includes a line starting with `myapp-<number>-<hash>`, which confirms that the application is running in {{ product_title }}.
1.  Before your application is functional, you must initialize the database by running the database migration script. There are two ways you can do this:
    *   Manually from the running frontend container:
        *   Open a remote shell to the frontend pod by running the following command:
            ```terminal
            $ oc rsh <frontend_pod_id>
            ```
        *   Run the migration from inside the container by running the following command:
            ```terminal
            $ RAILS_ENV=production bundle exec rake db:migrate
            ```

            If you are running your Rails application in a `development` or `test` environment, you do not have to specify the `RAILS_ENV` environment variable.
    *   You can also run the migration by adding pre-deployment lifecycle hooks to your template.