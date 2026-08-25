{%- set _mod_docs_content_type = "PROCEDURE" %}
# Debugging Ignition failures {id="debugging-ignition_{{ context }}"}

If a machine cannot be provisioned, Ignition fails and {{ op_system }} will boot into the emergency shell. Use the following procedure to get debugging information. {._abstract}

**Procedure**

1.  Run the following command to show which service units failed:
    ```terminal
    $ systemctl --failed
    ```
1.  Optional: Run the following command on an individual service unit to find out more information:
    ```terminal
    $ journalctl -u <unit>.service
    ```