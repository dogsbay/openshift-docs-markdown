{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Install and configure the DPF Operator {id="dpf-operator-installation"}
{%- set context = "dpf-operator-installation" -%}
{%- set dpf_version = "26.4.1" %}

After setting up the environment, install the NVIDIA DPF Operator and create the required DPF resources and DPU services. {._abstract}


:::important

You must install the DPF Operator before the DPF HCP Provisioner Operator because that Operator requires DPF CRDs such as `DPUCluster`, `DPUFlavor`, `DPUDeployment`, and `DPFOperatorConfig`.

:::


{% leveloffset +1 %}{% include "./modules/nw-dpf-environment-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-dpf-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpfoperatorconfig.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-sriov-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-bf3-nvconfig-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpuflavor.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-bfb.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpudeployment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-ovnk-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dts-service.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-ovnk-credentials.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-service-interfaces.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-service-nads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-service-ipam.md" %}{% endleveloffset %}