{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating user-defined tags for {{ azure_short }} {id="installation-creating-user-defined-tags-azure_{{ context }}"}

To define the list of user-defined tags, edit the `.platform.azure.userTags` field in the `install-config.yaml` file.

**Procedure**

*   Specify the `.platform.azure.userTags` field as shown in the following `install-config.yaml` file:
    ```yaml
    apiVersion: v1
    baseDomain: example.com
    #...
    platform:
      azure:
        userTags: (1)
          <key>: <value> (2)
    #...
    ```
    1.  Defines the additional keys and values that the installation program adds as tags to all {{ azure_short }} resources that it creates.
    1.  Specify the key and value. You can configure a maximum of 10 tags for resource group and resources. Tag keys are case-insensitive. For more information on requirements for specifying user-defined tags, see "User-defined tags requirements" section.
    ```yaml title="Example install-config.yaml file"
    apiVersion: v1
    baseDomain: example.com
    #...
    platform:
      azure:
        userTags:
          createdBy: user
          environment: dev
    #...
    ```

**Verification**

*   Access the list of created user-defined tags for the Azure resources by running the following command:
    ```terminal
    $ oc get infrastructures.config.openshift.io cluster -o=jsonpath-as-json='{.status.platformStatus.azure.resourceTags}'
    ```
    ```json title="Example output"
    [
        [
            {
                "key": "createdBy",
                "value": "user"
            },
            {
                "key": "environment",
                "value": "dev"
            }
        ]
    ]
    ```