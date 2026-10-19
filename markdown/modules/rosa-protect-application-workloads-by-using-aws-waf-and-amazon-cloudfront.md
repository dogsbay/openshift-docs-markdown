{%- set _mod_docs_content_type = "CONCEPT" %}
# Tutorial: Protect application workloads by using AWS WAF and Amazon CloudFront {id="rosa-hcp-protect-application-workloads-by-using-aws-waf-and-amazon-cloudfront_{{ context }}"}

You can use AWS Web Application Firewall (WAF) to monitor HTTP and HTTPS requests that are forwarded to your protected web application resources. {._abstract}

You can use an Amazon CloudFront to add a WAF to your {{ product_title }} workloads. Using an external solution protects {{ product_title }} resources from experiencing denial of service due to handling the WAF.


:::note

WAFv1, WAF classic, is no longer supported. Use WAFv2.

:::


**Additional resources**
{._additional-resources}

*   [AWS Web Application Firewall (WAF)](https://aws.amazon.com/waf/)
*   [Adding Extra Security with AWS WAF, CloudFront and ROSA | Amazon Web Services on YouTube](https://www.youtube.com/watch?v=-HorEsl2ho4)