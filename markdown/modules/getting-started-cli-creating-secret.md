{%- set _mod_docs_content_type = "PROCEDURE" %}
# Providing access to the database by creating a secret {id="getting-started-cli-creating-secret_{{ context }}"}

Create a `Secret` resource to securely provide the back-end application with the sensitive database connection credentials. {._abstract}

The `nationalparks` application needs information, such as the database name, username, and passwords, to access the MongoDB database. However, because this information is sensitive, you should not store it directly in the pod.

You can use a _secret_ to store sensitive information, and share that secret with workloads.

`Secret` objects provide a mechanism to hold sensitive information such as passwords, {{ product_title }} client configuration files, and private source repository credentials. Secrets decouple sensitive content from the pods. You can mount secrets into containers by using a volume plugin or by passing the secret in as an environment variable. The system can then use secrets to provide the pod with the sensitive information.

The following procedure creates the `nationalparks-mongodb-parameters` secret and mounts it to the `nationalparks` workload.

**Prerequisites**

*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.

**Procedure**

1.  Create the secret with the required database access information by running the following command:
    ```terminal
    $ oc create secret generic nationalparks-mongodb-parameters --from-literal=DATABASE_SERVICE_NAME=mongodb-nationalparks --from-literal=MONGODB_USER=mongodb --from-literal=MONGODB_PASSWORD=mongodb --from-literal=MONGODB_DATABASE=mongodb --from-literal=MONGODB_ADMIN_PASSWORD=mongodb
    ```
1.  Import the environment from the secret to the `nationalparks` workload by running the following command:
    ```terminal
    $ oc set env --from=secret/nationalparks-mongodb-parameters deploy/nationalparks
    ```
1.  Wait for the `nationalparks` deployment to roll out a new revision with this environment information. Check the status of the `nationalparks` deployment by running the following command:
    ```terminal
    $ oc rollout status deployment nationalparks
    ```
    ```terminal title="Example output"
    deployment "nationalparks" successfully rolled out
    ```