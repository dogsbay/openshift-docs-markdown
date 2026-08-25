{%- set _mod_docs_content_type = "CONCEPT" %}
# About basic authentication {id="identity-provider-about-basic-authentication_{{ context }}"}

Configure basic authentication to validate user credentials against a remote service over HTTP. Use this integration when you need a flexible back-end for username and password login in {{ product_title }}. {._abstract}

Basic authentication is a generic back-end integration mechanism that allows users to log in to {{ product_title }} with credentials validated against a remote identity provider.

Because basic authentication is generic, you can use this identity provider for advanced authentication configurations.


:::important

Basic authentication must use an HTTPS connection to the remote server to prevent potential snooping of the user ID and password and man-in-the-middle attacks.

:::


With basic authentication configured, users send their username and password to {{ product_title }} during login. {{ product_title }} validates those credentials against a remote server. {{ product_title }} makes a server-to-server request, passing the credentials as a basic authentication header.


:::note

This only works for username and password login mechanisms, and {{ product_title }} must be able to make network requests to the remote authentication server.

:::


Usernames and passwords are validated against a remote URL that is protected by basic authentication and returns JSON.

A `401` response indicates failed authentication.

A non-`200` status, or the presence of a non-empty "error" key, indicates an error:

```terminal
{"error":"Error message"}
```

A `200` status with a `sub` (subject) key indicates success:

```terminal
{"sub":"userid"}
```

where:


`userid`
:   Specifies a value that is unique to the authenticated user and must not be modified.

A successful response can optionally provide additional data, such as:

*   A display name using the `name` key. For example:
    ```terminal
    {"sub":"userid", "name": "User Name", ...}
    ```
*   An email address using the `email` key. For example:
    ```terminal
    {"sub":"userid", "email":"user@example.com", ...}
    ```
*   A preferred username using the `preferred_username` key. This is useful when the unique, unchangeable subject is a database key or UID, and a more human-readable name exists. This is used as a hint when provisioning the {{ product_title }} user for the authenticated identity. For example:
    ```terminal
    {"sub":"014fbff9a07c", "preferred_username":"bob", ...}
    ```