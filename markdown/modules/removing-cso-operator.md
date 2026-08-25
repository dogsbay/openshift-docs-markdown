{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the {{ rhq_cso }} {id="uninstalling-container-security-operator_{{ context }}"}

To uninstall the Container Security Operator, you must uninstall the Operator and delete the `imagemanifestvulns.secscan.quay.redhat.com` custom resource definition (CRD). {._abstract}

**Procedure**

1.  On the {{ product_title }} web console, click **Ecosystem** → **Installed Operators**.
1.  Click the Options menu {{ kebab }} of the Container Security Operator.
1.  Click **Uninstall Operator**. 
1.  Confirm your decision by clicking **Uninstall** in the popup window.
1.  Use the CLI to delete the `imagemanifestvulns.secscan.quay.redhat.com` CRD.
    1.  Remove the `imagemanifestvulns.secscan.quay.redhat.com` custom resource definition by entering the following command:
        ```terminal
        $ oc delete customresourcedefinition imagemanifestvulns.secscan.quay.redhat.com
        ```
        ```terminal title="Example output"
        customresourcedefinition.apiextensions.k8s.io "imagemanifestvulns.secscan.quay.redhat.com" deleted
        ```