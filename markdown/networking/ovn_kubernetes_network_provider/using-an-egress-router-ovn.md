---
title: Considerations for the use of an egress router pod
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Considerations for the use of an egress router pod {id="using-an-egress-router-ovn"}
{%- set context = "using-an-egress-router-ovn" %}

Before you use the egress router pod, you must understand how the pod works. Doing so can prevent situations such as creating large numbers of egress router pods that exceed the limits of your network hardware. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-egress-router-about.md" %}{% endleveloffset %}

## Additional resources {id="using-an-egress-router-ovn-additional-resources" ._additional-resources}

*   [Deploying an egress router in redirection mode](/networking/ovn_kubernetes_network_provider/deploying-egress-router-ovn-redirection#deploying-egress-router-ovn-redirection)
*   [OpenShift on OpenStack: Egress router not working](https://access.redhat.com/solutions/2803331)
*   [MAC Address Changes](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.security.doc/GUID-942BD3AA-731B-4A05-8196-66F2B4BF1ACB.html)
*   [Forged Transits](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.security.doc/GUID-7DC6486F-5400-44DF-8A62-6273798A2F80.html)
*   [Promiscuous Mode Operation](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.security.doc/GUID-92F3AB1F-B4C5-4F25-A010-8820D7250350.html)
*   [VMware documentation for securing vSphere standard switches](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.security.doc/GUID-3507432E-AFEA-4B6B-B404-17A020575358.html)