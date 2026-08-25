{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing {{ odo_title }} on Linux {id="installing-odo-on-linux_{{ context }}"}

The `{{ odo_title }}`{minja} CLI is available to download as a binary and as a tarball for multiple operating systems and architectures including:

| Operating System | Binary | Tarball |
| --- | --- | --- |
| Linux | [odo-linux-amd64](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64) | [odo-linux-amd64.tar.gz](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64.tar.gz) |
| Linux on {{ ibm_power_name }} | [odo-linux-ppc64le](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-ppc64le) | [odo-linux-ppc64le.tar.gz](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-ppc64le.tar.gz) |
| Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} | [odo-linux-s390x](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-s390x) | [odo-linux-s390x.tar.gz](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-s390x.tar.gz) |

**Procedure**

1.  Navigate to the [content gateway](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/) and download the appropriate file for your operating system and architecture.
    *   If you download the binary, rename it to `odo`:
        ```terminal
        $ curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64 -o odo
        ```
    *   If you download the tarball, extract the binary:
        ```terminal
        $ curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-linux-amd64.tar.gz -o odo.tar.gz
        ```
        ```terminal
        $ tar xvzf odo.tar.gz
        ```
1.  Change the permissions on the binary:
    ```terminal
    $ chmod +x <filename>
    ```
1.  Place the `{{ odo_title }}`{minja} binary in a directory that is on your `PATH`.

    To check your `PATH`, execute the following command:
    ```terminal
    $ echo $PATH
    ```
1.  Verify that `{{ odo_title }}`{minja} is now available on your system:
    ```terminal
    $ odo version
    ```