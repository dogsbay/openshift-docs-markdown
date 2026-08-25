{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Knative CLI for macOS {id="serverless-installing-cli-macos_{{ context }}"}

If you are using macOS, you can install the Knative (`kn`) CLI as a binary file. To do this, you must download and unpack a `tar.gz` archive and add the binary to a directory on your `PATH`.

**Procedure**

1.  Download the [Knative (`kn`) CLI `tar.gz` archive](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/latest/kn-macos-amd64.tar.gz).

    You can also download any version of `kn` by navigating to that version’s corresponding directory in the [Serverless client download mirror](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/).
1.  Unpack and extract the archive.
1.  Move the `kn` binary to a directory on your `PATH`.
1.  To check your `PATH`, open a terminal window and run:
    ```terminal
    $ echo $PATH
    ```