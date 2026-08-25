{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling OpenShift Service Mesh Console plugin using the {{ product_title }} web console {id="ossm-kiali-ossmc-plugin-uninstall-web-console_{{ context }}"}

You can uninstall the {{ SMPlugin }} by using the {{ product_title }} web console.

**Procedure**

1.  Navigate to **Installed Operators** → **Operator details**.
1.  Select the **OpenShift Service Mesh Console** tab.
1.  Click **Delete OSSMConsole** from the options menu.


:::note

If you intend to also uninstall the Kiali Operator provided by Red Hat, you must first uninstall the OSSMC plugin and then uninstall the Operator. If you uninstall the Operator before ensuring the `OSSMConsole` CR is deleted then you may have difficulty removing that CR and its namespace. If this occurs then you must manually remove the finalizer on the CR in order to delete it and its namespace. You can do this using: `$ oc patch ossmconsoles <CR name> -n <CR namespace> -p '{"metadata":{"finalizers": []}}' --type=merge`.

:::