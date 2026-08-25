{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Removing {{ ServerlessProductName }} overview {id="removing-openshift-serverless"}
{%- set context = "removing-openshift-serverless" %}

If you need to remove {{ ServerlessProductName }} from your cluster, you can do so by manually removing the {{ ServerlessOperatorName }} and other {{ ServerlessProductName }} components. Before you can remove the {{ ServerlessOperatorName }}, you must remove Knative Serving and Knative Eventing.

After uninstalling the {{ ServerlessProductName }}, you can remove the Operator and API custom resource definitions (CRDs) that remain on the cluster.

The steps for fully removing {{ ServerlessProductName }} are detailed in the following procedures:

*   [Uninstalling Knative Eventing](/serverless/removing/uninstalling-knative-eventing#uninstalling-knative-eventing).
*   [Uninstalling Knative Serving](/serverless/removing/uninstalling-knative-serving#uninstalling-knative-serving).
*   [Removing the {{ ServerlessOperatorName }}](/serverless/removing/removing-serverless-operator#removing-serverless-operator).
*   [Deleting {{ ServerlessProductName }} custom resource definitions](/serverless/removing/deleting-serverless-crds#deleting-serverless-crds).