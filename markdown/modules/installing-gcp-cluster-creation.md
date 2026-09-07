{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring user-defined labels and tags for {{ gcp_short }} {id="installing-gcp-cluster-creation_{{ context }}"}

You can apply key-value pairs as labels and tags to your {{ gcp_full }} resources to organize, manage, and automate your {{ product_title }} infrastructure. {._abstract}

**Prerequisites**

*   The installation program requires that a service account includes a `TagUser` role, so that the program can create the {{ product_title }} cluster with defined tags at both organization and project levels.

**Procedure**

*   Update the `install-config.yaml` file to define the list of required labels and tags.

    :::note

    If you set labels and tags during creation of the `install-config.yaml` configuration file, you cannot create new or update existing labels and tags after creation of the cluster.
    
    :::


    The following sample `install-config.yaml` file defines user labels and tags:
    ```yaml
    apiVersion: v1
    credentialsMode: Passthrough
    platform:
     gcp:
       userLabels:
       - key: <label_key>
         value: <label_value>
       userTags:
       - parentID: <OrganizationID/ProjectID>
         key: <tag_key_short_name>
         value: <tag_value_short_name>
    # ...
    ```

    where:
*   `credentialsMode`: In passthrough mode, the Cloud Credential Operator (CCO) passes the provided cloud credential to the components that request cloud credentials.
*   `userLabels`: Adds keys and values as labels to the resources created on {{ gcp_short }}.
*   `<label_key>`: Specifies the label name.
*   `<label_value>`: Specifies the label content.
*   `userTags`: Adds keys and values as tags to the resources created on {{ gcp_short }}.
*   `<OrganizationID/ProjectID>`: Specifies the ID of the hierarchical resource where you defined the tags at the organization or the project level.