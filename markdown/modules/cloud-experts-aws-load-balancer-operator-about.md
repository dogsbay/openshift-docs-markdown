{%- set _mod_docs_content_type = "CONCEPT" %}
# AWS Load Balancer Operator overview {id="cloud-experts-aws-load-balancer-operator-about_{{ context }}"}

The AWS Load Balancer Operator installs and manages the AWS Load Balancer Controller, which provisions Application Load Balancers (ALBs) and Network Load Balancers (NLBs) with advanced annotations beyond the default in-tree provider. {._abstract}


:::tip

Load Balancers created by the AWS Load Balancer Operator cannot be used for {{ OCP_short }} Routes, and should only be used for individual services or ingress resources that do not need the full layer 7 capabilities of an {{ OCP_short }} Route.

:::


Compared with the default AWS in-tree load balancer provider, the AWS Load Balancer Controller is developed with advanced annotations for both ALBs and NLBs. Some advanced use cases are:

*   Using native Kubernetes Ingress objects with ALBs.
*   Integrating ALBs with the AWS Web Application Firewall (WAF) service. WAFv1, WAF classic, is no longer supported; use WAFv2.
*   Specifying custom NLB source IP ranges.
*   Specifying custom NLB internal IP addresses.

The AWS Load Balancer Operator is used to install, manage, and configure an instance of `aws-load-balancer-controller` in a {{ product_title }} cluster. For more information, see _Additional resources_.