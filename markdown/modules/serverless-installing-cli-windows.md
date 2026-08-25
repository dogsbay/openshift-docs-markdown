{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Knative CLI for Windows {id="installing-cli-windows_{{ context }}"}

If you are using Windows, you can install the Knative (`kn`) CLI as a binary file. To do this, you must download and unpack a ZIP archive and add the binary to a directory on your `PATH`.

**Procedure**

1.  Download the [Knative (`kn`) CLI ZIP archive](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/latest/kn-windows-amd64.zip).

    You can also download any version of `kn` by navigating to that version’s corresponding directory in the [Serverless client download mirror](https://mirror.openshift.com/pub/openshift-v4/clients/serverless/).
1.  Extract the archive with a ZIP program.
1.  Move the `kn` binary to a directory on your `PATH`.
1.  To check your `PATH`, open the command prompt and run the command:
    ```terminal
    C:\> path
    ```