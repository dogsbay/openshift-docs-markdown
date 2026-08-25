{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connect to the VNC console by using virtctl {id="virt-connecting-vnc-console-virtctl_{{ context }}"}

You can use the `virtctl` command-line tool to connect to the VNC console of a running virtual machine. {._abstract}


:::note

If you run the `virtctl vnc` command on a remote machine over an SSH connection, you must forward the X session to your local machine by running the `ssh` command with the `-X` or `-Y` flags.

:::


**Prerequisites**

*   You installed the `virt-viewer` package.

**Procedure**

1.  Run the following command to start the console session:
    ```terminal
    $ virtctl vnc <vm_name> -n <namespace> --preserve-session
    ```

    where:

    &lt;vm_name>
    :   The name of the VM.

    &lt;namespace>
    :   The namespace that contains the VM.

    --preserve-session
    :   Prevents an existing VNC console connection from being disconnected if you try to start a new session.

    :::important

    Only one connection to the VNC console is possible at a time. If you try to create a second connection to the same VNC console, an error is displayed and the connection fails. If you try to create a second connection to the same VNC console without using the `--preserve-session` flag, this forces the existing connection to disconnect to allow the new connection.
    
    :::


1.  If the connection fails, run the following command to collect troubleshooting information:
    ```terminal
    $ virtctl vnc <vm_name> -v 4
    ```