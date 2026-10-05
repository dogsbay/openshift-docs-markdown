{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtain a FIPS-capable installation program using the public OpenShift mirror {id="installation-obtaining-fips-installer-mirror_{{ context }}"}

To install a {{ product_title }} cluster in FIPS mode, download the FIPS-capable installation binary from the public OpenShift mirror. {._abstract}

After you obtain the binary, proceed with the cluster installation, replacing all instances of the `openshift-install` binary with `openshift-install-fips`.

**Prerequisites**

*   You have access to the internet.

**Procedure**

1.  Download the installation program from https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.18/openshift-install-rhel9-amd64.tar.gz.
1.  Extract the installation program. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar -xvf openshift-install-rhel9-amd64.tar.gz
    ```
1.  Proceed with cluster installation, replacing all instances of the `openshift-install` command with `openshift-install-fips`.