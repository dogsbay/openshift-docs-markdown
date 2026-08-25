{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting user-owned OAuth access tokens {id="oauth-delete-tokens_{{ context }}"}

You can use the following procedure to delete any user-owned OAuth tokens that are no longer needed. {._abstract}

The `oc logout` command only invalidates the OAuth token for the active session. Deleting an OAuth access token logs out the user from all sessions that use the token.

**Procedure**

*   Delete the user-owned OAuth access token:
    ```terminal
    $ oc delete useroauthaccesstokens <token_name>
    ```
    ```terminal title="Example output"
    useroauthaccesstoken.oauth.openshift.io "<token_name>" deleted
    ```