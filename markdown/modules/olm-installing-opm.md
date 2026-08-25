{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the opm CLI {id="olm-installing-opm_{{ context }}"}

You can install the `opm` CLI tool on your Linux, macOS, or Windows workstation.

**Prerequisites**

*   For {{ op_system_base_full }} 9.0 and later, you must provide the following packages:
    *   `podman` version 1.9.3+ (version 2.0+ recommended)
    *   `glibc` version 2.28+

**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Navigate to the [OpenShift mirror site](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/latest-{{ product_version }}/) and download the latest version of the tarball that matches your operating system.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Navigate to the [OpenShift mirror site](https://mirror.openshift.com/pub/openshift-v4/x86_64/clients/ocp/) and download the latest version of the tarball that matches your operating system.
{% endif %}
1.  Unpack the archive.
    *   For Linux or macOS:
        ```terminal
        $ tar xvf <file>
        ```
    *   For Windows, unzip the archive with a ZIP program.
1.  Place the file anywhere in your `PATH`.
    *   For Linux or macOS:
        1.  Check your `PATH`:
            ```terminal
            $ echo $PATH
            ```
        1.  Move the file. For example:
            ```terminal
            $ sudo mv ./opm /usr/local/bin/
            ```
    *   For Windows:
        1.  Check your `PATH`:
            ```terminal
            C:\> path
            ```
        1.  Move the file:
            ```terminal
            C:\> move opm.exe <directory>
            ```

**Verification**

*   After you install the `opm` CLI, verify that it is available:
    ```terminal
    $ opm version
    ```