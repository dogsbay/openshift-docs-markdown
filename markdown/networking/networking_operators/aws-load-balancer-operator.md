{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AWS Load Balancer Operator {id="aws-load-balancer"}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "aws-load-balancer-operator" %}

The AWS Load Balancer Operator is an Operator supported by Red&#160;Hat that you can optionally install on Site Reliability Engineering (SRE)-managed {{ product_title }} clusters. {._abstract}


:::important

Load balancers created by the AWS Load Balancer Operator cannot serve OpenShift Routes, and should only serve individual services or ingress resources that do not need the full layer 7 capabilities of an OpenShift Route.

:::


The AWS Load Balancer Operator installs, manages, and configures the AWS Load Balancer Controller in a {{ product_title }} cluster.

The AWS Load Balancer Controller provisions AWS Application Load Balancers (ALBs) when you create Kubernetes Ingress resources and AWS Network Load Balancers (NLBs) when you create a Kubernetes Service resource with a type of `LoadBalancer`.

Compared with the default AWS in-tree load balancer provider, this controller provides advanced annotations for both ALBs and NLBs. Some advanced use cases are:

*   Using native Kubernetes Ingress objects with ALBs
*   Integrate ALBs with the AWS Web Application Firewall (WAF) service
*   Specify custom Network Load Balancer (NLB) source IP ranges
*   Specify custom NLB internal IP addresses

{% leveloffset +1 %}{% include "./modules/albo-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/aws-load-balancer-operator-environment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/tagging-aws-vpc-subnets.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if openshift_rosa %}
*   [Creating a {{ product_title }} cluster with STS using the default options](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-quickly#rosa-sts-creating-a-cluster-quickly)
{% endif %}
{% if openshift_rosa_hcp %}
*   [Creating {{ product_title }} clusters using the default options](/rosa_hcp/rosa-hcp-sts-creating-a-cluster-quickly#rosa-hcp-sts-creating-a-cluster-quickly_rosa-hcp-sts-creating-a-cluster-quickly)
{%- endif %}
*   [AWS Load Balancer Operator on GitHub](https://github.com/openshift/aws-load-balancer-operator)
*   [AWS Load Balancer Controller documentation](https://kubernetes-sigs.github.io/aws-load-balancer-controller/)
*   [AWS Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
*   [AWS Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
*   [Creating basic routes](/networking/ingress_load_balancing/routes/creating-basic-routes#creating-basic-routes)

{% leveloffset +1 %}{% include "./modules/albo-installation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if not openshift_rosa_hcp %}
*   [Creating many ingresses through a single AWS Load Balancer](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/networking_operators/aws-load-balancer-operator-1#nw-multiple-ingress-through-single-alb)
*   [Adding TLS termination](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ ocp_version }}/html/networking_operators/aws-load-balancer-operator-1#nw-adding-tls-termination_adding-tls-termination)
*   [Creating an instance of AWS Load Balancer Controller](https://docs.redhat.com/en/documentation/openshift_container_platform/4.13/html/networking/aws-load-balancer-operator-1#create-instance-aws-load-balancer-controller)
{%- endif %}
*   [AWS Documentation: Tag your Amazon EC2 resources](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html)

{% leveloffset +1 %}{% include "./modules/albo-validate-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/albo-deleting.md" %}{% endleveloffset %}