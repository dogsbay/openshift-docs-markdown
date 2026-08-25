{%- set _mod_docs_content_type = "CONCEPT" %}
# Required firewall settings {id="microshift-firewall-req-settings_{{ context }}"}

An IP address range for the node network must be enabled during firewall configuration. You can use the default values or customize the IP address range. If you choose to customize the node network IP address range from the default `10.42.0.0/16` setting, you must also use the same custom range in the firewall configuration. {._abstract}

**Firewall IP address settings**

| IP Range | Firewall rule required | Description |
| --- | --- | --- |
| 10.42.0.0/16 | No | Host network pod access to other pods |
| 169.254.169.1 | Yes | Host network pod access to {{ product_title }} API server |

## Example commands {id="microshift-firewall-req-settings-example-commands_{{ context }}"}

The following are examples of commands for settings that are mandatory for firewall configuration:

*   Configure host network pod access to other pods:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16
    ```
*   Configure host network pod access to services backed by Host endpoints, such as the {{ product_title }} API:
    ```terminal
    $ sudo firewall-cmd --permanent --zone=trusted --add-source=169.254.169.1
    ```