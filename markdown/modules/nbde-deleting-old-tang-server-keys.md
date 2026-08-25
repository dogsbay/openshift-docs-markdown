{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting old Tang server keys {id="nbde-deleting-old-tang-server-keys_{{ context }}"}

**Prerequisites**

*   A root shell on the Linux machine running the Tang server.

**Procedure**

1.  Locate and access the directory where the Tang server key is stored. This is usually the `/var/db/tang` directory:
    ```terminal
    # cd /var/db/tang/
    ```
1.  List the current Tang server keys, showing the advertised and unadvertised keys:
    ```terminal
    # ls -A1
    ```
    ```terminal title="Example output"
    .36AHjNH3NZDSnlONLz1-V4ie6t8.jwk
    .gJZiNPMLRBnyo_ZKfK4_5SrnHYo.jwk
    Bp8XjITceWSN_7XFfW7WfJDTomE.jwk
    WOjQYkyK7DxY_T5pMncMO5w0f6E.jwk
    ```
1.  Delete the old keys:
    ```terminal
    # rm .*.jwk
    ```
1.  List the current Tang server keys to verify the unadvertised keys are no longer present:
    ```terminal
    # ls -A1
    ```
    ```terminal title="Example output"
    Bp8XjITceWSN_7XFfW7WfJDTomE.jwk
    WOjQYkyK7DxY_T5pMncMO5w0f6E.jwk
    ```

**Verification**

At this point, the server still advertises the new keys, but an attempt to decrypt based on the old key will fail.

1.  Query the Tang server for the current advertised key thumbprints:
    ```terminal
    # tang-show-keys 7500
    ```
    ```terminal title="Example output"
    WOjQYkyK7DxY_T5pMncMO5w0f6E
    ```
1.  Decrypt the test file created earlier to verify decryption against the old keys fails:
    ```terminal
    # clevis decrypt </tmp/encryptValidation
    ```
    ```terminal title="Example output"
    Error communicating with the server!
    ```

If you are running multiple Tang servers behind a load balancer that share the same key material, ensure the changes made are properly synchronized across the entire set of servers before proceeding.