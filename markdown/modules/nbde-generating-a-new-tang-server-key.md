{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating a new Tang server key {id="nbde-generating-a-new-tang-server-key_{{ context }}"}

**Prerequisites**

*   A root shell on the Linux machine running the Tang server.
*   To facilitate verification of the Tang server key rotation, encrypt a small test file with the old key:
    ```terminal
    # echo plaintext | clevis encrypt tang '{"url":"http://localhost:7500”}' -y >/tmp/encrypted.oldkey
    ```
*   Verify that the encryption succeeded and the file can be decrypted to produce the same string `plaintext`:
    ```terminal
    # clevis decrypt </tmp/encrypted.oldkey
    ```

**Procedure**

1.  Locate and access the directory that stores the Tang server key. This is usually the `/var/db/tang` directory. Check the currently advertised key thumbprint:
    ```terminal
    # tang-show-keys 7500
    ```
    ```terminal title="Example output"
    36AHjNH3NZDSnlONLz1-V4ie6t8
    ```
1.  Enter the Tang server key directory:
    ```terminal
    # cd /var/db/tang/
    ```
1.  List the current Tang server keys:
    ```terminal
    # ls -A1
    ```
    ```terminal title="Example output"
    36AHjNH3NZDSnlONLz1-V4ie6t8.jwk
    gJZiNPMLRBnyo_ZKfK4_5SrnHYo.jwk
    ```

    During normal Tang server operations, there are two `.jwk` files in this directory: one for signing and verification, and another for key derivation.
1.  Disable advertisement of the old keys:
    ```terminal
    # for key in *.jwk; do \
      mv -- "$key" ".$key"; \
    done
    ```

    New clients setting up Network-Bound Disk Encryption (NBDE) or requesting keys will no longer see the old keys. Existing clients can still access and use the old keys until they are deleted. The Tang server reads but does not advertise keys stored in UNIX hidden files, which start with the `.` character.
1.  Generate a new key:
    ```terminal
    # /usr/libexec/tangd-keygen /var/db/tang
    ```
1.  List the current Tang server keys to verify the old keys are no longer advertised, as they are now hidden files, and new keys are present:
    ```terminal
    # ls -A1
    ```
    ```terminal title="Example output"
    .36AHjNH3NZDSnlONLz1-V4ie6t8.jwk
    .gJZiNPMLRBnyo_ZKfK4_5SrnHYo.jwk
    Bp8XjITceWSN_7XFfW7WfJDTomE.jwk
    WOjQYkyK7DxY_T5pMncMO5w0f6E.jwk
    ```

    Tang automatically advertises the new keys.

    :::note

    More recent Tang server installations include a helper `/usr/libexec/tangd-rotate-keys` directory that takes care of disabling advertisement and generating the new keys simultaneously.
    
    :::

1.  If you are running multiple Tang servers behind a load balancer that share the same key material, ensure the changes made here are properly synchronized across the entire set of servers before proceeding.

**Verification**

1.  Verify that the Tang server is advertising the new key, and not advertising the old key:
    ```terminal
    # tang-show-keys 7500
    ```
    ```terminal title="Example output"
    WOjQYkyK7DxY_T5pMncMO5w0f6E
    ```
1.  Verify that the old key, while not advertised, is still available to decryption requests:
    ```terminal
    # clevis decrypt </tmp/encrypted.oldkey
    ```