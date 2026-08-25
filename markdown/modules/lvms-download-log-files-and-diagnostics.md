{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading log files and diagnostic information using must-gather {id="lvms-dowloading-log-files-and-diagnostics_{{ context }}"}

Use the must-gather tool to collect log files and diagnostic information when {{ lvms }} cannot automatically resolve a problem. You or Red Hat Support can then review the collected data to troubleshoot the issue. {._abstract}

**Procedure**

*   Run the `must-gather` command from the client connected to the {{ lvms }} cluster:
    ```terminal
    $ oc adm must-gather --image=registry.redhat.io/lvms4/lvms-must-gather-rhel9:v{{ product_version }} --dest-dir=<directory_name>
    ```