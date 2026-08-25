{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the AWS WAF {id="cloud-experts-using-cloudfront-and-waf-configure-aws-waf_{{ context }}"}

Create AWS Web Application Firewall (WAF) rules and a web access control list (ACL) to monitor, protect, and control the HTTP and HTTPS requests that are forwarded to your {{ product_title }} workloads. {._abstract}

**Procedure**

1.  Create an AWS WAF rules file to apply to an ACL:
    ```terminal
    $ cat << EOF > ${SCRATCH}/waf-rules.json
    [
        {
          "Name": "AWS-AWSManagedRulesCommonRuleSet",
          "Priority": 0,
          "Statement": {
            "ManagedRuleGroupStatement": {
              "VendorName": "AWS",
              "Name": "AWSManagedRulesCommonRuleSet"
            }
          },
          "OverrideAction": {
            "None": {}
          },
          "VisibilityConfig": {
            "SampledRequestsEnabled": true,
            "CloudWatchMetricsEnabled": true,
            "MetricName": "AWS-AWSManagedRulesCommonRuleSet"
          }
        },
        {
          "Name": "AWS-AWSManagedRulesSQLiRuleSet",
          "Priority": 1,
          "Statement": {
            "ManagedRuleGroupStatement": {
              "VendorName": "AWS",
              "Name": "AWSManagedRulesSQLiRuleSet"
            }
          },
          "OverrideAction": {
            "None": {}
          },
          "VisibilityConfig": {
            "SampledRequestsEnabled": true,
            "CloudWatchMetricsEnabled": true,
            "MetricName": "AWS-AWSManagedRulesSQLiRuleSet"
          }
        }
    ]
    EOF
    ```

    This enables the Core (Common) and SQL AWS Managed Rule Sets.
1.  Create an AWS WAF Web ACL using the rules you specified in the previous step:
    ```terminal
    $ WAF_WACL=$(aws wafv2 create-web-acl \
      --name cloudfront-waf \
      --region ${REGION} \
      --default-action Allow={} \
      --scope CLOUDFRONT \
      --visibility-config SampledRequestsEnabled=true,CloudWatchMetricsEnabled=true,MetricName=${CLUSTER}-waf-metrics \
      --rules file://${SCRATCH}/waf-rules.json \
      --query 'Summary.Name' \
      --output text)
    ```