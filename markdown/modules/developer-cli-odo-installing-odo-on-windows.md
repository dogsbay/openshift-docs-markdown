{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing {{ odo_title }} on Windows {id="installing-odo-on-windows_{{ context }}"}

The `{{ odo_title }}` CLI for Windows is available to download as a binary and as an archive.

| Operating System | Binary | Tarball |
| --- | --- | --- |
| Windows | [odo-windows-amd64.exe](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-windows-amd64.exe) | [odo-windows-amd64.exe.zip](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-windows-amd64.exe.zip) |

**Procedure**

1.  Navigate to the [content gateway](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/) and download the appropriate file:
    *   If you download the binary, rename it to `odo.exe`.
    *   If you download the archive, unzip the binary with a ZIP program and then rename it to `odo.exe`.
1.  Move the `odo.exe` binary to a directory that is on your `PATH`.

    To check your `PATH`, open the command prompt and execute the following command:
    ```terminal
    C:\> path
    ```
1.  Verify that `{{ odo_title }}` is now available on your system:
    ```terminal
    C:\> odo version
    ```