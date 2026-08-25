{%- set _mod_docs_content_type = "CONCEPT" %}
# Relationship between {{ hcp }}, {{ mce_short }}, and {{ rh_rhacm }} {id="hcp-mce-acm-relationship-intro_{{ context }}"}

You can configure {{ hcp }} by using the {{ mce }}. The {{ mce_short }} cluster lifecycle defines the process of creating, importing, managing, and destroying Kubernetes clusters across various infrastructure cloud providers, private clouds, and on-premise data centers. {._abstract}


:::note

The {{ mce_short }} is an integral part of {{ rh_rhacm_title }} and is enabled by default with {{ rh_rhacm }}. However, you do not need {{ rh_rhacm_title }} to use {{ hcp }}.

:::


The {{ mce_short }} is the cluster lifecycle Operator that provides cluster management capabilities for {{ product_title }} and {{ rh_rhacm }} hub clusters. The {{ mce_short }} enhances cluster fleet management and supports {{ product_title }} cluster lifecycle management across clouds and data centers.

**Figure 1. Cluster life cycle and foundation**

![Cluster life cycle and foundation](/_assets/images/acm-mce-intro-diagram.png)

You can use the {{ mce_short }} with {{ product_title }} as a standalone cluster manager or as part of a {{ rh_rhacm }} hub cluster.


:::tip

A management cluster is also known as the hosting cluster.

:::


You can deploy {{ product_title }} clusters by using two different control plane configurations: standalone or {{ hcp }}. The standalone configuration uses dedicated virtual machines or physical machines to host the control plane. With {{ hcp }} for {{ product_title }}, you create control planes as pods on a management cluster without the need for dedicated virtual or physical machines for each control plane.

**Figure 2. {{ rh_rhacm }} and the {{ mce_short }} introduction diagram**

![{{ rh_rhacm }} and the {{ mce_short }} introduction diagram](/_assets/images/rhacm-flow.png)