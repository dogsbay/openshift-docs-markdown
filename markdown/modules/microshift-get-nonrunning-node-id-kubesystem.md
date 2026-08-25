{%- set _mod_docs_content_type = "PROCEDURE" %}
# Get the node ID of a stopped node {id="microshift-get-nonrunning-node-id-kubesystem_{{ context }}"}

When the MicroShift service is inactive, you can prevent the use of standard API commands by retrieving the node ID from the file system. You can use this ID to identify offline nodes for disaster recovery, verify backup compatibility, and troubleshoot issues.

**Procedure**

*   Get the ID of a stopped node by retrieving it from the `cluster-id` file by entering the following command:
    ```terminal
    $ sudo cat /var/lib/microshift/cluster-id
    ```
    ```terminal title="Example output"
    7cf13853-68f4-454e-8f5c-1af748cbfb1a
    ```