{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify firewall settings {id="microshift-firewall-verifying-settings_{{ context }}"}

After you have restarted the firewall, you can verify your settings by listing them with the `firewall-cmd` command. {._abstract}

**Procedure**

*   To verify rules added in the default public zone, such as ports-related rules, run the following command:  
    ```terminal
    $ sudo firewall-cmd --list-all
    ```
*   To verify rules added in the trusted zone, such as IP-range related rules, run the following command:
    ```terminal
    $ sudo firewall-cmd --zone=trusted --list-all
    ```