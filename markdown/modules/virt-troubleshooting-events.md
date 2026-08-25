{%- set _mod_docs_content_type = "PROCEDURE" %}
# Events {id="virt-troubleshooting-events_{{ context }}"}

To monitor and troubleshoot virtual machine (VM), namespace, and resource issues, you can review {{ product_title }} events. Tracking this life-cycle information helps ensure you maintain a healthy cluster environment. {._abstract}

**Procedure**

*   To view VM events, go to **VirtualMachine details** → **Events** in the web console.
*   To view namespace events, run the following command:
    ```terminal
    $ oc get events -n <namespace>
    ```
*   To view resource events, run the following command:
    ```terminal
    $ oc describe <resource> <resource_name>
    ```