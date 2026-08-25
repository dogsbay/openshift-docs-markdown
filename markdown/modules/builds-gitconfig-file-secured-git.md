{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret from a .gitconfig file for secured Git {id="builds-gitconfig-file-secured-git_{{ context }}"}

If your Git server is secured with two-way SSL and user name with password, you must add the certificate files to your source build and add references to the certificate files in the `.gitconfig` file.

**Prerequisites**

*   You must have Git credentials.

**Procedure**

Add the certificate files to your source build and add references to the certificate files in the `.gitconfig` file.

1.  Add the `client.crt`, `cacert.crt`, and `client.key` files to the `/var/run/secrets/openshift.io/source/` folder in the application source code.
1.  In the `.gitconfig` file for the server, add the `[http]` section shown in the following example:
    ```terminal
    # cat .gitconfig
    ```
    ```terminal title="Example output"
    [user]
            name = <name>
            email = <email>
    [http]
            sslVerify = false
            sslCert = /var/run/secrets/openshift.io/source/client.crt
            sslKey = /var/run/secrets/openshift.io/source/client.key
            sslCaInfo = /var/run/secrets/openshift.io/source/cacert.crt
    ```
1.  Create the secret:
    ```terminal
    $ oc create secret generic <secret_name> \
    --from-literal=username=<user_name> \// (1)
    --from-literal=password=<password> \// (2)
    --from-file=.gitconfig=.gitconfig \
    --from-file=client.crt=/var/run/secrets/openshift.io/source/client.crt \
    --from-file=cacert.crt=/var/run/secrets/openshift.io/source/cacert.crt \
    --from-file=client.key=/var/run/secrets/openshift.io/source/client.key
    ```
    1.  The user’s Git user name.
    1.  The password for this user.


:::important

To avoid having to enter your password again, be sure to specify the source-to-image (S2I) image in your builds. However, if you cannot clone the repository, you must still specify your user name and password to promote the build.

:::


**Additional resources**
{._additional-resources}

*   `/var/run/secrets/openshift.io/source/` folder in the application source code.