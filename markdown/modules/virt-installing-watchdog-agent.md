{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the watchdog agent on the guest {id="virt-installing-watchdog-agent_{{ context }}"}

You can install the watchdog agent on the guest and start the `watchdog` service. {._abstract}

**Procedure**

1.  Log in to the virtual machine as root user.
{%- if not openshift_dedicated %}
1.  This step is only required when installing on {{ ibm_z_name }} (`s390x`). Enable `watchdog` by running the following command:
    ```terminal
    # modprobe diag288_wdt
    ```
{%- endif %}
1.  Verify that the `/dev/watchdog` file path is present in the VM by running the following command:
    ```terminal
    # ls /dev/watchdog
    ```
1.  Install the `watchdog` package and its dependencies:
    ```terminal
    # yum install watchdog
    ```
1.  Uncomment the following line in the `/etc/watchdog.conf` file and save the changes:
    ```terminal
    #watchdog-device = /dev/watchdog
    ```
1.  Enable the `watchdog` service to start on boot:

    ```terminal
    # systemctl enable --now watchdog.service
    ```