{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add application RPMs to a blueprint {id="microshift-adding-app-rpms-to-blueprint_{{ context }}"}

To add application RPMs to a blueprint on {{ microshift_short }}, you must create a local repository that image builder can use to create the ISO. With this procedure, the required container images for your workload can be pulled over the network. {._abstract}

**Prerequisites**

*   You have root access to the host.
*   Workload or application RPMs exist in the `~/rpmbuild/RPMS` directory.

**Procedure**

1.  Create a local RPM repository by running the following command:
    ```terminal
    $ createrepo ~/rpmbuild/RPMS/
    ```
1.  Give image builder access to the RPM repository by running the following command:
    ```terminal
    $ sudo chmod a+rx ~
    ```

You must ensure that image builder has all of the necessary permissions to access all of the files needed for image building, or the build cannot proceed.

1.  Create the blueprint file, `repo-local-rpmbuild.toml` using the following template:
    ```toml
    id = "local-rpm-build"
    name = "RPMs build locally"
    type = "yum-baseurl"
    url = "file://_<path>_/rpmbuild/RPMS"
    check_gpg = false
    check_ssl = false
    system = false
    ```

Replace `_<path>_` with the path to create a location that you choose. This path is used in later commands in this procedure to set up the repository and copy the RPMs.

1.  Add the repository as a source for image builder by running the following command:
    ```terminal
    $ sudo composer-cli sources add repo-local-rpmbuild.toml
    ```
1.  Add the RPM to your blueprint, by adding the following lines:
    ```toml
    …
    [[packages]]
    name = "_<application_workload_manifests>_"
    version = "*"
    …
    ```

    Replace `_<application_workload_manifests>_` with the name of your workload.
1.  Push the updated blueprint to image builder by running the following command:
    ```terminal
    $ sudo composer-cli blueprints push repo-local-rpmbuild.toml
    ```
1.  At this point, you can either run image builder to create the ISO, or embed the container images for offline use.
    1.  To create the ISO, start image builder by running the following command:
        ```terminal
        $ sudo composer-cli compose start-ostree repo-local-rpmbuild edge-commit
        ```

        In this scenario, the container images are pulled over the network by the edge device during startup.