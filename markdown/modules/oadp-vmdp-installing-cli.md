{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ oadp_short }} virtual machine data protection CLI {id="oadp-vmdp-installing-cli_{{ context }}"}

Install the {{ oadp_full }} virtual machine data protection (VMDP) command-line interface (CLI) inside your VM to back up and restore data. This helps you to download the correct binary for your VM guest operating system. {._abstract}

The {{ oadp_short }} Operator deploys a download server in the cluster as the `openshift-adp-vmdp-server` service in the `openshift-adp` namespace. A `ConsoleCLIDownload` resource links to the download server routes, and users can access the download links from the {{ product_title }} web console or by using HTTP directly.

**Prerequisites**

*   You have installed the {{ oadp_short }} Operator.
*   You have a running VM on {{ VirtProductName }} with a supported guest operating system.
*   You have installed the `virtctl` CLI tool.

**Procedure**

1.  Get the cluster IP of the VMDP download server by running the following command:
    ```terminal
    $ oc get svc -n openshift-adp openshift-adp-vmdp-server
    ```

    Make a note of the `CLUSTER-IP` value from the output.
1.  Install the VMDP CLI:
    *   For Linux VMs, download the VMDP binary and make it executable inside the VM by running the following command:
        ```terminal
        $ virtctl ssh <vm_user>@<vm_name> -n <vm_namespace> \
          --command "curl -kLf 'http://<cluster_ip>:80/download/oadp-vmdp_linux_amd64' \
          -o oadp-vmdp_linux_amd64 && chmod +x oadp-vmdp_linux_amd64"
        ```

        where:

        `<vm_user>`
        :   Specifies the username for the VM. For example, `fedora`.

        `<vm_name>`
        :   Specifies the name of the VM.

        `<vm_namespace>`
        :   Specifies the namespace of the VM.

        `<cluster_ip>`
        :   Specifies the `CLUSTER-IP` value of the `openshift-adp-vmdp-server` service.

    *   For Microsoft Windows VMs, access the VM by using Remote Desktop Protocol (RDP) or the VNC console, open PowerShell, and download the VMDP binary by running the following command:
        ```powershell
        PS> curl.exe -L -o oadp-vmdp.exe "http://<cluster_ip>:80/download/oadp-vmdp_windows_amd64.exe"
        ```

        Replace `<cluster_ip>` with the `CLUSTER-IP` value of the `openshift-adp-vmdp-server` service.

**Verification**

*   Depending on your operating system, use one of the following steps to verify the installation:
    *   For Linux VMs, verify that the binary is installed and working by running the following command:
        ```terminal
        $ virtctl ssh <vm_user>@<vm_name> -n <vm_namespace> \
          --command "./oadp-vmdp_linux_amd64 --help"
        ```
        ```terminal
        usage: oadp-vmdp [<flags>] <command> [<args> ...]
        OADP VM Data Protection - Virtual Machine Data Protection for OpenShift
            Virtualization

        Flags:
          --[no-]help                Show context-sensitive help (also try --help-long
                                     and --help-man).
          --[no-]version             Show application version.
          --log-file=LOG-FILE        Override log file.
          --[no-]disable-file-logging
                                     Disable file-based logging.
          ....
        ```
    *   For Microsoft Windows VMs, open PowerShell and verify the binary by running the following command:
        ```powershell
        PS> .\oadp-vmdp.exe --help
        ```