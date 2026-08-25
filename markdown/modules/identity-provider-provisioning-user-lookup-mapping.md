{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually provisioning a user when using the lookup mapping method {id="identity-provider-provisioning-user-lookup-mapping_{{ context }}"}

You can manually provision users when the `lookup` mapping method is enabled. The `lookup` method disables automatic identity-to-user mapping during login, requiring manual provisioning of each user after configuring the identity provider. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create an {{ product_title }} user:
    ```terminal
    $ oc create user <username>
    ```
1.  Create an {{ product_title }} identity:
    ```terminal
    $ oc create identity <identity_provider>:<identity_provider_user_id>
    ```

    Where `<identity_provider_user_id>` is a name that uniquely represents the user in the identity provider.
1.  Create a user identity mapping for the created user and identity:
    ```terminal
    $ oc create useridentitymapping <identity_provider>:<identity_provider_user_id> <username>
    ```