{%- set _mod_docs_content_type = "PROCEDURE" %}
# Embed workload container images for offline use {id="microshift-embed-images-offline-use_{{ context }}"}

To embed container images in devices at the edge that do not have any network connection, you must create a new container, mount the ISO, and then copy the contents into the file system. {._abstract}

**Prerequisites**

*   You have root access to the host.
*   Application RPMs have been added to a blueprint.
*   You installed the {{ oc_first }}.

**Procedure**

1.  Render the manifests, extract all of the container image references, and translate the application image to blueprint container sources by running the following command:
    ```terminal
    $ oc kustomize ~/manifests | grep "image:" | grep -oE '[^ ]+$' | while read line; do echo -e "[[containers]]\nsource = \"${line}\"\n"; done >><my_blueprint>.toml
    ```
1.  Push the updated blueprint to image builder by running the following command:
    ```terminal
    $ sudo composer-cli blueprints push _<my_blueprint>_.toml
    ```
1.  If your workload containers are located in a private repository, you must provide image builder with the necessary pull secrets:
    1.  Set the `auth_file_path` in the `[containers]` section in the `/etc/osbuild-worker/osbuild-worker.toml` configuration file to point to the pull secret.
    1.  If needed, create a directory and file for the pull secret, for example:
        ```terminal title="Example directory and file"
        [containers]
        auth_file_path = "/_<path>_/pull-secret.json"
        ```

        Use the custom location previously set for copying and retrieving images.
1.  Build the container image by running the following command:
    ```terminal
    $ sudo composer-cli compose start-ostree _<my_blueprint>_ edge-commit
    ```
1.  Proceed with your preferred `rpm-ostree` image flow, such as waiting for the build to complete, exporting the image and integrating it into your `rpm-ostree` repository or creating a bootable ISO.