{%- set _mod_docs_content_type = "CONCEPT" %}
# Tutorial: Protect application workloads by using AWS WAF and AWS ALBs {id="rosa-hcp-protect-application-workloads-by-using-aws-waf-and-aws-albs_{{ context }}"}

You can use AWS Web Application Firewall (WAF) to monitor HTTP and HTTPS requests that are forwarded to your protected web application resources. {._abstract}

You can use an AWS Application Load Balancer (ALB) to add a Web Application Firewall (WAF) to your {{ product_title }} workloads. Using an external solution protects {{ product_title }} resources from experiencing denial of service due to handling the WAF.


:::important

It is recommended that you use the more flexible CloudFront method unless you absolutely must use an ALB-based solution. For more information, see _Additional resources_.

:::


**Additional resources**
{._additional-resources}

*   [AWS Web Application Firewall (WAF)](https://aws.amazon.com/waf/)
*   [AWS Load Balancer Operator](https://github.com/openshift/aws-load-balancer-operator)
*   [CloudFront method](/cloud_experts_tutorials/cloud-experts-using-cloudfront-and-waf#cloud-experts-using-cloudfront-and-waf)
*   [Adding Extra Security with AWS WAF, CloudFront and ROSA | Amazon Web Services on YouTube](https://www.youtube.com/watch?v=-HorEsl2ho4)