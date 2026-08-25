{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the Operator Lifecycle Manager (OLM) from an RPM package {id="microshift-installing-with-olm-from-rpm-package_{{ context }}"}

When you install {{ microshift_short }}, the Operator Lifecycle Manager (OLM) package is not installed by default. You can install the OLM on your {{ microshift_short }} instance by using an RPM package. OLM helps you install, update, and manage the lifecycle of Kubernetes native applications (Operators) and their associated services running in each {{ microshift_short }} node. {._abstract}

**Procedure**

1.  Install the OLM package by running the following command:
    ```terminal
    $ sudo dnf install microshift-olm
    ```
1.  To apply the manifest from the package to an active node, run the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```