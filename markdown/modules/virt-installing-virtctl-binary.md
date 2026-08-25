{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the virtctl binary on {{ op_system_base }} 9 or later, Linux, Windows, or macOS {id="virt-installing-virtctl-binary_{{ context }}"}

You can download the `virtctl` binary by using the {{ product_title }} web console and then install it on {{ op_system_base_full }} 9 or later, Linux, Windows, or macOS. {._abstract}

**Procedure**

1.  Navigate to the **Virtualization** page in the web console.
1.  Click the **Question Mark (?)** icon in the top right corner of screen.
1.  Select **Command Line Tools** from the menu.
1.  Locate the **virtctl - KubeVirt command line interface** section of the page.
1.  Click the **Download virtctl** link to download the `virtctl` binary for your operating system.
1.  Install `virtctl`:
    *   For {{ op_system_base }} and other Linux operating systems:
        1.  Decompress the archive file:
            ```terminal
            $ tar -xvf <virtctl-version-distribution.arch>.tar.gz
            ```
        1.  Run the following command to make the `virtctl` binary executable:
            ```terminal
            $ chmod +x <path/virtctl-file-name>
            ```
        1.  Move the `virtctl` binary to a directory in your `PATH` environment variable.

            You can check your path by running the following command:
            ```terminal
            $ echo $PATH
            ```
        1.  Set the `KUBECONFIG` environment variable:
            ```terminal
            $ export KUBECONFIG=/home/<user>/clusters/current/auth/kubeconfig
            ```
    *   For Windows:
        1.  Decompress the archive file.
        1.  Navigate the extracted folder hierarchy and double-click the `virtctl` executable file to install the client.
        1.  Move the `virtctl` binary to a directory in your `PATH` environment variable.

            You can check your path by running the following command:
            ```terminal
            C:\> path
            ```
    *   For macOS:
        1.  Decompress the archive file.
        1.  Move the `virtctl` binary to a directory in your `PATH` environment variable.

            You can check your path by running the following command:
            ```terminal
            echo $PATH
            ```