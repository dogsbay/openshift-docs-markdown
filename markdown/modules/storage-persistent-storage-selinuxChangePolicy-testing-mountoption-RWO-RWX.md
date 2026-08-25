{%- set _mod_docs_content_type = "PROCEDURE" %}
# Testing the RWO and RWX and SELinux mount option feature {id="using_selinuxChangePolicy_testing-mountoption-rwo-rwx_{{ context }}"}

The SELinux mount option applies the correct security context during mount without recursive relabeling, reducing pod startup times on volumes with many files. In {{ product_title }} 4.21, you can evaluate the mount option feature for RWO and RWX volumes as a Technology Preview feature. {._abstract}

{%- set FeatureName = "RWO/RWX SELinux mount" %}
{% include "./snippets/technology-preview.md" %}

**Procedure**

*   Enable Feature Gates. For information about enabling Feature Gates, see "Enabling features using feature gates".

    RWO and RWX volumes now have mount option as the default behavior.

**Next step**

Carefully test your applications and observe how they are using storage. For more information, see the Red&#160;Hat Knowledgebase article "OpenShift reports SELinux-related conflicts when creating Pods", and consider opting out from using mount option if you are experiencing issues. For more information, see "Opting out of the SELinux mount option default".