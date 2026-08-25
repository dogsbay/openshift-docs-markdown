{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an OVN-Kubernetes configuration file {id="microshift-config-OVN-K_{{ context }}"}

{{ microshift_short }} uses built-in default OVN-Kubernetes values if an OVN-Kubernetes configuration file is not created. To apply custom OVN-Kubernetes values such as pod `mtu` instead of using built-in defaults, you can copy `ovn.yaml.default` to `/etc/microshift/ovn.yaml` and edit the file. {._abstract}

**Procedure**

1.  To create your `ovn.yaml` file, run the following command:
    ```yaml
    $ sudo cp /etc/microshift/ovn.yaml.default /etc/microshift/ovn.yaml
    ```
1.  To list the contents of the configuration file you created, run the following command:
    ```yaml
    $ cat /etc/microshift/ovn.yaml
    ```
    ```yaml title="Example YAML file with default maximum transmission unit (MTU) value"
    mtu: 1400
    ```
1.  To customize your configuration, you can change the MTU value. The table that follows provides details:
    **Supported optional OVN-Kubernetes configurations for {{ microshift_short }}**

    | Field | Type | Default | Description | Example |
    | --- | --- | --- | --- | --- |
    | mtu | uint32 | auto | MTU value used for the pods | 1300 |

    :::important

    If you change the `mtu` configuration value in the `ovn.yaml` file, you must restart the host that {{ product_title }} is running on to apply the updated setting.
    
    :::

    ```yaml title="Example custom ovn.yaml configuration file"
    mtu: 1300
    ```