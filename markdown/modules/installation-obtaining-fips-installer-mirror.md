{%- set _mod_docs_content_type = "PROCEDURE" %}
# Obtaining a FIPS-capable installation program using the public OpenShift mirror {id="installation-obtaining-fips-installer-mirror_{{ context }}"}

{{ product_title }} requires the use of a FIPS-capable installation binary to install a cluster in FIPS mode. You can obtain this binary by downloading it from the public OpenShift mirror. After you have obtained the binary, proceed with the cluster installation, replacing all instances of the `openshift-install` binary with `openshift-install-fips`. {._abstract}

**Prerequisites**

*   You have access to the internet.

**Procedure**

1.  Download the installation program from https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest-4.18/openshift-install-rhel9-amd64.tar.gz.
1.  Extract the installation program. For example, on a computer that uses a Linux operating system, run the following command:
    ```terminal
    $ tar -xvf openshift-install-rhel9-amd64.tar.gz
    ```
1.  Proceed with cluster installation, replacing all instances of the `openshift-install` command with `openshift-install-fips`.