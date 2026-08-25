{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting basic authentication {id="identity-provider-basic-authentication-troubleshooting_{{ context }}"}

Troubleshoot basic authentication by testing backend connectivity and verifying JSON login responses when users cannot authenticate in {{ product_title }}. {._abstract}

The most common issue relates to network connectivity to the backend server. To debug connectivity, run `curl` commands on a control plane node.

**Procedure**

1.  To test successful and unsuccessful logins, replace the `<user>` and `<password>` in the following example command with valid or invalid credentials:
    ```terminal
    $ curl --cacert /path/to/ca.crt --cert /path/to/client.crt --key /path/to/client.key -u <user>:<password> -v https://www.example.com/remote-idp
    ```
1.  Review successful login responses.

    A `200` status with a `sub` (subject) key indicates success:
    ```terminal
    {"sub":"userid"}
    ```

    The subject must be unique to the authenticated user and must not be modified.

    A successful response can optionally provide additional data, such as:
    *   A display name using the `name` key:
        ```terminal
        {"sub":"userid", "name": "User Name", ...}
        ```
    *   An email address using the `email` key:
        ```terminal
        {"sub":"userid", "email":"user@example.com", ...}
        ```
    *   A preferred username using the `preferred_username` key:
        ```terminal
        {"sub":"014fbff9a07c", "preferred_username":"bob", ...}
        ```

    The `preferred_username` key is useful when the unique, unchangeable subject is a database key or UID, and a more human-readable name exists. This is used as a hint when provisioning the {{ product_title }} user for the authenticated identity.
1.  Review failed login responses.
    *   A `401` response indicates failed authentication.
    *   A non-`200` status or the presence of a non-empty "error" key indicates an error: `{"error":"Error message"}`