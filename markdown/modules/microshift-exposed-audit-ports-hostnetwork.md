{%- set _mod_docs_content_type = "PROCEDURE" %}
# hostNetwork {id="microshift-exposed-audit-ports-hostnetwork_{{ context }}"}

When a pod is configured with the `hostNetwork:true` setting, the pod is running in the host network namespace. This configuration can independently open host ports. {{ microshift_short }} component logs cannot be used to track this case, the ports are subject to firewalld rules. If the port opens in firewalld, you can view the port opening in the firewalld debug log. {._abstract}

**Prerequisites**

*   You have root user access to your build host.

**Procedure**

1.  Optional: You can check that the `hostNetwork:true` parameter is set in your ovnkube-node pod by using the following example command:
    ```terminal
    $ sudo oc get pod -n openshift-ovn-kubernetes <ovnkube-node-pod-name> -o json | jq -r '.spec.hostNetwork' true
    ```
1.  Enable debug in the firewalld log by running the following command:
    ```terminal
    $ sudo vi /etc/sysconfig/firewalld
    FIREWALLD_ARGS=--debug=10
    ```
1.  Restart the firewalld service:
    ```terminal
    $ sudo systemctl restart firewalld.service
    ```
1.  To verify that the debug option was added properly, run the following command:
    ```terminal
    $ sudo systemd-cgls -u firewalld.service
    ```

    The firewalld debug log is stored in the `/var/log/firewalld` path.
    ```terminal title="Example logs for when the port open rule is added"
    2023-06-28 10:46:37 DEBUG1: config.getZoneByName('public')
    2023-06-28 10:46:37 DEBUG1: config.zone.7.addPort('8080', 'tcp')
    2023-06-28 10:46:37 DEBUG1: config.zone.7.getSettings()
    2023-06-28 10:46:37 DEBUG1: config.zone.7.update('...')
    2023-06-28 10:46:37 DEBUG1: config.zone.7.Updated('public')
    ```
    ```terminal title="Example logs for when the port open rule is removed"
    2023-06-28 10:47:57 DEBUG1: config.getZoneByName('public')
    2023-06-28 10:47:57 DEBUG2: config.zone.7.Introspect()
    2023-06-28 10:47:57 DEBUG1: config.zone.7.removePort('8080', 'tcp')
    2023-06-28 10:47:57 DEBUG1: config.zone.7.getSettings()
    2023-06-28 10:47:57 DEBUG1: config.zone.7.update('...')
    2023-06-28 10:47:57 DEBUG1: config.zone.7.Updated('public')
    ```