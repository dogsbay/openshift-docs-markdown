{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an LVMS configuration file {id="microshift-lvmd-yaml-creating_{{ context }}"}

To customize storage settings, create an LVMS configuration file named lvmd.yaml. You must place this file in the `/etc/microshift/` directory to ensure {{ microshift_short }} detects and applies your configuration at startup. {._abstract}

**Procedure**

*   To create the `lvmd.yaml` configuration file, run the following command:
    ```terminal
    $ sudo cp /etc/microshift/lvmd.yaml.default /etc/microshift/lvmd.yaml
    ```