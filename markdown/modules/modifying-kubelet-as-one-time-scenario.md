{%- set _mod_docs_content_type = "PROCEDURE" %}
# Modifying the kubelet as a one-time scenario {id="modifying-kubelet-one-time_{{ context }}"}

To modify the kubelet in a one-time scenario without rebooting the node due to the change of `machine-config(spec":{"paused":false}})`, allowing you to modify the kubelet without affecting the service, follow this procedure.

**Procedure**

1.  Connect to the node in debug mode:
    ```terminal
    $ oc debug node/<node>
    ```
    ```terminal
    $ chroot /host
    ```

    Alternatively, it is possible to SSH to the node and become root.
1.  After access is established, check the default log level:
    ```terminal
    $ systemctl cat kubelet
    ```
    ```terminal title="Example output"
    # /etc/systemd/system/kubelet.service.d/20-logging.conf
    [Service]
    Environment="KUBELET_LOG_LEVEL=2"
    ```
1.  Define the new verbosity required in a new `/etc/systemd/system/kubelet.service.d/30-logging.conf` file, which overrides `/etc/systemd/system/kubelet.service.d/20-logging.conf`. In this example, the verbosity is changed from `2` to `8`:
    ```terminal
    $ echo -e "[Service]\nEnvironment=\"KUBELET_LOG_LEVEL=8\"" > /etc/systemd/system/kubelet.service.d/30-logging.conf
    ```
1.  Reload systemd and restart the service:
    ```terminal
    $ systemctl daemon-reload
    ```
    ```terminal
    $ systemctl restart kubelet
    ```
1.  Gather the logs, and then revert the log level increase:
    ```terminal
    $ rm -f /etc/systemd/system/kubelet.service.d/30-logging.conf
    ```
    ```terminal
    $ systemctl daemon-reload
    ```
    ```terminal
    $ systemctl restart kubelet
    ```