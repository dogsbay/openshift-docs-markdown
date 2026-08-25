{%- set _mod_docs_content_type = "PROCEDURE" %}
# Docker builds using Subscription Manager {id="builds-strategy-docker-entitled-subman_{{ context }}"}

Docker strategy builds can use `yum` or `dnf` to install additional {{ op_system_base_full }} packages.

**Prerequisites**

*   The entitlement keys must be added as build strategy volumes.

**Procedure**

*   Use the following as an example Dockerfile to install content with the Subscription Manager:
    ```docker
    FROM registry.redhat.io/ubi9/ubi:latest
    RUN rm -rf /etc/rhsm-host (1)
    RUN yum --enablerepo=codeready-builder-for-rhel-9-x86_64-rpms install \ (2)
        nss_wrapper \
        uid_wrapper -y && \
        yum clean all -y
    RUN ln -s /run/secrets/rhsm /etc/rhsm-host (3)
    ```
    1.  You must include the command to remove the `/etc/rhsm-host` directory and all its contents in your Dockerfile before executing any `yum` or `dnf` commands.
    1.  Use the [Red Hat Package Browser](https://access.redhat.com/downloads/content/package-browser) to find the correct repositories for your installed packages.
    1.  You must restore the `/etc/rhsm-host` symbolic link to keep your image compatible with other Red Hat container images.