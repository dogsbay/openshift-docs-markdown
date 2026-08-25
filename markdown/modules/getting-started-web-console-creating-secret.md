{%- set _mod_docs_content_type = "PROCEDURE" %}
# Providing access to the database by creating a secret {id="getting-started-web-console-creating-secret_{{ context }}"}

Create a `Secret` resource to securely provide the back-end application with the sensitive database connection credentials. {._abstract}

The `nationalparks` application needs information, such as the database name, username, and passwords, to access the MongoDB database. However, because this information is sensitive, you should not store it directly in the pod.

You can use a _secret_ to store sensitive information, and share that secret with workloads.

`Secret` objects provide a mechanism to hold sensitive information such as passwords, {{ product_title }} client configuration files, and private source repository credentials. Secrets decouple sensitive content from the pods. You can mount secrets into containers by using a volume plugin or by passing the secret in as an environment variable. The system can then use secrets to provide the pod with the sensitive information.

The following procedure creates the `nationalparks-mongodb-parameters` secret and mounts it to the `nationalparks` workload.

**Prerequisites**

*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.

**Procedure**

1.  Navigate to **Workloads** → **Secrets**.
1.  Click **Create** → **Key/value secret**.
1.  In the **Secret name** field, enter `nationalparks-mongodb-parameters`.
1.  Enter the following values for **Key** and **Value**:

    **Secret keys and values**

    | Key | Value |
    | --- | --- |
    | `DATABASE_SERVICE_NAME` | `mongodb-nationalparks` |
    | `MONGODB_USER` | `mongodb` |
    | `MONGODB_PASSWORD` | `mongodb` |
    | `MONGODB_DATABASE` | `mongodb` |
    | `MONGODB_ADMIN_PASSWORD` | `mongodb` |


    :::tip

    Click **Add key/value** to add each additional key/value pair.
    
    :::

1.  Click **Create**.
1.  Click **Add Secret to workload**.
1.  From the **Add this secret to workload** list, select `nationalparks`.
1.  Click **Save**.

    This change in configuration triggers a new rollout of the `nationalparks` deployment with the environment variables properly injected.