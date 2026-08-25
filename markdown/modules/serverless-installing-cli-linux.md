{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Knative CLI for Linux {id="installing-cli-linux_{{ context }}"}

If you are using a Linux distribution that does not have RPM or another package manager installed, you can install the Knative (`kn`) CLI as a binary file. To do this, you must download and unpack a `tar.gz` archive and add the binary to a directory on your `PATH`.

**Prerequisites**

*   If you are not using RHEL or Fedora, ensure that **libc** is installed in a directory on your library path.

    :::important

    If **libc** is not available, you might see the following error when you run CLI commands:

    ```terminal
    $ kn: No such file or directory
    ```
    
    :::


**Procedure**

1.  Download the relevant Knative (`kn`) CLI `tar.gz` archive:
    *   [Linux (x86_64, amd64)](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/latest/kn-linux-amd64.tar.gz)
        {%- if not openshift_rosa %}
    *   [Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x)](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/latest/kn-linux-s390x.tar.gz)
    *   [Linux on {{ ibm_power_name }} (ppc64le)](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/latest/kn-linux-ppc64le.tar.gz)
{%- endif %}

    You can also download any version of `kn` by navigating to that version’s corresponding directory in the [Serverless client download mirror](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/).
1.  Unpack the archive:
    ```terminal
    $ tar -xf <filename>
    ```
1.  Move the `kn` binary to a directory on your `PATH`.
1.  To check your `PATH`, run:
    ```terminal
    $ echo $PATH
    ```