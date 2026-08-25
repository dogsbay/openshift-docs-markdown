{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling a Red Hat catalog installation {id="kmm-uninstalling-kmmo-red-hat-catalog_{{ context }}"}

To uninstall a Kernel Module Management (KMM) Operator installation from the Red&#160;Hat catalog on {{ product_title }}, you can remove the Operator from **Installed Operators** in the web console. {._abstract}

**Procedure**

*   Use the OpenShift console under **Operators** --> **Installed Operators** to locate and uninstall the Operator.

    :::note

    Alternatively, you can delete the `Subscription` resource in the KMM namespace.
    
    :::