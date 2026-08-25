{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a service account for an extension {id="olmv1-creating-a-service-account_{{ context }}"}

You must create a service account to install, manage, and update a cluster extension. {._abstract}

**Prerequisites**

*   Access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.

**Procedure**

1.  Create a service account, similar to the following example:
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: <extension>-installer
      namespace: <namespace>
    ```
    ```yaml title="Example extension-service-account.yaml file"
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: pipelines-installer
      namespace: pipelines
    ```
1.  Apply the service account by running the following command:
    ```terminal
    $ oc apply -f extension-service-account.yaml
    ```