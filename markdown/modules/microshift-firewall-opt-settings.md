{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using optional port settings {id="microshift-firewall-optional-settings_{{ context }}"}

To allow external access to services and APIs in {{ microshift_short }}, you can add custom ports to your firewall configuration. Use the listed ports and protocols as a guide for HTTP, HTTPS, NodePort, mDNS, and API access. {._abstract}

For a complete list of ports and protocols, see "Optional ports".

The following examples show commands to open firewall access for services running on {{ microshift_short }}.

**Procedure**

*   To add customized ports to your firewall configuration, use the following command syntax:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=public --add-port=<port number>/<port protocol>
    ```

    For example, to configure a port for the {{ microshift_short }} API server, enter the following command:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=public --add-port=6443/tcp
    ```

    To close unnecessary ports in your {{ microshift_short }} instance, follow the procedure in "Closing unused or unnecessary ports to enhance network security".