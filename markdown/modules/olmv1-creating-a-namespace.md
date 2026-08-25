{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a namespace {id="olmv1-creating-a-namespace_{{ context }}"}

Before you create a service account to install and manage your cluster extension, you must create a namespace. {._abstract}

**Prerequisites**

*   Access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.

**Procedure**

*   Create a new namespace for the service account of the extension that you want to install by running the following command:
    ```terminal
    $ oc adm new-project <new_namespace>
    ```