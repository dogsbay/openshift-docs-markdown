{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing {{ odo_title }} on macOS {id="installing-odo-on-macos_{{ context }}"}

The `{{ odo_title }}` CLI for macOS is available to download as a binary and as a tarball.

| Operating System | Binary | Tarball |
| --- | --- | --- |
| macOS | [odo-darwin-amd64](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-darwin-amd64) | [odo-darwin-amd64.tar.gz](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-darwin-amd64.tar.gz) |

**Procedure**

1.  Navigate to the [content gateway](https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/) and download the appropriate file:
    *   If you download the binary, rename it to `odo`:
        ```terminal
        $ curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-darwin-amd64 -o odo
        ```
    *   If you download the tarball, extract the binary:
        ```terminal
        $ curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/latest/odo-darwin-amd64.tar.gz -o odo.tar.gz
        ```
        ```terminal
        $ tar xvzf odo.tar.gz
        ```
1.  Change the permissions on the binary:
    ```terminal
    # chmod +x odo
    ```
1.  Place the `{{ odo_title }}` binary in a directory that is on your `PATH`.

    To check your `PATH`, execute the following command:
    ```terminal
    $ echo $PATH
    ```
1.  Verify that `{{ odo_title }}` is now available on your system:
    ```terminal
    $ odo version
    ```