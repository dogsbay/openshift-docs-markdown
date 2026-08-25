{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create the {{ op_system_ostree }} image with image builder {id="microshift-creating-ostree-iso_{{ context }}"}

The {{ op_system_ostree }} Installer image pulls the commit from the running container and creates an installable boot ISO with a Kickstart file configured to use the embedded `rpm-ostree` commit. {._abstract}

**Prerequisites**

*   Your build host meets the image builder system requirements.
*   You installed and set up image builder and the `composer-cli` tool.
*   You root-user access to your build host.
*   You installed the `podman` tool.

**Procedure**

1.  Start an `ostree` container image build by running the following command:
    ```terminal
    $ BUILDID=$(sudo composer-cli compose start-ostree --ref "rhel/{op-system-version-major}/$(uname -m)/edge" __<microshift_blueprint>__ edge-container | awk '/^Compose/ {print $2}')
    ```

    Replace `_<microshift_blueprint>_` with the name of your blueprint.

    This command also returns the identification (ID) of the build for monitoring.
1.  You can check the status of the build periodically by running the following command:
    ```terminal
    $ sudo composer-cli compose status
    ```
    ```terminal title="Example output of a running build"
    ID                                     Status     Time                     Blueprint                 Version   Type               Size
    cc3377ec-4643-4483-b0e7-6b0ad0ae6332   RUNNING    Wed Jun 7 12:26:23 2023  microshift_blueprint      0.0.1     edge-container
    ```
    ```terminal title="Example output of a completed build"
    ID                                     Status     Time                      Blueprint              Version   Type               Size
    cc3377ec-4643-4483-b0e7-6b0ad0ae6332   FINISHED   Wed Jun 7 12:32:37 2023   microshift_blueprint   0.0.1     edge-container
    ```

    :::note

    You can use the `watch` command to monitor your build if you are familiar with how to start and stop it.
    
    :::

1.  Download the container image using the ID and get the image ready for use by running the following command:
    ```terminal
    $ sudo composer-cli compose image ${BUILDID}
    ```
1.  Change the ownership of the downloaded container image to the current user by running the following command:
    ```terminal
    $ sudo chown $(whoami). ${BUILDID}-container.tar
    ```
1.  Add read permissions for the current user to the image by running the following command:
    ```terminal
    $ sudo chmod a+r ${BUILDID}-container.tar
    ```
1.  Bootstrap a server on port 8085 for the `ostree` container image to be consumed by the ISO build by completing the following steps:
    1.  Get the `IMAGEID` variable result by running the following command:
        ```terminal
        $ IMAGEID=$(cat < "./${BUILDID}-container.tar" | sudo podman load | grep -o -P '(?<=sha256[@:])[a-z0-9]*')
        ```
    1.  Use the `IMAGEID` variable result to run the Podman command step by running the following command:
        ```terminal
        $ sudo podman run -d --name=minimal-microshift-server -p 8085:8080 ${IMAGEID}
        ```

        This command also returns the ID of the container saved in the `IMAGEID` variable for monitoring.
1.  Generate the installation program blueprint file by running the following command:
    ```text
    cat > microshift-installer.toml <<EOF
    name = "microshift-installer"

    description = ""
    version = "0.0.0"
    modules = []
    groups = []
    packages = []
    EOF
    ```