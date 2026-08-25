{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting mirror registry for Red Hat OpenShift {id="mirror-registry-troubleshooting_{{ context }}"}

To assist in troubleshooting _mirror registry for Red&#160;Hat OpenShift_, you can gather logs of systemd services installed by the mirror registry. {._abstract}

The following services are installed:

*   quay-app.service
*   quay-redis.service
*   quay-pod.service

**Prerequisites**

*   You have installed _mirror registry for Red&#160;Hat OpenShift_.

**Procedure**

*   If you installed _mirror registry for Red&#160;Hat OpenShift_ with root privileges, you can get the status information of its systemd services by entering the following command:
    ```terminal
    $ sudo systemctl status <service>
    ```
*   If you installed _mirror registry for Red&#160;Hat OpenShift_ as a standard user, you can get the status information of its systemd services by entering the following command:
    ```terminal
    $ systemctl --user status <service>
    ```