{%- set _mod_docs_content_type = "PROCEDURE" %}

# Converting DPA to the new version for {{ oadp_short }} 1.6.0 {id="converting-dpa-to-the-new-version-for-oadp-1-6-0_{{ context }}"}

{{ oadp_first }} 1.5 is not supported on {{ OCP_short }} 4.22. You can convert {{ oadp_short }} to the new 1.6 version by using the new `spec.configuration.nodeAgent` field and its sub-fields. {._abstract}

**Procedure**

1.  To configure `nodeAgent` daemon set, use the `spec.configuration.nodeAgent` parameter in DPA. See the following example:
    ```yaml title="Example DataProtectionApplication configuration"
    ...
     spec:
       configuration:
         nodeAgent:
           enable: true
           uploaderType: kopia
    ...
    ```
1.  To configure `nodeAgent` daemon set by using the `ConfigMap` resource named `node-agent-config`, see the following example configuration:
    ```yaml title="Example config map"
    ...
     spec:
       configuration:
         nodeAgent:
           backupPVC:
             ...
           loadConcurrency:
             ...
           podResources:
             ...
           restorePVC:
            ...
    ...
    ```