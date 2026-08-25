{%- set _mod_docs_content_type = "CONCEPT" %}
# About ServiceMeshControlPlane {id="ossm-about-smcp_{{ context }}"}

The control plane includes Istiod, Ingress and Egress Gateways, and other components, such as Kiali and Jaeger. The control plane must be deployed in a separate namespace than the {{ SMProductShortName }} Operators and the data plane applications and services. You can deploy a basic installation of the `ServiceMeshControlPlane`(SMCP) from the {{ product_title }} web console or the command line using the `oc` client tool.


:::note

This basic installation is configured based on the default {{ product_title }} settings and is not designed for production use. Use this default installation to verify your installation, and then configure your `ServiceMeshControlPlane` settings for your environment.

:::


{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

:::note

The {{ SMProductShortName }} documentation uses `istio-system` as the example project, but you can deploy the service mesh to any project.

:::

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
If you are deploying the control plane for use on {{ product_rosa }}, see the Red Hat Knowledgebase article [OpenShift service mesh operator Istio basic not starting due to authentication errors](https://access.redhat.com/solutions/6529231), which discusses adding a new project and starting pods.
{% endif %}
{% if openshift_dedicated %}
If you are deploying the control plane for use on {{ product_dedicated }}, see the Red Hat Knowledgebase article [OpenShift service mesh operator Istio basic not starting due to authentication errors](https://access.redhat.com/solutions/6529231), which discusses adding a new project and starting pods.
{% endif %}