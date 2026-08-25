{%- set _mod_docs_content_type = "PROCEDURE" %}
# Applying firewall settings {id="microshift-firewall-applying-settings_{{ context }}"}

To apply firewall settings after you have finished configuring network access through the firewall, you can reload the firewall service. {._abstract}

**Procedure**

*   Restart the firewall and apply the settings by running the following command:
    ```terminal
    $ sudo firewall-cmd --reload
    ```