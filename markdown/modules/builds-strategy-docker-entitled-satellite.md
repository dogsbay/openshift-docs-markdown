{%- set _mod_docs_content_type = "PROCEDURE" %}
# Docker builds using Red Hat Satellite subscriptions {id="builds-strategy-docker-entitled-satellite_{{ context }}"}

Docker strategy builds can use Red Hat Satellite repositories to install subscription content.

**Prerequisites**

*   You have added the entitlement keys and Satellite repository configurations as build volumes.

**Procedure**

*   Use the following example to create a `Dockerfile` for installing content with Satellite:
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
    1.  Contact your Satellite system administrator to find the correct repositories for the build’s installed packages.
    1.  You must restore the `/etc/rhsm-host` symbolic link to keep your image compatible with other Red Hat container images.