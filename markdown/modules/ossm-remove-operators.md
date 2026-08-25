{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing the installed Operators {id="ossm-operatorhub-remove-operators_{{ context }}"}

You must remove the Operators to successfully remove {{ SMProductName }}. After you remove the {{ SMProductName }} Operator, you must remove the Kiali Operator, the {{ JaegerName }} Operator, and the OpenShift Elasticsearch Operator.

## Removing the Operators {id="ossm-remove-operator-servicemesh_{{ context }}"}

Follow this procedure to remove the Operators that make up {{ SMProductName }}. Repeat the steps for each of the following Operators.

*   {{ SMProductName }}
*   Kiali
*   {{ JaegerName }}
*   OpenShift Elasticsearch

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  From the **Ecosystem** → **Installed Operators** page, scroll or type a keyword into the **Filter by name** to find each Operator. Then, click the Operator name.
1.  On the **Operator Details** page, select **Uninstall Operator** from the **Actions** menu. Follow the prompts to uninstall each Operator.