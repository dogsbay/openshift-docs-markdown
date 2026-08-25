{%- set _mod_docs_content_type = "PROCEDURE" %}

# Issues with creating the registry {id="ipi-install-troubleshooting-registry-issues_{{ context }}"}

When creating a disconnected registry, you might encounter a "User Not Authorized" error when attempting to mirror the registry. This error might occur if you fail to append the new authentication to the existing `pull-secret.txt` file. {._abstract}

**Procedure**

1.  Check to ensure authentication is successful by running the following command:
    ```terminal
    $ /usr/local/bin/oc adm release mirror \
      -a pull-secret-update.json
      --from=$UPSTREAM_REPO \
      --to-release-image=$LOCAL_REG/$LOCAL_REPO:${VERSION} \
      --to=$LOCAL_REG/$LOCAL_REPO
    ```

    :::note

    Example output of the variables used to mirror the install images:

    ```terminal
    UPSTREAM_REPO=${RELEASE_IMAGE}
    LOCAL_REG=<registry_FQDN>:<registry_port>
    LOCAL_REPO='ocp4/openshift4'
    ```

    The values of `RELEASE_IMAGE` and `VERSION` were set during the ***Retrieving OpenShift Installer*** step of the ***Setting up the environment for an OpenShift installation*** section.
    
    :::

1.  After mirroring the registry, confirm that you can access it in your
disconnected environment by running the following command:
    ```terminal
    $ curl -k -u <user>:<password> https://registry.example.com:<registry_port>/v2/_catalog
    {"repositories":["<Repo_Name>"]}
    ```