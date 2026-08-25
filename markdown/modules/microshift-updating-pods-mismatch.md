{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the pods which have mismatch {id="microshift-updating-pods-mismatch_{{ context }}"}

To resolve configuration discrepancies, update the SELinux context of the pods that display a mismatch status. This process ensures that your running workloads align with the expected configuration, maintaining consistency across your cluster. {._abstract}

**Procedure**

1.  When there is a mismatch of the SELinux content, create a new security context constraint (SCC) and assign it to both pods. To create a SCC, see "Creating security context constraints".
1.  Update the SELinux context as shown in the following example:
    ```terminal title="Example output"
     [...]
     securityContext:privileged
          seLinuxOptions:MustRunAs
            level: "s0:cXX,cYY"
      [...]
    ```