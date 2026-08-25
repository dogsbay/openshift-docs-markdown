{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing packages to a `toolbox` container {id="installing-packages-to-a-toolbox-container_{{ context }}"}

{%- if not openshift_origin %}
By default, running the `toolbox` command starts a container with the `registry.redhat.io/rhel9/support-tools:latest` image. This image contains the most frequently used support tools. If you need to collect node-specific data that requires a support tool that is not part of the image, you can install additional packages.
{% endif %} {._abstract}

{% if openshift_origin %}
By default, running the `toolbox` command starts a container with the `quay.io/fedora/fedora` image. This image contains the most frequently used support tools. If you need to collect node-specific data that requires a support tool that is not part of the image, you can install additional packages.
{% endif %}

**Prerequisites**

*   You have accessed a node with the `oc debug node/<node_name>` command.
*   You can access your system as a user with root privileges.

**Procedure**

1.  Set `/host` as the root directory within the debug shell. The debug pod mounts the host’s root file system in `/host` within the pod. By changing the root directory to `/host`, you can run binaries contained in the host’s executable paths:
    ```terminal
    # chroot /host
    ```
1.  Start the toolbox container:
    ```terminal
    # toolbox
    ```
1.  Install the additional package, such as `wget`:
    ```terminal
    # dnf install -y <package_name>
    ```