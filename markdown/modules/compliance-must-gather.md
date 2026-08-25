{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the must-gather tool for the Compliance Operator {id="compliance-must-gather_{{ context }}"}

You can collect detailed Compliance Operator configuration and logs by using the must-gather tool to aid in troubleshooting issues and support case resolution. {._abstract}

Starting in Compliance Operator v1.6.0, you can collect data about the Compliance Operator resources by running the `must-gather` command with the Compliance Operator image.


:::note

Consider using the `must-gather` tool when opening support cases or filing bug reports, as it provides additional details about the Operator configuration and logs.

:::


**Procedure**

*   Run the following command to collect data about the Compliance Operator:
    ```terminal
    $ oc adm must-gather --image=$(oc get csv compliance-operator.v1.6.0 -o=jsonpath='{.spec.relatedImages[?(@.name=="must-gather")].image}')
    ```